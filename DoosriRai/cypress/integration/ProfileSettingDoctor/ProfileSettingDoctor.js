import { constants } from "../Constants/constants";
import { loginObjects } from "../../PageObjects/Login";
import { profileSettingObj } from "../../PageObjects/ProfileSetting";


var doctorData;
constants.doctorUsername = Cypress.env("doctorUsername");
constants.password = Cypress.env("password");

Given("user should be present on home page", () => {
  cy.get(
    ".elementor-element-9a500b6 > .eleFmentor-widget-container > .elementor-heading-title"
  ).should("be.visible");
  cy.fixture("DoctorProfile").then((pdata) => {
    pdata = pdata;
    doctorData = pdata;
  });

});
When(
  "User provides valid credentials and clicks On login button on homepage",
  () => {
    cy.get(loginObjects.homeLgBtn).click();
    cy.get(loginObjects.username)
      .eq(0)
      .type(doctorData.doctorOne.UserName)
      .should("have.value", doctorData.doctorOne.UserName);
    cy.get(loginObjects.password)
      .eq(0)
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));
    cy.get(loginObjects.LoginBtn).click();
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("LoginRequest");

    cy.wait("@LoginRequest");

    let getUrl;
    cy.url()
      .then((url) => {
        getUrl = url;
        cy.log(getUrl);
      })
      .then(getUrl, () => {
        if (!getUrl.includes("dashboard")) {
          cy.get(loginObjects.username)
            .eq(0)
            .clear()
            .type(doctorData.doctorTwo.UserName)
            .should("have.value", doctorData.doctorTwo.UserName);
          cy.get(loginObjects.password)
            .eq(0)
            .clear()
            .type(Cypress.env("password"))
            .should("have.value", Cypress.env("password"));
          cy.get(loginObjects.LoginBtn).click();
        }
      });
  }
);
Then("user should get navigated to Dashboard", () => {
  cy.get("#dc-wrapper").should("be.visible");
  cy.get(profileSettingObj.drSideHeading).should("contain.text", "Welcome");
});

Given("user should be present on Dashboard", () => {
  cy.get(profileSettingObj.drSideHeading).should("contain.text", "Welcome");
  cy.get(profileSettingObj.drSideSettingBtn).click();
});
When("doctor User changes the profile details and clicks on save", () => {
  cy.get(profileSettingObj.headingProfilesetting).should(
    "contain.text",
    "Profile Setting"
  );
  cy.get(profileSettingObj.doctorFirstName)
    .clear()
    .type(doctorData.doctorOne.FirstName)
    .should("have.value", doctorData.doctorOne.FirstName);
  cy.get(profileSettingObj.doctorLastName)
    .clear()
    .type(doctorData.doctorOne.LastName)
    .should("have.value", doctorData.doctorOne.LastName);
  cy.get(profileSettingObj.DrPrice)
    .clear()
    .type(doctorData.doctorOne.Price)
    .should("have.value", doctorData.doctorOne.Price);
  cy.get(profileSettingObj.doctorPhoneNumber)
    .clear()
    .type(doctorData.doctorOne.Phone)
    .should("have.value", doctorData.doctorOne.Phone);
  cy.get(profileSettingObj.ProSummery)
    .clear()
    .type(doctorData.doctorOne.ProfessionalSummary)
    .should("have.value", doctorData.doctorOne.ProfessionalSummary);
  cy.get(profileSettingObj.AboutMe)
    .clear()
    .type(doctorData.doctorOne.AboutMe)
    .should("have.value", doctorData.doctorOne.AboutMe);
});
Then("doctor User's profile details should get updated", () => {
  cy.get(profileSettingObj.doctorFirstName).should(
    "have.value",
    doctorData.doctorOne.FirstName
  );
  cy.get(profileSettingObj.doctorLastName).should(
    "have.value",
    doctorData.doctorOne.LastName
  );
  cy.get(profileSettingObj.DrPrice).should("have.value", doctorData.doctorOne.Price);
  cy.get(profileSettingObj.doctorPhoneNumber).should(
    "have.value",
    doctorData.doctorOne.Phone
  );
  cy.get(profileSettingObj.ProSummery).should(
    "have.value",
    doctorData.doctorOne.ProfessionalSummary
  );
  cy.get(profileSettingObj.AboutMe).should("have.value", doctorData.doctorOne.AboutMe);
});

When("doctor User changes the account details and clicks on save", () => {});
Then("doctor User's profile details should get updated", () => {});
And("doctor user should be on Login page", () => {});

When("doctor User adds Educational details and clicks on save", () => {});
Then(
  "doctor User's Educational details should get updated on doctor Details page",
  () => {}
);

When("doctor User adds Experience details and clicks on save", () => {});
Then(
  "doctor User's Experience details should get updated on doctor Details page",
  () => {}
);
