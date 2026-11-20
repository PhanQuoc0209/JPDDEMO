import subprocess
import time
import json
import base64
import urllib.request
import asyncio
import websockets
import os

# Kill any existing chrome
subprocess.run(["powershell", "-Command", "Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue"], capture_output=True)
time.sleep(1)

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
user_data_dir = r"d:\Pj\JPDAAA\tmp_cdp_9444"

proc = subprocess.Popen([
    chrome_path,
    "--headless=new",
    "--remote-debugging-port=9444",
    f"--user-data-dir={user_data_dir}",
    "--window-size=1536,1024",
    "--disable-gpu",
    "http://localhost:3000"
])

time.sleep(2)

async def send_cmd(ws, msg_id, method, params=None):
    payload = {"id": msg_id, "method": method}
    if params:
        payload["params"] = params
    await ws.send(json.dumps(payload))
    while True:
        resp = json.loads(await ws.recv())
        if resp.get("id") == msg_id:
            return resp

async def run():
    try:
        with urllib.request.urlopen("http://127.0.0.1:9444/json") as r:
            tabs = json.loads(r.read())
            ws_url = tabs[0]["webSocketDebuggerUrl"]

        async with websockets.connect(ws_url, max_size=30 * 1024 * 1024) as ws:
            # Set viewport to 1536x1024
            await send_cmd(ws, 1, "Emulation.setDeviceMetricsOverride", {
                "width": 1536,
                "height": 1024,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            # Wait 4s for Next.js to render
            await asyncio.sleep(4)

            # Ensure light mode
            await send_cmd(ws, 2, "Runtime.evaluate", {
                "expression": "localStorage.setItem('manabiman-theme', 'light'); document.documentElement.dataset.theme = 'light'; document.documentElement.classList.remove('dark');"
            })
            await asyncio.sleep(1)

            # Wait for all images to load
            await send_cmd(ws, 3, "Runtime.evaluate", {
                "expression": "Promise.all(Array.from(document.images).map(img => img.complete ? Promise.resolve() : new Promise(res => { img.onload = img.onerror = res; })))",
                "awaitPromise": True
            })
            await asyncio.sleep(1)

            # Capture screenshot
            resp = await send_cmd(ws, 4, "Page.captureScreenshot", {"format": "png"})
            data = resp["result"]["data"]
            out_path = r"d:\Pj\JPDAAA\light_screenshot_1536.png"
            with open(out_path, "wb") as f:
                f.write(base64.b64decode(data))
            print("CAPTURED:", out_path)
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

asyncio.run(run())
