/// <reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SettingPageLocator from '../../Page_Locators/SettingsPageLocator/Settings.js'
const settingPageLocatorObject = new SettingPageLocator();

When('User is navigating to Setting page', () => {
    settingPageLocatorObject.getSettingIcon()
})

//------------------------ Check the behavior of page on clicking Edit in settings page--------------------------//

Given('User is navigating to Setting page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
When('User clicks on Edit', () => {
    cy.wait(1000)
    settingPageLocatorObject.getEditTextLocator().should('be.exist').click({ force: true })
    settingPageLocatorObject.getSliderMinimize().should('be.exist').click({ force: true })
})
Then('Some fields of form are enabled', () => {
    settingPageLocatorObject.getFirstNameEditForm().should('be.enabled')
    settingPageLocatorObject.getLastNameEditForm().should("be.enabled")
})
And("Update button is showing at the end of the form", () => {
    settingPageLocatorObject.getProfileUpdateButton().should('be.visible')
})

//edit test case ended


//-----------------How to User Update profile data from settings-----------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
When('User clicks on Edit', () => {
    settingPageLocatorObject.getEditTextLocator().click({ force: true })
})

And("Change the value of first name field", () => {
    settingPageLocatorObject.getFirstNameEditForm().should('be.exist').clear({ force: true })
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstNameEditForm().should('be.exist').type(this.data.random_field_txt)
    })
})

And("Change the value of last name field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getLastNameEditForm().should('be.exist').clear({ force: true })
        settingPageLocatorObject.getLastNameEditForm().should('be.exist').type(this.data.random_field_txt)
    })
})
And("Click on update button", () => {
    settingPageLocatorObject.getProfileUpdateButton().should('be.visible').click({ force: true })
})
Then("A success message appears at the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getSuccessMessageupdateProfile().should('contain', this.data.profile_update_msg).and('be.visible')
    })
})
And("Values of firstname and lastname are changed", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.log(this.data.name_update_log)
    })
})
And("Whole form become disabled", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.log(this.data.name_update_log)
    })
})

//update profile test case ended
// -----------------------Check that Change Password button is functional or not-----------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
When('User clicks on Change password button', () => {
    cy.wait(3000)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.change_passwd_txt).should('be.exist').click({ force: true })
    })
})
Then("A modal form of password change appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.changepaswdmodal().should('be.exist').contains(this.data.change_passwd_txt)
        settingPageLocatorObject.closechangepaswdmodal().should('be.exist').click({ force: true })
    })
})
// // //change password test case ended


// //----------------------Check that  In change password empty modal form Validation appears or not-----------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Change password button", () => {
    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click({ force: true })
})

And("A modal form of password change appears in settings", () => {
    cy.wait(5000)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.log(this.data.modalform_appear)
    })
})
When('User clicks on Change Password with empty fields', () => {

    settingPageLocatorObject.getChangePasswordButton().should("be.exist").click({ force: true })
    cy.wait(1000)
})
Then("A validation appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.oldpasswrdvalidationmsg().should('have.text', this.data.oldpasswrdvalidationmsg)
        settingPageLocatorObject.newpaswrdvalidationmsg().should('have.text', this.data.newpaswrdvalidationmsg)
        settingPageLocatorObject.confirmnewpaswrdmsg().should('have.text', this.data.confirmnewpaswrdmsg)
        settingPageLocatorObject.closechangepaswdmodal().click({ force: true })
    })
})
// // ended test case change password empty form modal

// //---------------------Check that in change password modal invalid password validation message appears or not------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Change password button", () => {
    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click({ force: true })
})

And("A modal form of password change appear", () => {
    cy.wait(5000)
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.log(this.data.modalform_appear)
    })
})
And("User enters old password", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getOldPasswordTextField().should("be.exist").type(this.data.newpassword_settiings)
    })
})

And("User enters new password", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getNewPasswordTextField().should("be.exist").type(this.data.newpassword_settiings)
    })
})
When('User enters invalid confirm password', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getConfirmNewPasswordTextField().should("be.exist").type(this.data.oldpassword_settiings)
    })
})
And("User clicks on change password button", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getChangePasswordButton().should("be.exist").click({ force: true })
    })
})
Then("A validation message appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.confirmnewpaswrdmsg().should('have.text', this.data.unmstchnewpaswrdmsg)
        settingPageLocatorObject.closechangepaswdmodal().click({ force: true })
    })
})

