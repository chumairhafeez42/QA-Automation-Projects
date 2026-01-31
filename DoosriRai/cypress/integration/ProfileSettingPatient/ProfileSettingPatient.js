/// <reference types="Cypress" />

import { constants } from "../Constants/constants";
import { loginObjects } from "../../PageObjects/Login";
import { profileSettingObj } from "../../PageObjects/ProfileSetting";

var patientdata;
constants.password = Cypress.env("password");
let patientEmailName = "";

Given("user should be present on home page", () => {
  cy.fixture("PatientProfile").then((pdata) => {
    pdata = pdata;
    patientdata = pdata;
  });

  cy.get(".attachment-full");
  console.log(patientdata);
});

When(
  "user provides valid credentials and clicks On login button on homepage",
  () => {
    cy.get(".attachment-full").then(() => {
      cy.get(loginObjects.homeLgBtn).should("be.visible").click();
    });
    cy.get(loginObjects.username)
      .should("be.visible")
      .eq(0)
      .type(patientdata.patientOne.UserName)
      .should("have.value", patientdata.patientOne.UserName);
    cy.get(loginObjects.password)
      .should("be.visible")
      .eq(0)
      .type(Cypress.env("password"))
      .should("have.value", Cypress.env("password"));
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("loginRequest");
    cy.get(loginObjects.LoginBtnHome).click();

    cy.wait("@loginRequest");

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
            .type(patientdata.patientTwo.UserName)
            .should("have.value", patientdata.patientTwo.UserName);
          cy.get(loginObjects.password)
            .eq(0)
            .clear()
            .type(Cypress.env("password"))
            .should("have.value", Cypress.env("password"));
          cy.get(loginObjects.LoginBtnHome).click();
        }
      });
  }
);
Then("user should get navigated to Dashboard", () => {
  cy.get(loginObjects.appointmentHeading).should(
    "contain.text",
    patientdata.DeshboardData.patientSideHeading
  );
});

Given("user should be present on Dashboard", () => {
  cy.get(loginObjects.appointmentHeading).should(
    "contain.text",
    patientdata.DeshboardData.patientSideHeading
  );
});
When("patient user changes the profile details and clicks on save", () => {
  cy.get(profileSettingObj.settingBtn).click();
  cy.get(profileSettingObj.headingProfilesetting).should(
    "contain.text",
    "Profile Setting"
  );

  cy.get(profileSettingObj.patientFullName)
    .invoke("val")
    .then((text) => {
      patientEmailName = text;
      // return text
    });
  if (
    patientEmailName.includes(
      patientdata.patientTwo.FirstName + patientdata.patientTwo.LastName
    )
  ) {
    cy.get(profileSettingObj.patientFullName)
      .clear()
      .type(patientdata.patientOne.FirstName + patientdata.patientOne.LastName)
      .should(
        "contain.value",
        patientdata.patientOne.FirstName + patientdata.patientOne.LastName
      );
    cy.get(profileSettingObj.patientHeight)
      .clear()
      .type(patientdata.patientOne.Height)
      .should("have.value", patientdata.patientOne.Height);
    cy.get(profileSettingObj.patientOccupation)
      .clear()
      .type(patientdata.patientOne.Occupation)
      .should("contain.value", patientdata.patientOne.Occupation);
    cy.get(profileSettingObj.patientWeight)
      .clear()
      .type(patientdata.patientOne.Weight)
      .should("have.value", patientdata.patientOne.Weight);
  } else {
    cy.get(profileSettingObj.patientFullName)
      .clear()
      .type(patientdata.patientTwo.FirstName + patientdata.patientTwo.LastName)
      .should(
        "contain.value",
        patientdata.patientTwo.FirstName + patientdata.patientTwo.LastName
      );
    cy.get(profileSettingObj.patientHeight)
      .clear()
      .type(patientdata.patientTwo.Height)
      .should("have.value", patientdata.patientTwo.Height);
    cy.get(profileSettingObj.patientOccupation)
      .clear()
      .type(patientdata.patientTwo.Occupation)
      .should("contain.value", patientdata.patientTwo.Occupation);
    cy.get(profileSettingObj.patientWeight)
      .clear()
      .type(patientdata.patientTwo.Weight)
      .should("have.value", patientdata.patientTwo.Weight);
  }

  cy.get(profileSettingObj.saveProfileBtnDC).click();
});
Then("patient users profile details should get updated", () => {
  if (
    patientEmailName.includes(
      patientdata.patientTwo.FirstName + patientdata.patientTwo.LastName
    )
  ) {
    cy.get(profileSettingObj.patientFullName).should(
      "contain.value",
      patientdata.patientTwo.FirstName + patientdata.patientTwo.LastName
    );
    cy.get(profileSettingObj.patientHeight).should(
      "have.value",
      patientdata.patientTwo.Height
    );
    cy.get(profileSettingObj.patientOccupation).should(
      "contain.value",
      patientdata.patientTwo.Occupation
    );
    cy.get(profileSettingObj.patientWeight).should(
      "have.value",
      patientdata.patientTwo.Weight
    );
  } else {
    cy.get(profileSettingObj.patientFullName).should(
      "contain.value",
      patientdata.patientOne.FirstName + patientdata.patientOne.LastName
    );
    cy.get(profileSettingObj.patientHeight).should(
      "have.value",
      patientdata.patientOne.Height
    );
    cy.get(profileSettingObj.patientOccupation).should(
      "contain.value",
      patientdata.patientOne.Occupation
    );
    cy.get(profileSettingObj.patientWeight).should(
      "have.value",
      patientdata.patientOne.Weight
    );
  }
});

