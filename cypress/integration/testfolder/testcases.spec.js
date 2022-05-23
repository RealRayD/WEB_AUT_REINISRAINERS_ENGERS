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
      AutomationPracticeFormPage.getRadioMale.click({force:true});
      AutomationPracticeFormPage.getNumber.type(data.number);
      AutomationPracticeFormPage.getBirth.click();
      AutomationPracticeFormPage.getYear.select(data.year);
      AutomationPracticeFormPage.getMonth.select(data.month);
      AutomationPracticeFormPage.getDate.click();
      AutomationPracticeFormPage.getSubjects.type(data.subject);
      AutomationPracticeFormPage.getEconomics.click();
      AutomationPracticeFormPage.getHobbiesMusic.contains(data.hobbies).click();
      cy.get('input[type=file]').selectFile('../WEB_AUT_REINISRAINERS_ENGERS/cypress/files/607.jpg');
      AutomationPracticeFormPage.getAddress.type(data.address);
      AutomationPracticeFormPage.getState.type(data.state);
      AutomationPracticeFormPage.getStateChoice.click();
      AutomationPracticeFormPage.getCity.type(data.city);
      AutomationPracticeFormPage.getCityChoice.click();
      AutomationPracticeFormPage.getSubmit.click();

    });
  });
});
      