// //ended test case change password modal invalid password

// //------------------------Check that password update success message appears or not------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Change password button", () => {
    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click({ force: true })
})

And("A popup form of password change appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.changepaswdmodal().should('have.text', this.data.change_passwd_txt)
        cy.log(this.data.modalform_appear)
    })
})
And("User enters old password in old password field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getOldPasswordTextField().should("be.exist").type(this.data.original_passwd_settings)
    })
})

And("User enter new password in new password field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getNewPasswordTextField().should("be.exist").type(this.data.newpassword_settiings)
    })
})
When('User enter valid confirm password in confirm password field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getConfirmNewPasswordTextField().should("be.exist").type(this.data.newpassword_settiings)
    })
})
And("User clicks on change password button in popup", () => {
    settingPageLocatorObject.getChangePasswordButton().should("be.exist").click({ force: true })
    settingPageLocatorObject.closechangepaswdmodal().click({ force: true })
})
Then("A Success appears on top password change", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.passwrdsuccessmsg().should('have.text', this.data.passwd_succes_msg)
        settingPageLocatorObject.getChangePasswordLink().should("be.exist").click({ force: true })
        settingPageLocatorObject.getOldPasswordTextField().should("be.exist").type(this.data.passwd_succes_msg)
        settingPageLocatorObject.getNewPasswordTextField().should("be.exist").type(this.data.original_passwd_settings)
        settingPageLocatorObject.getConfirmNewPasswordTextField().should("be.exist").type(this.data.original_passwd_settings)
        settingPageLocatorObject.getChangePasswordButton().should("be.exist").click({ force: true })
    })
})
// //end test case password update success message

// // /---------------------------------------/How to configure an Gmail account from settings----------------------------------------//
Given("User is navigating to Setting page", () => {

})
When('User click on Configure button', () => {


})
And("A modal will appears", () => {
    cy.log("update button is showing at the end of form")
})

And("User enters gmail email you want to link", () => {
    cy.log("update button is showing at the end of form")
})
And("User enters gmail password", () => {
    cy.log("update button is showing at the end of form")
})

And("Google ask for first permission", () => {
    cy.log("update button is showing at the end of form")
})
And("User clicks on Allow button", () => {
    cy.log("update button is showing at the end of form")
})
And("Google ask for second permission", () => {
    cy.log("update button is showing at the end of form")
})
And("User clicks on Allow button", () => {
    cy.log("update button is showing at the end of form")
})
Then("Gmail account is configured", () => {

})

And("Remove Configuration button will appears", () => {
    cy.log("update button is showing at the end of form")
})
// // //end test case gmail

// // // Check that remove configuration functionality is working fine or not

Given("User is navigating to Setting page", () => {

})
When('User click on remove configuration button', () => {


})
And("A modal will appears", () => {
    cy.log("update button is showing at the end of form")
})

And("User clicks on Yes in permission modal form", () => {
    cy.log("update button is showing at the end of form")
})
Then("Account would be unlinked", () => {

})

// //end test case remove configuration 

// // --------------------------------------Check validation appears on empty field XLnk API Key in settings-------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
When('User type empty data in Xlnk key field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getXLnkTextField().should("be.exist").type(this.data.random_field_txt)
        settingPageLocatorObject.getXLnkTextField().should("be.exist").clear({ force: true })
    })
})
And("User clicks on Update button", () => {
    settingPageLocatorObject.getupdateButtonXLnk().should("be.exist").click({ force: true })
})

Then("Validation message appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.xlinkemptyfieldvalidation().contains(this.data.xlnkkeyvalidation)
        cy.log(this.data.validation_log_txt)
    })
})

// // end test case empty field XLnk

// //---------------------------check success message appears while XLnk API Key update-------------------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
When('User type data in Xlnk key field', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getXLnkTextField().clear()
        settingPageLocatorObject.getXLnkTextField().should("be.exist").type(this.data.random_field_txt)
    })
})
And("User clicks on Update button", () => {
    settingPageLocatorObject.getupdateButtonXLnk().should("be.exist").click({ force: true })
})

