import BasePage from "../../pageObjects/BasePage";
import AutomationPracticeFormPage from "../../pageobjects/AutomationPracticeFormPage";


describe("Text box scenarios", () => {
  beforeEach(() => {
    AutomationPracticeFormPage.visit();
  });
  
  it("Filling in Text Boxes", () => {
    cy.fixture("datapage").then((data) => {
      AutomationPracticeFormPage.getFirstName.type(data.firstName);
      AutomationPracticeFormPage.getLastName.type(data.lastName);
      AutomationPracticeFormPage.getEmail.type(data.email);
      AutomationPracticeFormPage.getRadioMale.should("contain", "Male").click();
      AutomationPracticeFormPage.getNumber.type(data.number);
      //couldnt figure out because of typescript error that didnt let me run tests
      //AutomationPracticeFormPage.getBirth.click();
      AutomationPracticeFormPage.getSubjects.type(data.subject,"{enter}");
      AutomationPracticeFormPage.getHobbiesMusic.should("contain", "Music").click();
      cy.get('input[type=file]').selectFile('/cypress/files/607.jpg');
      AutomationPracticeFormPage.getAddress.type(data.address);
      AutomationPracticeFormPage.getState.type(data.state,"{enter}");
      AutomationPracticeFormPage.getCity.type(data.city,"{enter}");
    });
  });
});
      
