import urllib.request
import json
import asyncio
import websockets
import subprocess
import time
import base64
import os

subprocess.run(["powershell", "-Command", "Get-Process chrome -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue"])
time.sleep(1)

proc = subprocess.Popen([
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--remote-debugging-port=9444",
    r"--user-data-dir=d:\Pj\JPDAAA\tmp_cdp_9444",
    "--window-size=1536,1024",
    "--disable-gpu",
    "http://localhost:3000"
])
time.sleep(3)

async def send_cmd(ws, msg_id, method, params=None):
    payload = {"id": msg_id, "method": method}
    if params:
        payload["params"] = params
    await ws.send(json.dumps(payload))
    while True:
        resp = json.loads(await ws.recv())
        if resp.get("id") == msg_id:
            return resp

async def check():
    artifact_dir = r"C:\Users\Lenovo\.gemini\antigravity\brain\39d793de-f69b-4e41-b314-95c7a6650611"
    try:
        with urllib.request.urlopen("http://127.0.0.1:9444/json") as r:
            ws_url = json.loads(r.read())[0]["webSocketDebuggerUrl"]
        async with websockets.connect(ws_url, max_size=30*1024*1024) as ws:
            # Set viewport
            await send_cmd(ws, 1, "Emulation.setDeviceMetricsOverride", {
                "width": 1536,
                "height": 1024,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            # Poll until window.__setTheme is ready (up to 15s)
            ready = False
            for i in range(15):
                resp = await send_cmd(ws, 100 + i, "Runtime.evaluate", {
                    "expression": "typeof window.__setTheme === 'function'",
                    "returnByValue": True
                })
                if resp.get("result", {}).get("result", {}).get("value") is True:
                    ready = True
                    print(f"Hydrated and ready after {i+1}s!")
                    break
                await asyncio.sleep(1)

            if not ready:
                print("WARNING: Hydration took longer than 15s")

            # 1. Capture LIGHT MODE
            await send_cmd(ws, 2, "Runtime.evaluate", {
                "expression": "window.__setTheme ? window.__setTheme('light') : null"
            })
            await asyncio.sleep(2)
            resp = await send_cmd(ws, 3, "Page.captureScreenshot", {"format": "png"})
            light_path = os.path.join(artifact_dir, "verified_light_mode.png")
            with open(light_path, "wb") as f:
                f.write(base64.b64decode(resp["result"]["data"]))
            print("CAPTURED LIGHT:", light_path)

            # 2. Switch to DARK MODE
            await send_cmd(ws, 4, "Runtime.evaluate", {
                "expression": "window.__setTheme('dark')"
            })
            await asyncio.sleep(2)
            resp = await send_cmd(ws, 5, "Page.captureScreenshot", {"format": "png"})
            dark_path = os.path.join(artifact_dir, "verified_dark_mode.png")
            with open(dark_path, "wb") as f:
                f.write(base64.b64decode(resp["result"]["data"]))
            print("CAPTURED DARK:", dark_path)

    finally:
        proc.terminate()

asyncio.run(check())