Then("Xlink key is updated", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.log(this.data.key_updated_txt)
    })
})
And("Success message appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.xlinksuccessmsg().contains(this.data.xlinksuccessmsg)
        cy.log(this.data.key_updated_txt)
    })
})

// //end test case XLnk API key update


// //--------------------------Check that Add New Manager button is functional or not-----------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})

And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should("be.exist").click({ force: true })

})
When('User click on Add New Manager button', () => {
    settingPageLocatorObject.getManagerAdd().should("be.exist").click({ force: true })

})
Then("A modal form appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getManagerModalForm().should("be.exist")
        settingPageLocatorObject.getmanagermodeltxt().should('be.exist').contains(this.data.add_new_manger_txt)
        settingPageLocatorObject.closechangepaswdmodal().click({ force: true })
    })
})
// //end test case add new manager button 

// //------------------------Check that Add New Manager form validation appears or not---------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should("be.exist").click({ force: true })
})

And("User click on Add New Manager button", () => {
    settingPageLocatorObject.getManagerAdd().should("be.exist").click({ force: true })
})
And("A manager modal form appears", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.exist")
})
And("All fields are empty in modal form", () => {
    settingPageLocatorObject.getFirstName().should("be.empty").and("be.exist")
    settingPageLocatorObject.getLastName().should("be.empty").and("be.exist")
    settingPageLocatorObject.getEmail().should("be.empty").and("be.exist")
})
When('User clicks on Save button', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })

})
Then("manager validations appears", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.wait(1000)
        settingPageLocatorObject.getFirstNameClass().should('have.text', this.data.firstname_settings)
        settingPageLocatorObject.getLastNameClass().should('have.text', this.data.lastname_settings)
        settingPageLocatorObject.getEmailAddressClass().should('have.text', this.data.email_settings)
        settingPageLocatorObject.closechangepaswdmodal().click({ force: true })
    })
})

// //end test case add new manager form validation

// //--------------------Check Validation appears for empty firstname field While creating a manager-----------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should('be.exist').click({ force: true })
})

And("User click on Add New Manager button", () => {
    settingPageLocatorObject.getManagerAdd().click({ force: true })
})
And("A new modal form appears in manager", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.visible")

})
And("User empty first name field", () => {
    settingPageLocatorObject.getFirstName().should('be.empty')
})
And("User filled last name field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getLastName().type(this.data.LASTNAME_FIELD, { force: true })
    })
})
And("User filled email field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getEmail().type(this.data.EMAIL_FIELD, { force: true })
    })
})
And('User click on Save button in modal', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })

})
Then("Validation messages appears below firstname field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstNameError().should('have.text', this.data.firstname_settings)
        settingPageLocatorObject.getManagerCross().click({ force: true })
    })
})

// //end test case add new manager form validation

// //-------------------Check Validation for empty lastname field While creating a manager-------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should('be.exist').click({ force: true })
    cy.log("update button is showing at the end of form")
})

And("User click on Add New Manager button", () => {
    settingPageLocatorObject.getManagerAdd().click()
    cy.log("update button is showing at the end of form")
})
And("A new modal form appear in manager module", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.visible")
    cy.log("update button is showing at the end of form")
})

And("User filled the first name field in firstname", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstName().type(this.data.LASTNAME_FIELD, { force: true })
    })
})

And("User leave last name field empty in lastname", () => {
    settingPageLocatorObject.getLastName().should('be.empty')
})
And("User filled the email field in email", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getEmail().type(this.data.EMAIL_FIELD, { force: true })
    })
})
And('User click on Save button', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })

})
Then("Validation messages appears below lastname field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getLastNameError().should('have.text', this.data.lastname_settings)
        settingPageLocatorObject.getManagerCross().click()
    })
})
// //end test case empty lastname


// //------------------------Check Validation for email format in While creating a manager----------------------//
Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should('be.exist').click({ force: true })
    cy.log("update button is showing at the end of form")
})

And("User click on Add New Manager button", () => {
    settingPageLocatorObject.getManagerAdd().click()
    cy.log("update button is showing at the end of form")
})
And("A popup modal form appears", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.visible")
    cy.get('#rcDialogTitle0').then(($text) => {
        cy.log($text.text())
    })
})

