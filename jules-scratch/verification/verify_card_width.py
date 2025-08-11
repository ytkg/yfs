from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Set a larger viewport to ensure all cards are visible if possible
    page.set_viewport_size({"width": 1280, "height": 1024})

    # 1. Navigate to the page
    page.goto("http://localhost:5173")

    # 2. Find the BIOGRAPHY section
    bio_section = page.locator("#bio")
    expect(bio_section).to_be_visible()

    # Scroll to the section to make sure it's in view
    bio_section.scroll_into_view_if_needed()

    # Give it a moment to settle
    page.wait_for_timeout(500)

    # 3. Take a screenshot of the biography section
    screenshot_path = "jules-scratch/verification/verification.png"
    bio_section.screenshot(path=screenshot_path)

    print(f"Screenshot saved to {screenshot_path}")

    browser.close()

with sync_playwright() as p:
    run(p)
