import BasePage from "./BasePage";

class AutomationPracticeFormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  
  static get getFirstName() {
    return cy.get("#firstName");
  }
  static get getLastName() {
    return cy.get("#lastfName");
  }
  static get getEmail() {
    return cy.get("#userEmail");
  }
  static get getRadioMale() {
    return cy.get("#genterWrapper > .col-md-9 > :nth-child(1)");
  }
  static get getNumber() {
    return cy.get("#userNumber");
  }
  //couldnt figure this one out because of the error
  static get getBirth() {
    return cy.get("#dateOfBirthInput");
  }

  static get getSubjects() {
    return cy.get(".subjects-auto-complete__value-container");
  }
  static get getHobbiesMusic() {
    return cy.get("#genterWrapper > .col-md-9 > :nth-child(1)");
  }
  
  static get getAddress() {
    return cy.get("#currentAddress");
  }
  static get getState() {
    return cy.get("#state");
  }
  static get getCity() {
    return cy.get("#city");
  }

  
}
export default AutomationPracticeFormPage;