And("User enters first name", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstName().type(this.data.LASTNAME_FIELD, { force: true })
    })
})
And("User enters last name", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getLastName().type(this.data.LASTNAME_FIELD, { force: true })
    })
})
And('User enters email field with wrong email address format', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getEmail().type(this.data.EMAIL_FIELD_DUP, { force: true })
    })
})
And('User click on Save button', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })

})
Then("Validation messages appears email format", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getEMAILFORMATError().should('have.text', this.data.email_settings)
        settingPageLocatorObject.closechangepaswdmodal().click()
    })
})
// //end test case email format


//-------------------Check Validation for empty email field While creating a manager-------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should('be.exist').click({ force: true })
})

And("User click on Add New Manager button", () => {
    settingPageLocatorObject.getManagerAdd().click({ force: true })
})
And("A popup modal form appears", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.visible")
})

And(" User enters first name", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstName().type(this.data.LASTNAME_FIELD, { force: true })
    })
})
And("User enters last name", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getLastName().type(this.data.LASTNAME_FIELD, { force: true })
    })
})
And('User enters empty data in email field', () => {
    settingPageLocatorObject.getEmail().should('be.empty')

})
And('User click on Save button', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })


})
Then("Validation messages appears email provide", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getEMAILFORMATError().should('have.text', this.data.email_settings)
        settingPageLocatorObject.closechangepaswdmodal().click({ force: true })
    })
})
//end test case empty email

//--------------------------- Scenario: How to create a manager user ---------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should('be.exist').click({ force: true })
})
When("User click on Add Manager", () => {
    settingPageLocatorObject.AddManagerBtn().click({ force: true })
})
And("User firstname in firstname field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.AddManagerFirstField().type(this.data.LASTNAME_FIELD)
    })
})
And("User lastname in lastname field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.AddManagerLastField().type(this.data.Manager_Header)
    })
})
And("User email in email field", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.AddManagerEmailField().type(this.data.Manager_Email)
    })
})
And("User clicks on create manager button", () => {
    settingPageLocatorObject.createManagerBtn().click({ force: true })
})
Then("Manager detail is showing", () => {
    settingPageLocatorObject.Managerdetailuser().should('be.visible')
})


//---------------------------How to check User manager details-------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})

When("User click on Permission & Roles", () => {
    settingPageLocatorObject.getPermissionsAndRoles().click({ force: true })
})
And('User click on Profile button', () => {
    settingPageLocatorObject.getProfileButton().click({ force: true })

})
Then("Manager detail is showing", () => {
    settingPageLocatorObject.getContactDetail().should('be.exist').click({ force: true })
})
//end test case User manager details


//---------------------------How to assign manager permissions and roles---------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})

And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And("User Cliks on Permissions & Roles tab", () => {
    settingPageLocatorObject.getPermissionsAndRoles().click({ force: true })
})

And("User click on Contact Tab", () => {
    settingPageLocatorObject.getContactTab().click({ force: true })
})
And('User clicks on campaign Tab', () => {
    settingPageLocatorObject.getCampaignTab().click({ force: true })

})
And('User clicks on Task Tab', () => {
    settingPageLocatorObject.getTaskTab().click({ force: true })

})
Then("Different checkbox of permission are showing", () => {
    settingPageLocatorObject.checkboxenable().should('be.checked')
    cy.log("Different checkboxes of permission are showing")
})

//end test case manager permissions and roles



//---------------------Check that behaviour of Can Ignore unchecking in contacts roles and permissions---------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Contacts accordian", () => {
    settingPageLocatorObject.getContactTab().click({ force: true })
    // // settingPageLocatorObject.getcanedit().click()
    // // settingPageLocatorObject.getcanedit().should('not.be.checked')
})

And('User unchecking Can Ignore by clicking on the checkbox', () => {
    settingPageLocatorObject.getCanEditCheckbox().should('be.checked')
    settingPageLocatorObject.checkCheckboxCanIgnore().click().should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanIgonre().click().should('be.checked')
})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })

})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test Ignore list


