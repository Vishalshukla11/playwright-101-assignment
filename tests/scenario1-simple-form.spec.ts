import { test } from "@playwright/test";
import { SimpleFormPage } from "../pages/SimpleFormPage";

/**
 * Test Scenario 1: Simple Form Demo
 *
 * Steps:
 * 1. Open TestMu AI's Selenium Playground
 * 2. Click "Simple Form Demo"
 * 3. Validate URL contains "simple-form-demo"
 * 4. Enter a message using a variable
 * 5. Click "Get Checked Value"
 * 6. Validate the message appears in "Your Message:" panel
 */

// The message we want to test with — stored in a variable as required
const testMessage = "Welcome to TestMu AI";

test.describe("Scenario 1 - Simple Form Demo", () => {
  test("should display entered message in the Your Message panel", async ({
    page,
  }) => {
    // Create page object — all locators and actions are inside this class
    const simpleFormPage = new SimpleFormPage(page);

    // Step 1: Open the Selenium Playground
    await simpleFormPage.goToPlayground();

    // Step 2: Click "Simple Form Demo"
    await simpleFormPage.clickSimpleFormDemo();

    // Step 3: Validate URL contains "simple-form-demo"
    await simpleFormPage.assertUrlContainsSimpleFormDemo();

    // Step 4 + 5: Enter the message variable, then click "Get Checked Value"
    await simpleFormPage.enterMessage(testMessage);
    await simpleFormPage.clickGetCheckedValue();

    // Step 6: Validate the result panel shows the same message
    await simpleFormPage.assertYourMessageEquals(testMessage);
  });
});
