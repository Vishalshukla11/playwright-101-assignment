import { Page, Locator, expect } from "@playwright/test";

export class SliderPage {
  private readonly page: Page;
  private readonly sliderLink: Locator;
  private readonly sliderDefaultValue15: Locator;
  private readonly rangeValue15: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sliderLink = page.getByRole("link", { name: "Drag & Drop Sliders" });
    this.sliderDefaultValue15 = page.locator("#slider3 input[type='range']");
    this.rangeValue15 = page.locator("#rangeSuccess");
  }

  async goToPlayground(): Promise<void> {
    await this.page.goto("/selenium-playground/");
  }

  async clickDragDropSliders(): Promise<void> {
    await this.sliderLink.click();
  }

  async moveSliderToValue(targetValue: number): Promise<void> {
    const slider = this.sliderDefaultValue15;
    await slider.waitFor({ state: "visible" });

    // Use evaluate to set value + trigger events — fast and works on all browsers
    await slider.evaluate((el, value) => {
      const input = el as HTMLInputElement;
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype, "value"
      )?.set;
      nativeInputValueSetter?.call(input, String(value));
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }, targetValue);
  }

  async assertRangeValueEquals(expectedValue: number): Promise<void> {
    await expect(this.rangeValue15).toHaveText(String(expectedValue));
  }
}