When("patient user changes the account details and clicks on save", () => {
  cy.get(profileSettingObj.settingBtn).click();
  cy.get(profileSettingObj.accountBtn).click();
  cy.get(profileSettingObj.accountSettingHeading).should(
    "contain.text",
    "Account Setting"
  );
  cy.get(profileSettingObj.patientEmail)
    .invoke("val")
    .then((text) => {
      patientEmailName = text;
      // return text
    })
    .then(() => {
      cy.log(patientEmailName);
    })
    .then(() => {
      if (patientEmailName.includes(patientdata.patientTwo.UserName)) {
        cy.get(profileSettingObj.patientUsername)
          .clear()
          .type(patientdata.patientOne.UserName)
          .should("contain.value", patientdata.patientOne.UserName);
        cy.get(profileSettingObj.patientEmail)
          .clear()
          .type(patientdata.patientOne.Email)
          .should("contain.value", patientdata.patientOne.Email);
        cy.get(profileSettingObj.patientPhoneNumber)
          .clear()
          .type(patientdata.patientOne.Phone)
          .should("contain.value", patientdata.patientOne.Phone);
        patientEmailName = patientdata.patientOne.UserName;
      } else {
        cy.get(profileSettingObj.patientUsername)
          .clear()
          .type(patientdata.patientTwo.UserName)
          .should("contain.value", patientdata.patientTwo.UserName);
        cy.get(profileSettingObj.patientEmail)
          .clear()
          .type(patientdata.patientTwo.Email)
          .should("contain.value", patientdata.patientTwo.Email);
        cy.get(profileSettingObj.patientPhoneNumber)
          .clear()
          .type(patientdata.patientTwo.Phone)
          .should("contain.value", patientdata.patientTwo.Phone);

        patientEmailName = patientdata.patientTwo.UserName;
      }

      cy.get(profileSettingObj.saveProfileBtn).click();
    });
});

And("patient users account details should get updated", () => {
  cy.get(profileSettingObj.settingBtn).click();
  cy.get(profileSettingObj.accountBtn).click();
  cy.get(profileSettingObj.accountSettingHeading).should(
    "contain.text",
    "Account Setting"
  );

  if (patientEmailName.includes(patientdata.patientOne.UserName)) {
    cy.get(profileSettingObj.patientEmail).should(
      "contain.value",
      patientdata.patientOne.Email
    );
    cy.get(profileSettingObj.patientPhoneNumber).should(
      "contain.value",
      patientdata.patientOne.Phone
    );
  } else {
    cy.get(profileSettingObj.patientEmail).should(
      "contain.value",
      patientdata.patientTwo.Email
    );
    cy.get(profileSettingObj.patientPhoneNumber).should(
      "contain.value",
      patientdata.patientTwo.Phone
    );
  }
});

Then("patient user should be on Login page", () => {
  cy.get(loginObjects.LogAlert).should("be.visible");
  if (patientEmailName.includes(patientdata.patientOne.UserName)) {
    cy.get(loginObjects.AlertUsername).clear()
      .type(patientdata.patientOne.UserName)
      .should("have.value", patientdata.patientOne.UserName);
    cy.get(loginObjects.AlertPassword)
      .type(Cypress.env("password"))

    cy.get(loginObjects.AlertLgBtn).click();
  } else {
    cy.get(loginObjects.AlertUsername).clear()
      .type(patientdata.patientTwo.UserName)
      .should("have.value", patientdata.patientTwo.UserName);
    cy.get(loginObjects.AlertPassword)
      .type(Cypress.env("password"))
      
    cy.get(loginObjects.AlertLgBtn).click();
  }
});
