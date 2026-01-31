/// <reference types ="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { constants } from "../Constants/constants";
import { regObjects } from "../../PageObjects/Registration";
import "@shelex/cypress-allure-plugin";

constants.fullName = random_name(10);
constants.regName = random_name(10) + "@mailinator.com";
constants.patientRegName = random_name(10) + "@mailinator.com";
constants.patientFullname = random_name(10);
constants.password = Cypress.env("password");


Given("doctor user should be present on Registration page", () => {
  let url = regObjects.doc_url;
  
  cy.visit(url);
  cy.url().should("include", "create-an-account");
});

When(
  "user provides valid credentials for doctor and clicks On login button",
  () => {
    cy.get(
      ".elementor-element-17dbc7f > .elementor-widget-container > .elementor-heading-title"
    ).should("include.text", "Join 1,25,000");

    
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("loginRequest");

    cy.get(regObjects.Name)
      .should("be.visible")
      .type(constants.fullName)
      .should("have.value", constants.fullName);
    cy.get(regObjects.Email)
      .eq(1)
      .type(constants.regName)
      .should("have.value", constants.regName);
    cy.get(regObjects.Password)
      .eq(1)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.Password_v)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.ResterBtn).click();
    cy.wait("@loginRequest");
  }
);

Then("user should get navigated to doctor's Dashboard", () => {
  cy.get("#dc-wrapper").should("be.visible");
  cy.url().should("include", "dashboard");
});

Given("patient user should be present on Registration page", () => {
  let url = regObjects.patient_url;
  cy.visit(url);
  cy.url().should("include", "join-now");
});

When(
  "user provides valid credentials for patient and clicks On login button",
  () => {
    cy.get(
      ".elementor-element-db7969c > .elementor-widget-container > .elementor-heading-title"
    ).should(
      "contain.text",
      "Let’s create a new account to continue booking your appointment"
    );
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("loginRequest");

    cy.get(regObjects.Name)
      .type(constants.patientFullname)
      .should("have.value", constants.patientFullname);
    cy.get(regObjects.Email)
      .eq(1)
      .type(constants.patientRegName)
      .should("have.value", constants.patientRegName);
    cy.get(regObjects.Password)
      .eq(1)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.Password_v)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.ResterBtn).click();
    cy.wait("@loginRequest");
  }
);

Then("user should get navigated to patient's Dashboard", () => {
  cy.get("#dc-wrapper").should("be.visible");
});

When(
  "User provides Invalid credentials for doctor and clicks On login button",
  () => {
    cy.get(
      ".elementor-element-17dbc7f > .elementor-widget-container > .elementor-heading-title"
    ).should("include.text", "Join 1,25,000");

    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("loginRequest");
    cy.get(regObjects.Name)
      .type(Cypress.env("doctorUsername"))
      .should("have.value", Cypress.env("doctorUsername"));
    cy.get(regObjects.Email)
      .eq(1)
      .type(Cypress.env("doctorUsername"))
      .should("have.value", Cypress.env("doctorUsername"));
    cy.get(regObjects.Password)
      .eq(1)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.Password_v)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.ResterBtn).click();
    cy.wait("@loginRequest");
  }
);

When(
  "User provides Invalid credentials for patient and clicks On login button",
  () => {
    cy.get(
      ".elementor-element-db7969c > .elementor-widget-container > .elementor-heading-title"
    ).should(
      "contain.text",
      "Let’s create a new account to continue booking your appointment"
    );
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("loginRequest");
    cy.get(regObjects.Name)
      .type(Cypress.env("patientUsername"))
      .should("have.value", Cypress.env("patientUsername"));
    cy.get(regObjects.Email)
      .eq(1)
      .type(Cypress.env("patientUsername"))
      .should("have.value", Cypress.env("patientUsername"));
    cy.get(regObjects.Password)
      .eq(1)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.Password_v)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.ResterBtn).click();
    cy.wait("@loginRequest");
  }
);

Then("user should not get navigated to patient's Dashboard", () => {
  cy.url().should("not.include", "dashboard");
});

Then("user should not get navigated to doctor's Dashboard", () => {
  cy.url().should("not.include", "dashboard");
});

When(
  "User provides Existing Email address for doctor and clicks On login button",
  () => {
    cy.get(
      ".elementor-element-17dbc7f > .elementor-widget-container > .elementor-heading-title"
    ).should("include.text", "Join 1,25,000");
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("loginRequest");
    cy.get(regObjects.Name)
      .type(Cypress.env("doctorUsername"))
      .should("have.value", Cypress.env("doctorUsername"));
    cy.get(regObjects.Email)
      .eq(1)
      .type(Cypress.env("doctorUsername"))
      .should("have.value", Cypress.env("doctorUsername"));
    cy.get(regObjects.Password)
      .eq(1)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.Password_v)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.ResterBtn).click();
    cy.wait("@loginRequest");
  }
);

When(
  "User provides Existing Email address for patient and clicks On login button",
  () => {
    cy.get(
      ".elementor-element-db7969c > .elementor-widget-container > .elementor-heading-title"
    ).should(
      "contain.text",
      "Let’s create a new account to continue booking your appointment"
    );
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("loginRequest");
    cy.get(regObjects.Name)
      .type(Cypress.env("patientUsername"))
      .should("have.value", Cypress.env("patientUsername"));
    cy.get(regObjects.Email)
      .eq(1)
      .type(Cypress.env("patientUsername"))
      .should("have.value", Cypress.env("patientUsername"));
    cy.get(regObjects.Password)
      .eq(1)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.Password_v)
      .type(constants.password)
      .should("have.value", constants.password);
    cy.get(regObjects.ResterBtn).click();
    cy.wait("@loginRequest");
  }
);

function random_name(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

