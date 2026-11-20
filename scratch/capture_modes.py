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
    artifact_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\39d793de-f69b-4e41-b314-95c7a6650611"
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

            # Wait 3s for Next.js to render
            await asyncio.sleep(3)

            # Wait for all images
            await send_cmd(ws, 2, "Runtime.evaluate", {
                "expression": "Promise.all(Array.from(document.images).map(img => img.complete ? Promise.resolve() : new Promise(res => { img.onload = img.onerror = res; })))",
                "awaitPromise": True
            })
            await asyncio.sleep(1)

            # 1. Capture LIGHT MODE
            resp = await send_cmd(ws, 3, "Page.captureScreenshot", {"format": "png"})
            light_path = os.path.join(artifact_dir, "new_hero_card1_light_v3.png")
            with open(light_path, "wb") as f:
                f.write(base64.b64decode(resp["result"]["data"]))
            print("CAPTURED LIGHT:", light_path)

            # 2. CLICK THE THEME TOGGLE BUTTON in the sidebar
            toggle_resp = await send_cmd(ws, 4, "Runtime.evaluate", {
                "expression": """(() => {
                    const btn = document.querySelector('button[aria-label="Bật tắt chế độ tối"]');
                    if (btn) {
                        btn.click();
                        return 'CLICKED_TOGGLE';
                    }
                    return 'NOT_FOUND';
                })()"""
            })
            print("TOGGLE RESULT:", toggle_resp)
            await asyncio.sleep(2)

            # 3. Capture DARK MODE
            resp = await send_cmd(ws, 5, "Page.captureScreenshot", {"format": "png"})
            dark_path = os.path.join(artifact_dir, "new_hero_card1_dark_v3.png")
            with open(dark_path, "wb") as f:
                f.write(base64.b64decode(resp["result"]["data"]))
            print("CAPTURED DARK:", dark_path)

    finally:
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except Exception:
            proc.kill()

asyncio.run(run())
