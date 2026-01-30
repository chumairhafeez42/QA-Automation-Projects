/// <reference types ="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { constants } from "../Constants/constants";
import { loginObjects } from "../../PageObjects/Login";
import "@shelex/cypress-allure-plugin";

constants.doctorUsername = Cypress.env("doctorUsername");
constants.patientUsername = Cypress.env("patientUsername");
constants.password = Cypress.env("password");

Given("doctor user should be present on login page", () => {
  cy.visit(loginObjects.url_doctor);
  cy.url().should("include", "doctor-login");
});

When(
  "doctor user provides valid credentials for doctor and clicks On login button",
  () => {
    cy.get(loginObjects.username)
      .should("be.visible")
      .eq(1)
      .type(Cypress.env("doctorUsername"))
      .should("have.value", Cypress.env("doctorUsername"));
    cy.get(loginObjects.password)
      .should("be.visible")
      .eq(1)
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));
    cy.get(loginObjects.LoginBtn).should("be.visible").eq(1).click();
  }
);

Then("doctor user should get navigated to doctor's Dashboard", () => {
  cy.get("#dc-wrapper").should("be.visible");
  cy.url().should("include", "dashboard");
});

Given("patient user should be present on login page", () => {
  cy.visit(loginObjects.url_patient);
  cy.url().should("include", "patient-login");
});

When(
  "patient user provides valid credentials for patient and clicks On login button",
  () => {
    cy.get(loginObjects.username)
      .should("be.visible")
      .eq(1)
      .type(Cypress.env("patientUsername"))
      .should("have.value", Cypress.env("patientUsername"));

    cy.get(loginObjects.password)
      .should("be.visible")
      .eq(1)
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));

    cy.get(loginObjects.LoginBtn).should("be.visible").eq(1).click();
  }
);

Then("patient user should get navigated to patient's Dashboard", () => {
  cy.get("#dc-wrapper").should("be.visible");
  cy.get(loginObjects.appointmentHeading).should(
    "contain.text",
    "My Appointments"
  );
});

Given("doctor user should be present on home page", () => {
  cy.get(
    ".elementor-element-03f2de3 > .elementor-widget-container > .elementor-heading-title"
  ).should("be.visible");
});

When(
  "doctor user provides valid credentials for doctor and clicks On login button on homepage",
  () => {
    cy.get(loginObjects.homeLgBtn).should("be.visible").click();
    cy.get(loginObjects.username)
      .should("be.visible")
      .eq(0)
      .type(Cypress.env("doctorUsername"))
      .should("have.value", Cypress.env("doctorUsername"));
    cy.get(loginObjects.password)
      .should("be.visible")
      .eq(0)
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));
    cy.get(loginObjects.LoginBtn).should("be.visible").eq(0).click();
  }
);

Then("doctor user should get navigated to doctor's Dashboard ", () => {
  cy.get("#dc-wrapper").should("be.visible");
  cy.url().should("include", "dashboard");
});

Given("patient user should be present on home page", () => {
  cy.get(
    ".elementor-element-03f2de3 > .elementor-widget-container > .elementor-heading-title"
  ).should("be.visible");
});

When(
  "patient user provides valid credentials for patient and clicks On login button on homepage",
  () => {
    cy.get(loginObjects.homeLgBtn).should("be.visible").click();
    cy.get(loginObjects.username)
      .should("be.visible")
      .eq(0)
      .type(Cypress.env("patientUsername"))
      .should("have.value", Cypress.env("patientUsername"));
    cy.get(loginObjects.password)
      .should("be.visible")
      .eq(0)
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));
    cy.get(loginObjects.LoginBtn).should("be.visible").eq(0).click();
  }
);

Then("patient user should get navigated to patient's Dashboard ", () => {
  cy.get("#dc-wrapper").should("be.visible");
  cy.get(loginObjects.appointmentHeading).should(
    "contain.text",
    "My Appointments"
  );
});

When(
  "patient user provides Invalid credentials for patient and clicks On login button",
  () => {
    cy.get(loginObjects.username)
      .should("be.visible")
      .eq(1)
      .type(Cypress.env("patientUsername"))
      .should("have.value", Cypress.env("patientUsername"));
    cy.get(loginObjects.password)
      .should("be.visible")
      .eq(1)
      .type("password")
      .should("have.value", "password");
    cy.get(loginObjects.LoginBtn).should("be.visible").eq(1).click();
  }
);
Then("patient user should Stay on login page", () => {
  cy.url().should("include", "patient-login");
});
When(
  "doctor User provides Invalid credentials for doctor and clicks On login button",
  () => {
    cy.get(loginObjects.username)
      .should("be.visible")
      .eq(1)
      .type(Cypress.env("doctorUsername"))
      .should("have.value", Cypress.env("doctorUsername"));
    cy.get(loginObjects.password)
      .should("be.visible")
      .eq(1)
      .type("password")
      .should("have.value", "password");
    cy.get(loginObjects.LoginBtn).should("be.visible").eq(1).click();
  }
);
Then("doctor user should Stay on login page", () => {
  cy.url().should("include", "doctor-login");
});
