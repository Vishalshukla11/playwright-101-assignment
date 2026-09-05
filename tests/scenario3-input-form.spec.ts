import { test } from "@playwright/test";
import { InputFormPage } from "../pages/InputFormPage";
import { validFormData } from "../test-data/formData";

/**
 * Test Scenario 3: Input Form Submit
 *
 * Steps:
 * 1. Open TestMu AI's Selenium Playground
 * 2. Click "Input Form Submit"
 * 3. Click Submit without filling any fields → validate error message
 * 4. Fill all fields including country = "United States"
 * 5. Click Submit
 * 6. Validate success message on screen
 */

test.describe("Scenario 3 - Input Form Submit", () => {
  test("should show error when form submitted empty", async ({ page }) => {
    const inputFormPage = new InputFormPage(page);

    // Step 1 + 2: Navigate and click "Input Form Submit"
    await inputFormPage.goToPlayground();
    await inputFormPage.clickInputFormSubmit();

    // Step 3: Click Submit without filling anything
    await inputFormPage.clickSubmitEmpty();

    // Validate browser validation fires (required field check)
    await inputFormPage.assertErrorMessageVisible();
  });

  test("should submit form successfully with valid data", async ({ page }) => {
    const inputFormPage = new InputFormPage(page);

    // Step 1 + 2: Navigate and click "Input Form Submit"
    await inputFormPage.goToPlayground();
    await inputFormPage.clickInputFormSubmit();

    // Step 4: Fill all fields using the test data object
    // Country "United States" is selected by visible text inside fillForm()
    await inputFormPage.fillForm(validFormData);

    // Step 5: Click Submit
    await inputFormPage.clickSubmit();

    // Step 6: Validate success message
    await inputFormPage.assertSuccessMessage();
  });
});
