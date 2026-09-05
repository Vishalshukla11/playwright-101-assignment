import { test } from "@playwright/test";
import { SliderPage } from "../pages/SliderPage";

/**
 * Test Scenario 2: Drag & Drop Slider
 *
 * Steps:
 * 1. Open TestMu AI's Selenium Playground
 * 2. Click "Drag & Drop Sliders"
 * 3. Find the slider with "Default value 15"
 * 4. Drag the slider to make its value 95
 * 5. Validate the range value shows 95
 */

test.describe("Scenario 2 - Drag and Drop Slider", () => {
  test("should drag the Default value 15 slider to 95", async ({ page }) => {
    const sliderPage = new SliderPage(page);

    // Step 1: Open the Selenium Playground
    await sliderPage.goToPlayground();

    // Step 2: Click "Drag & Drop Sliders"
    await sliderPage.clickDragDropSliders();

    // Steps 3 + 4: Find slider with default 15 and move it to 95
    await sliderPage.moveSliderToValue(95);

    // Step 5: Validate the displayed range value is now 95
    await sliderPage.assertRangeValueEquals(95);
  });
});
