# Helper for the browser-use adapter: navigate once and print the browser
# state message browser-use composes for its model on every agent step.
# Logs go to stderr; stdout carries a single JSON object.
import asyncio
import json
import sys
import time

from browser_use.browser import BrowserSession


async def main() -> None:
    url = sys.argv[1]
    session = BrowserSession(headless=True)
    await session.start()
    t0 = time.monotonic()
    await session.navigate_to(url)
    state = await session.get_state_as_text()
    fetch_ms = round((time.monotonic() - t0) * 1000)
    await session.kill()
    print(json.dumps({"output": state, "fetchMs": fetch_ms}))


asyncio.run(main())