//-----------------Check that behaviour of Can White List unchecking in contacts roles and permissions----------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("User clicks on Contacts accordian", () => {
    settingPageLocatorObject.getContactTab().click({ force: true })
    settingPageLocatorObject.getcanedit().click().should('not.be.checked')
})

And('User unchecking Can White List by clicking on the checkbox', () => {
    settingPageLocatorObject.getCanEditCheckbox().click().should('be.checked')
    settingPageLocatorObject.checkCheckboxCanAddToWhiteList().click().should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanAddToWhiteList().click().should('be.checked')

})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })

})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case White List





//--------------------Check that behaviour of Can Edit unchecking in contacts roles and permissions----------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Contacts accordian", () => {
    settingPageLocatorObject.getContactTab().click({ force: true })
})

And('User unchecking Can Edit by clicking on the checkbox', () => {
    settingPageLocatorObject.getcanedit().click().should('not.be.checked')
    settingPageLocatorObject.getcanedit().click()
    settingPageLocatorObject.getCanEditCheckbox().should('be.checked')
})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })

})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case can edit




//-------------------Check that behaviour of Can Delete unchecking in contacts roles and permissions----------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Contacts accordian", () => {
    settingPageLocatorObject.getContactTab().click({ force: true })
})

And('User unchecking Can Delete by clicking on the checkbox', () => {
    settingPageLocatorObject.getcanedit().click().should('not.be.checked')
    settingPageLocatorObject.getcanedit().click()
    settingPageLocatorObject.getCanEditCheckbox().should('be.checked')
    settingPageLocatorObject.getCheckboxCanDelete().click().should('not.be.checked')
    settingPageLocatorObject.checkCheckboxCanDelete().click()
    settingPageLocatorObject.getCheckboxCanDelete().should('be.checked')
})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })

})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case can delete



//-------------------Check that behaviour of Can Disable unchecking in campaigns roles and permissions-------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Campaigns accordian", () => {
    settingPageLocatorObject.getCampaignTab().click({ force: true })
})

And('User unchecking Can Disable by clicking on the checkbox', () => {
    settingPageLocatorObject.getCanDisableCampaign().check({ force: true }).should('be.checked')
    settingPageLocatorObject.getCanDisableCampaign().uncheck({ force: true }).should('not.be.checked')

})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })

})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case can disable


//---------------------------------Check that behaviour of Can Configure unchecking in campaigns roles and permissions-------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Campaigns accordian", () => {
    settingPageLocatorObject.getCampaignTab().click({ force: true })
})

And('User unchecking Can Configure by clicking on the checkbox', () => {
    settingPageLocatorObject.getCheckboxCanConfigure().uncheck({ force: true }).should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanConfigure().check({ force: true }).should('be.checked')


})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })

})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case can configure


//Check that behaviour of Can Purge unchecking in campaigns roles and permissions

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Campaigns accordian", () => {
    settingPageLocatorObject.getCampaignTab().click({ force: true })
})

And('User unchecking Can Purge by clicking on the checkbox', () => {
    settingPageLocatorObject.getCheckboxCanPurge().uncheck({ force: true }).should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanPurge().check({ force: true }).should('be.checked')
})
And('User click on Update Permissions button', () => {

    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })

})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case can purge



//Check that behaviour of Can Edit unchecking in Task roles and permissions

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })

})
And("User is on Roles & Permission in Managers page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})
When("Click on Tasks accordian", () => {
    settingPageLocatorObject.getTaskTab().click({ force: true })
})

And('User unchecking Can Edit by clicking onthe checkbox', () => {
    settingPageLocatorObject.getCheckboxTaskCanEdit().should('be.checked')
    settingPageLocatorObject.checkCheckboxTaskCanEdit().click()
    settingPageLocatorObject.checkCheckboxTaskCanEdit().should('not.be.checked')
})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })
})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case Can Edit


//Check that behaviour of Can Delete unchecking in campaigns roles and permissions

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Tasks accordian", () => {
    settingPageLocatorObject.getTaskTab().click({ force: true })
})

And('User unchecking Can Delete in task by clicking on the checkbox', () => {
    settingPageLocatorObject.getCheckboxCanDeleteTask().should('be.checked')
    settingPageLocatorObject.getCheckboxCanDeleteTask().click({ force: true }).should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanDeleteTask().click()

})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })
})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case Can delete


