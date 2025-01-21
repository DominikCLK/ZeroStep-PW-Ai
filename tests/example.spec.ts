import { test, expect } from "@playwright/test";
import { ai } from '@zerostep/playwright'

test.describe("Verification of sending the contact form", () => {
  test("Fill contact form with data and send form", async ({ page }) => {
    const aiArgs = { page, test }
    
    await page.goto('contact');
    
    await ai('Find and fill the input field labeled "First Name" with "John Smith"', aiArgs);
    await ai('Find and fill the input field labeled "Last Name" with "test@example.com"', aiArgs);
    await ai('Find and fill the input field labeled "Email address" with "test@example.com"', aiArgs);
    await ai('Find and select from the dropdown menu labeled "Subject" the first available option', aiArgs);
    await ai('Find the textarea labeled "Message" and type test message that contains exactly fifty characters', aiArgs);
    
    await ai('Find and click the button labeled "Send"', aiArgs);
    
    const alert = await ai('Find the success message alert that appears after form submission', aiArgs);
    await expect(alert).toContainText('Thanks for your message! We will contact you shortly.');
  });
});