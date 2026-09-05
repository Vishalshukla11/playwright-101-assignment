import { Page, Locator, expect } from "@playwright/test";
import { FormData } from "../test-data/formData";

export class InputFormPage {
  private readonly page: Page;
  private readonly inputFormLink: Locator;
  private readonly submitButton: Locator;
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly companyInput: Locator;
  private readonly websiteInput: Locator;
  private readonly countryDropdown: Locator;
  private readonly cityInput: Locator;
  private readonly address1Input: Locator;
  private readonly address2Input: Locator;
  private readonly stateInput: Locator;
  private readonly zipCodeInput: Locator;
  private readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inputFormLink = page.getByRole("link", { name: "Input Form Submit" });
    this.submitButton = page.getByRole("button", { name: "Submit" });

    // Exact locators from codegen
    this.nameInput = page.getByRole("textbox", { name: "Name" });
    this.emailInput = page.getByRole("textbox", { name: "Email*" });
    this.passwordInput = page.getByRole("textbox", { name: "Password*" });
    this.companyInput = page.getByRole("textbox", { name: "Company" });
    this.websiteInput = page.getByRole("textbox", { name: "Website" });
    this.countryDropdown = page.getByRole("combobox");
    this.cityInput = page.getByRole("textbox", { name: "City", exact: true });
    this.address1Input = page.getByRole("textbox", { name: "Address 1" });
    this.address2Input = page.getByRole("textbox", { name: "Address 2" });
    this.stateInput = page.getByRole("textbox", { name: "City* State*" });
    this.zipCodeInput = page.getByRole("textbox", { name: "Zip Code*" });

    this.successMessage = page.locator("p.success-msg");
  }

  async goToPlayground(): Promise<void> {
    await this.page.goto("/selenium-playground/");
  }

  async clickInputFormSubmit(): Promise<void> {
    await this.inputFormLink.click();
  }

  async clickSubmitEmpty(): Promise<void> {
    await this.submitButton.click();
  }

  async fillForm(data: FormData): Promise<void> {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    await this.companyInput.fill(data.company);
    await this.websiteInput.fill(data.website);
    await this.countryDropdown.selectOption({ label: data.country });
    await this.cityInput.fill(data.city);
    await this.address1Input.fill(data.address1);
    await this.address2Input.fill(data.address2);
    await this.stateInput.fill(data.state);
    await this.zipCodeInput.fill(data.zipCode);
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async assertErrorMessageVisible(): Promise<void> {
    const isInvalid = await this.nameInput.evaluate((el) => {
      return !(el as HTMLInputElement).validity.valid;
    });
    expect(isInvalid).toBe(true);
  }

  async assertSuccessMessage(): Promise<void> {
    await expect(this.successMessage).toContainText(
        "Thanks for contacting us, we will get back to you shortly."
    );
  }
}