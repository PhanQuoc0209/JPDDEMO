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
time.sleep(2.5)

async def check():
    try:
        with urllib.request.urlopen("http://127.0.0.1:9444/json") as r:
            ws_url = json.loads(r.read())[0]["webSocketDebuggerUrl"]
        async with websockets.connect(ws_url, max_size=30*1024*1024) as ws:
            await asyncio.sleep(2)
            script = """(() => {
                const el = document.querySelector('.hero-gradient-overlay');
                if (!el) return 'NO_EL';
                const sheets = Array.from(document.styleSheets);
                const matchingRules = [];
                for (const sheet of sheets) {
                    try {
                        for (const rule of sheet.cssRules) {
                            if (rule.selectorText && rule.selectorText.includes('hero-gradient')) {
                                matchingRules.push({ selector: rule.selectorText, cssText: rule.cssText });
                            }
                        }
                    } catch (e) {}
                }
                return matchingRules;
            })()"""
            msg = {"id": 1, "method": "Runtime.evaluate", "params": {"expression": script, "returnByValue": True}}
            await ws.send(json.dumps(msg))
            resp = json.loads(await ws.recv())
            print("RULES:", resp["result"]["result"]["value"])
    finally:
        proc.terminate()

asyncio.run(check())
