import { Page, Locator, expect } from "@playwright/test";

/**
 * SimpleFormPage — Page Object for the "Simple Form Demo" page
 *
 * Page Object Model (POM) keeps all locators in one place.
 * If the UI changes, you only update THIS file — not every test.
 */
export class SimpleFormPage {
  // The browser page object from Playwright
  private readonly page: Page;

  // ─── Locators ─────────────────────────────────────────────────────────────
  // Locator 1: by link text (used to click "Simple Form Demo" from homepage)
  private readonly simpleFormLink: Locator;

  // Locator 2: by placeholder attribute (used for the message input)
  private readonly messageInput: Locator;

  // Locator 3: by CSS selector (used for the "Get Checked Value" button)
  private readonly getCheckedValueButton: Locator;

  // Locator 4: by CSS selector targeting the result panel
  private readonly yourMessageResult: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locator 1 — link text: finds the "Simple Form Demo" link on the homepage
    this.simpleFormLink = page.getByRole("link", { name: "Simple Form Demo" });

    // Locator 2 — placeholder: finds the input box labelled "Enter Message"
    this.messageInput = page.getByPlaceholder("Please enter your Message");

    // Locator 3 — CSS selector: finds the "Get Checked Value" button
    this.getCheckedValueButton = page.getByRole('button', { name: 'Get Checked Value' });

    // Locator 4 — CSS selector: finds the result text displayed on the right panel
    this.yourMessageResult = page.locator("#message");
  }

  // ─── Actions ──────────────────────────────────────────────────────────────

  /** Navigate to the Selenium Playground homepage */
  async goToPlayground(): Promise<void> {
    await this.page.goto("/selenium-playground/");
  }

  /** Click the "Simple Form Demo" link */
  async clickSimpleFormDemo(): Promise<void> {
    await this.simpleFormLink.click();
  }

  /** Type a message into the "Enter Message" input */
  async enterMessage(message: string): Promise<void> {
    await this.messageInput.fill(message);
  }

  /** Click the "Get Checked Value" button */
  async clickGetCheckedValue(): Promise<void> {
    await this.getCheckedValueButton.waitFor({ state: "visible" });
    await this.getCheckedValueButton.click();
    await expect(this.yourMessageResult).not.toBeEmpty();
  }

  // ─── Assertions ───────────────────────────────────────────────────────────

  /** Assert URL contains "simple-form-demo" */
  async assertUrlContainsSimpleFormDemo(): Promise<void> {
    await expect(this.page).toHaveURL(/simple-form-demo/);
  }

  /** Assert the result panel shows the expected message */
  async assertYourMessageEquals(expectedMessage: string): Promise<void> {
    await expect(this.yourMessageResult).toHaveText(expectedMessage);
  }
}
