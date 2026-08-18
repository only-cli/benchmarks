# Helper for the playwright-html, selenium-html, and computer-use adapters.
# Renders a page in a real headless browser and prints one JSON object on
# stdout: the rendered HTML (mode html) or screenshot dimensions and byte
# size (mode screenshot, 1024x768 viewport, PNG). Logs stay on stderr.
import base64
import json
import sys
import time


def playwright_render(url: str, mode: str) -> dict:
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1024, "height": 768})
        t0 = time.monotonic()
        page.goto(url, wait_until="domcontentloaded", timeout=60_000)
        if mode == "screenshot":
            shot = page.screenshot(type="png")
            out = {"width": 1024, "height": 768, "bytes": len(shot)}
        else:
            out = {"output": page.content()}
        out["fetchMs"] = round((time.monotonic() - t0) * 1000)
        browser.close()
        return out


def selenium_render(url: str) -> dict:
    from selenium import webdriver

    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)
    try:
        t0 = time.monotonic()
        driver.get(url)
        return {
            "output": driver.page_source,
            "fetchMs": round((time.monotonic() - t0) * 1000),
        }
    finally:
        driver.quit()


engine, mode, url = sys.argv[1], sys.argv[2], sys.argv[3]
if engine == "selenium":
    print(json.dumps(selenium_render(url)))
else:
    print(json.dumps(playwright_render(url, mode)))
