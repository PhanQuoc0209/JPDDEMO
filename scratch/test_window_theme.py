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
            msg = {"id": 1, "method": "Runtime.evaluate", "params": {"expression": """(() => {
                if (window.__setTheme) {
                    window.__setTheme('dark');
                    return 'CALLED_SET_THEME_DARK';
                }
                return 'NOT_FOUND_ON_WINDOW';
            })()""", "returnByValue": True}}
            await ws.send(json.dumps(msg))
            resp1 = json.loads(await ws.recv())
            print("SET_THEME:", resp1)

            await asyncio.sleep(1.5)
            msg2 = {"id": 2, "method": "Runtime.evaluate", "params": {"expression": """(() => {
                return {
                    datasetTheme: document.documentElement.dataset.theme,
                    className: document.documentElement.className,
                    localTheme: localStorage.getItem('manabiman-theme')
                };
            })()""", "returnByValue": True}}
            await ws.send(json.dumps(msg2))
            resp2 = json.loads(await ws.recv())
            print("AFTER:", resp2["result"]["result"]["value"])
    finally:
        proc.terminate()

asyncio.run(check())
