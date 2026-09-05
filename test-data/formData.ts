/**
 * FormData interface — defines the shape of form input data.
 *
 * Using an interface here means TypeScript will warn us if we
 * forget to provide any field when creating test data.
 */
export interface FormData {
  name: string;
  email: string;
  password: string;
  company: string;
  website: string;
  country: string;
  city: string;
  address1: string;
  address2: string;
  state: string;
  zipCode: string;
}

/**
 * Valid form data for the happy path test.
 * In real projects this would come from a fixture file or environment config.
 */
export const validFormData: FormData = {
  name: "Vishal Shukla",
  email: "vishal.shukla.qa@gmail.com",
  password: "Test@1234",
  company: "SavMoney",
  website: "https://savmoney.ae",
  country: "United States", // Must match the dropdown option text exactly
  city: "New York",
  address1: "123 Test Street",
  address2: "Suite 456",
  state: "New York",
  zipCode: "10001",
};
