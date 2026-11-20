import subprocess
import time
import json
import base64
import urllib.request
import asyncio
import websockets

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
user_data_dir = r"d:\Pj\JPDAAA\tmp_cdp"

proc = subprocess.Popen([
    chrome_path,
    "--headless=new",
    "--remote-debugging-port=9222",
    f"--user-data-dir={user_data_dir}",
    "--window-size=1536,1024",
    "--disable-gpu",
    "about:blank"
])

time.sleep(1.5)

async def capture():
    try:
        with urllib.request.urlopen("http://127.0.0.1:9222/json") as r:
            tabs = json.loads(r.read())
            ws_url = tabs[0]["webSocketDebuggerUrl"]

        async with websockets.connect(ws_url) as ws:
            # Set viewport to 1536x1024
            await ws.send(json.dumps({
                "id": 1,
                "method": "Emulation.setDeviceMetricsOverride",
                "params": {
                    "width": 1536,
                    "height": 1024,
                    "deviceScaleFactor": 1,
                    "mobile": False
                }
            }))
            await ws.recv()

            # Navigate to localhost:3000
            await ws.send(json.dumps({
                "id": 2,
                "method": "Page.navigate",
                "params": {"url": "http://localhost:3000"}
            }))
            await ws.recv()

            # Wait 5 seconds for Webpack compilation
            await asyncio.sleep(5)

            # Ensure light mode
            await ws.send(json.dumps({
                "id": 3,
                "method": "Runtime.evaluate",
                "params": {
                    "expression": "localStorage.setItem('manabiman-theme', 'light'); document.documentElement.dataset.theme = 'light'; document.documentElement.classList.remove('dark'); window.dispatchEvent(new Event('storage'));"
                }
            }))
            await ws.recv()
            await asyncio.sleep(1)

            # Capture screenshot
            await ws.send(json.dumps({
                "id": 4,
                "method": "Page.captureScreenshot",
                "params": {"format": "png"}
            }))
            resp = json.loads(await ws.recv())
            data = resp["result"]["data"]
            with open(r"d:\Pj\JPDAAA\light_screenshot_1536.png", "wb") as f:
                f.write(base64.b64decode(data))
            print("SUCCESS")
    finally:
        proc.terminate()

asyncio.run(capture())
