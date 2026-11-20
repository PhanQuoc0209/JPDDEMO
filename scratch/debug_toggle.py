import urllib.request
import json
import asyncio
import websockets
import subprocess
import time

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

async def check():
    try:
        with urllib.request.urlopen("http://127.0.0.1:9444/json") as r:
            ws_url = json.loads(r.read())[0]["webSocketDebuggerUrl"]
        async with websockets.connect(ws_url, max_size=30*1024*1024) as ws:
            await asyncio.sleep(2)
            # Find and click button
            msg = {"id": 1, "method": "Runtime.evaluate", "params": {"expression": """(() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const themeBtn = buttons.find(b => b.getAttribute('aria-label') === 'Bật tắt chế độ tối');
                if (!themeBtn) return 'BUTTON_NOT_FOUND';
                themeBtn.click();
                return 'CLICKED';
            })()""", "returnByValue": True}}
            await ws.send(json.dumps(msg))
            resp1 = json.loads(await ws.recv())
            print("CLICK:", resp1)

            # Wait 1s and check data-theme
            await asyncio.sleep(1)
            msg2 = {"id": 2, "method": "Runtime.evaluate", "params": {"expression": """(() => {
                return {
                    datasetTheme: document.documentElement.dataset.theme,
                    className: document.documentElement.className,
                    localTheme: localStorage.getItem('manabiman-theme')
                };
            })()""", "returnByValue": True}}
            await ws.send(json.dumps(msg2))
            resp2 = json.loads(await ws.recv())
            print("AFTER CLICK:", resp2["result"]["result"]["value"])
    finally:
        proc.terminate()

asyncio.run(check())
