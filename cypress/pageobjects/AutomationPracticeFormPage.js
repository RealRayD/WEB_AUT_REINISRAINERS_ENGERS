import BasePage from "./BasePage";

class AutomationPracticeFormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get getFirstName() {
    return cy.get("#firstName");
  }
  static get getLastName() {
    return cy.get("#lastName");
  }
  static get getEmail() {
    return cy.get("#userEmail");
  }
  static get getRadioMale() {
    return cy.get("#gender-radio-1");
  }
  static get getNumber() {
    return cy.get("#userNumber");
  }
  static get getBirth() {
    return cy.get("#dateOfBirthInput");
  }
  static get getYear() {
    return cy.get(".react-datepicker__year-select");
  }
  static get getMonth() {
    return cy.get(".react-datepicker__month-select");
  }
  static get getDate() {
    return cy.get(":nth-child(5) > .react-datepicker__day--028");
  }
  static get getSubjects() {
    return cy.get("#subjectsContainer");
  }
  static get getEconomics() {
    return cy.get("#react-select-2-option-0");
  }
  static get getHobbiesMusic() {
    return cy.get("#hobbiesWrapper");
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
  static get getStateChoice() {
    return cy.get("#react-select-3-option-0");
  }
  static get getCityChoice() {
    return cy.get("#react-select-4-option-0");
  }
  static get getSubmit() {
    return cy.get("#submit");
  }
  

  
}
export default AutomationPracticeFormPage;