//Check that behaviour of Can Add unchecking in Tasks roles and permissions

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })

})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })
})

When("Click on Tasks accordian", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionsAndRoles().should('contain', this.data.permission_header_txt).click({ force: true })
    })

})

And('User unchecking Can Add in task by clicking on the checkbox', () => {
    settingPageLocatorObject.getCheckboxCanAddTask().uncheck({ force: true }).should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanAddTask().check({ force: true }).should('be.checked')
})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })
})
Then("A success message appears on the top of page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getPermissionSuccessMessage().should('contain', this.data.permission_success_msg).click({ force: true })
    })
})

//end test case Can Add



//Check that validation appears on entering firstname with numbers or special characters

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })


})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })

})

When("User clicks on Add Manager button", () => {
    settingPageLocatorObject.getManagerAdd().click({ force: true })
})

And('A modal form appears of Add new Manager', () => {
    settingPageLocatorObject.getManagerModalForm().should("be.visible")

})
And('User filled the first name field with numbers and special characters', () => {
    settingPageLocatorObject.getFirstName().type("56#", { force: true })

})
Then("Validation messages appears enter firstname", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstNameError().should('contain', this.data.getFirstNameError)
        settingPageLocatorObject.getcloseAddnewManager().click({ force: true })
    })
})

//end test case validation appears






//---------------------------Check that validation appears on entering last name with numbers or special characters-------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })

})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})

When("User click on Manager button", () => {
    settingPageLocatorObject.getManagerAdd().click({ force: true })
})

And(' A modal form appears', () => {
    settingPageLocatorObject.getManagerModalForm().should("be.visible")

})
And('User filled the last name field with numbers and special characters', () => {
    settingPageLocatorObject.getLastName().type("56#", { force: true })

})
Then("Validation messages appears enter lastname", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstNameError().should('contain', this.data.getLastNameError)
        settingPageLocatorObject.getcloseAddnewManager().click({ force: true })
    })
})

//end test case validation appears




//--------------------How to Update managers details----------------------------------//

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })

})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})


And("User click on Permission & Roles", () => {
    settingPageLocatorObject.getPermissionsAndRoles().click({ force: true })

})

And('User click on Profile button', () => {
    settingPageLocatorObject.getProfileButton().click({ force: true })

})
And('Manager detail is showing', () => {
    settingPageLocatorObject.getContactDetail().should('be.exist').click({ force: true })


})
When("User clicks on edit button", () => {
    settingPageLocatorObject.getManagerEditButton().click({ force: true })
})
And('User updates required fields firstname and lastname', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getFirstName().clear({ force: true }).type(this.data.random_field_txt)
        settingPageLocatorObject.getLastName().clear({ force: true }).type(this.data.Manager_Header)
    })
})
And('User clicks on Update button in update', () => {
    settingPageLocatorObject.getUpdateButton().click({ force: true })

})
Then('Manager is updated', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getUpdateSuccessMessage().should('contain', this.data.manager_success_msg)
    })
})

//end test case update manager details

//How to delete existing manager

Given("User is navigating to Setting page", () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.url().should('include', this.data.SETTINGS_URL)
    })

})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})


And("User click on Permission & Roles", () => {
    settingPageLocatorObject.getPermissionsAndRoles().click({ force: true })
})

And('User click on Profile button', () => {
    settingPageLocatorObject.getProfileButton().click({ force: true })

})
And('Manager detail is showing', () => {

    settingPageLocatorObject.getContactDetail().should('be.exist').click({ force: true })

})
When("User clicks on delete button", () => {
    settingPageLocatorObject.getManagerDelete().click({ force: true })
})
And('A warning modal appears', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getdeletepopupmanager().should('contain', this.data.delete_modal_txt)
    })
})
And('User select Yes in Are You Sure You Want To Delete YES OR NO', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getDeleteManagerButton().should('contain', this.data.Delete_Txt).click({ force: true })
    })
})
Then('Manager is Deleted', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        settingPageLocatorObject.getDeleteMessage().should('contain', this.data.manager_delete_msg)
    })
})

//end test case delete manager details