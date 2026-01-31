/// <reference types="cypress"/>

import {
    Given, When, Then, And
} from "cypress-cucumber-preprocessor/steps";

import SettingPageLocator from '../../Page_Locators/SettingsPageLocator/Settings.js'
const settingPageLocatorObject = new SettingPageLocator();

When('User is navigating to Setting page', () => {

    cy.wait(6000)
    settingPageLocatorObject.getSettingIcon()

})

// Check the behavior of page on clicking Edit in settings page

Given('User is navigating to Setting page', () => {

    cy.url().should('include', '/settings')

})
When('User clicks on Edit', () => {
    cy.wait(4000)
    settingPageLocatorObject.getEditTextLocator().click()
    cy.wait(3000)
    settingPageLocatorObject.getSliderMinimize().click()


})
Then('Some fields of form are enabled', () => {
    settingPageLocatorObject.getFirstNameEditForm().should('be.enabled')
    settingPageLocatorObject.getLastNameEditForm().should("be.enabled")
})
And("Update button is showing at the end of the form", () => {
    cy.wait(4000)
    settingPageLocatorObject.getProfileUpdateButton().should('be.visible')
})

//edit test case ended


//How to User Update profile data from settings

Given("User is navigating to Setting page", () => {
    cy.url().should('include', 'settings')
})
When('User clicks on Edit', () => {
    cy.log(4000)
    settingPageLocatorObject.getEditTextLocator().click({ force: true })

})

And("Change the value of first name field", () => {
    settingPageLocatorObject.getFirstNameEditForm().clear()
    settingPageLocatorObject.getFirstNameEditForm().type("Test")

})

And("Change the value of last name field", () => {
    settingPageLocatorObject.getLastNameEditForm().clear()
    settingPageLocatorObject.getLastNameEditForm().type("User")

})
And("Click on update button", () => {
    settingPageLocatorObject.getProfileUpdateButton().click()
    // cy.wait(4000)
})
Then("A success message appears at the top of page", () => {

    settingPageLocatorObject.getSuccessMessageupdateProfile().should('contain', 'Profile updated successfully.').and('be.visible')

})
And("Values of firstname and lastname are changed", () => {
    cy.log("update button is showing at the end of form")
})
And("Whole form become disabled", () => {
    cy.log("update button is showing at the end of form")
})

//update profile test case ended


// // // Check that Change Password button is functional or not

Given("User is navigating to Setting page", () => {
    cy.log("User is on setting page")
})
When('User clicks on Change password button', () => {

    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click()

})
Then("A modal form of password change appears", () => {
    cy.wait(5000)
    settingPageLocatorObject.changepaswdmodal().contains("Change Password")
    settingPageLocatorObject.closechangepaswdmodal().click()
})
// // //change password test case ended


// //Check that  In change password empty modal form Validation appears or not

Given("User is navigating to Setting page", () => {
    cy.log("User is on setting page")
})
And("User clicks on Change password button", () => {
    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click()
})

And("A modal form of password change appears in settings", () => {
    cy.wait(5000)
    cy.log("Modal Form appears")
})
When('User clicks on Change Password with empty fields', () => {

    settingPageLocatorObject.getChangePasswordButton().should("be.exist").click()
    cy.wait(1000)
})
Then("A validation appears", () => {
    settingPageLocatorObject.oldpasswrdvalidationmsg().should('have.text' , 'Please enter your old password.')
    settingPageLocatorObject.newpaswrdvalidationmsg().should('have.text' , 'Please enter your new password.')
    settingPageLocatorObject.confirmnewpaswrdmsg().should('have.text' , 'Please enter your new password again.')
    settingPageLocatorObject.closechangepaswdmodal().click()
})
// // ended test case change password empty form modal

// //Check that in change password modal invalid password validation message appears or not

Given("User is navigating to Setting page", () => {
    cy.log("User is on setting page")
})
And("User clicks on Change password button", () => {
    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click()
})

And("A modal form of password change appear", () => {
    cy.wait(5000)
    cy.log("Modal Form appears")
})
And("User enters old password", () => {
    settingPageLocatorObject.getOldPasswordTextField().should("be.exist").type("Aabc@123+")
})

And("User enters new password", () => {

    settingPageLocatorObject.getNewPasswordTextField().type("Aabc@123+")
})
When('User enters invalid confirm password', () => {
    settingPageLocatorObject.getConfirmNewPasswordTextField().type("Aabc@123")

})
And("User clicks on change password button", () => {
    settingPageLocatorObject.getChangePasswordButton().should("be.exist").click()
})
Then("A validation message appears", () => {
    settingPageLocatorObject.confirmnewpaswrdmsg().should('have.text' , 'The password and confirmation password do not match.')
    settingPageLocatorObject.closechangepaswdmodal().click()
})

// //ended test case change password modal invalid password

// //Check that password update success message appears or not

Given("User is navigating to Setting page", () => {
    cy.log("user is on setting page")
})
And("User clicks on Change password button", () => {
    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click()
})

And("A popup form of password change appears", () => {
    settingPageLocatorObject.changepaswdmodal().should('have.text' , "Change Password")
    cy.log("A modal form of password change appears")
})
And("User enters old password in old password field", () => {
    settingPageLocatorObject.getOldPasswordTextField().should("be.exist").type("Aabc@1122")
})

And("User enter new password in new password field", () => {
    settingPageLocatorObject.getNewPasswordTextField().should("be.exist").type("Aabc@123+")
})
When('User enter valid confirm password in confirm password field', () => {
    settingPageLocatorObject.getConfirmNewPasswordTextField().should("be.exist").type("Aabc@123+")

})
And("User clicks on change password button in popup", () => {
    settingPageLocatorObject.getChangePasswordButton().should("be.exist").click()
    settingPageLocatorObject.closechangepaswdmodal().click()
})
Then("A Success appears on top password change", () => {
    settingPageLocatorObject.passwrdsuccessmsg().should('have.text' , 'Password changed successfully')
    settingPageLocatorObject.getChangePasswordLink().should("be.exist").click()
    settingPageLocatorObject.getOldPasswordTextField().should("be.exist").type("Aabc@123+")
    settingPageLocatorObject.getNewPasswordTextField().should("be.exist").type("Aabc@1122")
    settingPageLocatorObject.getConfirmNewPasswordTextField().should("be.exist").type("Aabc@1122")
    settingPageLocatorObject.getChangePasswordButton().should("be.exist").click()
})
// //end test case password update success message

// // //How to configure an Gmail account from settings
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

// // Check validation appears on empty field XLnk API Key in settings

Given("User is navigating to Setting page", () => {
    cy.log("user is on setting page")
})
When('User type empty data in Xlnk key field', () => {

    settingPageLocatorObject.getXLnkTextField().should("be.exist").clear()
})
And("User clicks on Update button", () => {
    settingPageLocatorObject.getupdateButtonXLnk().should("be.exist").click()
})

Then("Validation message appears", () => {
    settingPageLocatorObject.xlinkemptyfieldvalidation().contains('Please enter XLnk API Key.')
    cy.log("Validation message appears")
})

// // end test case empty field XLnk

// //check success message appears while XLnk API Key update

Given("User is navigating to Setting page", () => {
    cy.log("user is on setting page")
})
When('User type data in Xlnk key field', () => {
    settingPageLocatorObject.getXLnkTextField().clear()
    settingPageLocatorObject.getXLnkTextField().should("be.exist").type("empty data")

})
And("User clicks on Update button", () => {
    settingPageLocatorObject.getupdateButtonXLnk().should("be.exist").click()
})

Then("Xlink key is updated", () => {
    cy.log("key updated successfully")
})
And("Success message appears", () => {
    settingPageLocatorObject.xlinksuccessmsg().contains('Xlnk api key updated successfully.')
    cy.log("key updated successfully")
})

// //end test case XLnk API key update


// //Check that Add New Manager button is functional or not

Given("User is navigating to Setting page", () => {
    cy.log("User is on setting page")
})

And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should("be.exist").click()

})
When('User click on Add New Manager button', () => {
    settingPageLocatorObject.getManagerAdd().should("be.exist").click()

})
Then("A modal form appears", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.exist")
    settingPageLocatorObject.getmanagermodeltxt().should('be.exist').contains('Add New Manager')
    settingPageLocatorObject.closechangepaswdmodal().click()
})
// //end test case add new manager button 

// //Check that Add New Manager form validation appears or not

Given("User is navigating to Setting page", () => {
    cy.log("User is navigating to settinng page")
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should("be.exist").click()
})

And("User click on Add New Manager button", () => {
    settingPageLocatorObject.getManagerAdd().should("be.exist").click()
})
And("A manager modal form appears", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.exist")
})
And("All fields are empty in modal form", () => {
    settingPageLocatorObject.getFirstName().should("be.empty")
    settingPageLocatorObject.getLastName().should("be.empty")
    settingPageLocatorObject.getEmail().should("be.empty")
})
When('User clicks on Save button', () => {
    settingPageLocatorObject.getSaveButton().click()

})
Then("manager validations appears", () => {
    cy.wait(1000)
    settingPageLocatorObject.getFirstNameClass().should('have.text' , 'Please enter first name.')
    settingPageLocatorObject.getLastNameClass().should('have.text' , 'Please enter last name.')
    settingPageLocatorObject.getEmailAddressClass().should('have.text' , 'Please enter valid email address.')
    settingPageLocatorObject.closechangepaswdmodal().click()
})

// //end test case add new manager form validation

// //Check Validation appears for empty firstname field While creating a manager

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')

})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().should('be.exist').click({ force: true })
})

And("User click on Add New Manager button", () => {

    settingPageLocatorObject.getManagerAdd().click()
})
And("A new modal form appears in manager", () => {
    settingPageLocatorObject.getManagerModalForm().should("be.visible")

})
And("User empty first name field", () => {
    settingPageLocatorObject.getFirstName().should('be.empty')
})
And("User filled last name field", () => {

    settingPageLocatorObject.getLastName().type("Test User", { force: true })

})
And("User filled email field", () => {
    settingPageLocatorObject.getEmail().type("test@test.com", { force: true })

})
And('User click on Save button in modal', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })

})
Then("Validation messages appears below firstname field", () => {
    settingPageLocatorObject.getFirstNameError().should('have.text', 'Please enter first name.')
    settingPageLocatorObject.getManagerCross().click()

})

// //end test case add new manager form validation

// //Check Validation for empty lastname field While creating a manager

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
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
    settingPageLocatorObject.getFirstName().type("Test", { force: true })
})

And("User leave last name field empty in lastname", () => {
    settingPageLocatorObject.getLastName().should('be.empty')
})
And("User filled the email field in email", () => {
    settingPageLocatorObject.getEmail().type("test@test.com", { force: true })
})
And('User click on Save button', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })

})
Then("Validation messages appears below lastname field", () => {
    settingPageLocatorObject.getLastNameError().should('have.text', 'Please enter last name.')
    settingPageLocatorObject.getManagerCross().click()
})
// //end test case empty lastname


// //Check Validation for email format in While creating a manager
Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
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
    settingPageLocatorObject.getFirstName().type("Test", { force: true })
})
And("User enters last name", () => {
    settingPageLocatorObject.getLastName().type("User", { force: true })
})
And('User enters email field with wrong email address format', () => {
    settingPageLocatorObject.getEmail().type("testyahoo.com", { force: true })
})
And('User click on Save button', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })

})
Then("Validation messages appears email format", () => {
    settingPageLocatorObject.getEMAILFORMATError().should('have.text' , 'Please enter valid email address.')
    settingPageLocatorObject.closechangepaswdmodal().click()
})
// //end test case email format


//Check Validation for empty email field While creating a manager
Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
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
    settingPageLocatorObject.getFirstName().type("Test", { force: true })
})
And("User enters last name", () => {
    settingPageLocatorObject.getLastName().type("User", { force: true })
})
And('User enters empty data in email field', () => {
    settingPageLocatorObject.getEmail().should('be.empty')

})
And('User click on Save button', () => {
    settingPageLocatorObject.getSaveButton().click({ force: true })
    

})
Then("Validation messages appears email provide", () => {
    settingPageLocatorObject.getEMAILFORMATError().should('have.text' , 'Please enter valid email address.')
    settingPageLocatorObject.closechangepaswdmodal().click()
})
//end test case empty email

// Scenario: How to create a manager user
    Given ("User is navigating to Setting page", () => {
        cy.url().should('include', '/settings')
    })
    And ("User clicks on Manager Tab", () => {
        settingPageLocatorObject.getManagerTab().should('be.exist').click({ force: true })
    })
    When ("User click on Add Manager", () => {
        settingPageLocatorObject.AddManagerBtn().click()
    })
    And ("User firstname in firstname field", () => {
        settingPageLocatorObject.AddManagerFirstField().type('Test')
    })
    And ("User lastname in lastname field", () => {
        settingPageLocatorObject.AddManagerLastField().type('Manager')
    })
    And ("User email in email field", () => {
        settingPageLocatorObject.AddManagerEmailField().type('Test@test.com')
    })
    And ("User clicks on create manager button", () => {
        settingPageLocatorObject.createManagerBtn().click()
    })
    Then ("Manager detail is showing", () => {
        settingPageLocatorObject.Managerdetailuser().should('be.visible')
    })


//How to check User manager details
Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
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


//How to assign manager permissions and roles

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
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



//Check that behaviour of Can Ignore unchecking in contacts roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })
})

//end test Ignore list


//Check that behaviour of Can White List unchecking in contacts roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })
})

//end test case White List





//Check that behaviour of Can Edit unchecking in contacts roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })

})

//end test case can edit




//Check that behaviour of Can Delete unchecking in contacts roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })

})

//end test case can delete



//Check that behaviour of Can Disable unchecking in campaigns roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })

})

//end test case can disable


//Check that behaviour of Can Configure unchecking in campaigns roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })
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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })

})

//end test case can configure


//Check that behaviour of Can Purge unchecking in campaigns roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })

})

//end test case can purge



//Check that behaviour of Can Edit unchecking in Task roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })

})
And("User is on Roles & Permission in Managers page", () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })
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
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })

})

//end test case Can Edit


//Check that behaviour of Can Delete unchecking in campaigns roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')
})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

})

When("Click on Tasks accordian", () => {
    settingPageLocatorObject.getTaskTab().click({ force: true })
})

And('User unchecking Can Delete in task by clicking on the checkbox', () => {
    settingPageLocatorObject.getCheckboxCanDelete().should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanDelete().click({ force: true }).should('be.checked')
    settingPageLocatorObject.checkCheckboxCanDelete().uncheck()

})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })
})
Then("A success message appears on the top of page", () => {
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })
})

//end test case Can delete


//Check that behaviour of Can Add unchecking in Tasks roles and permissions

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')

})
And("User clicks on Manager Tab", () => {
    settingPageLocatorObject.getManagerTab().click({ force: true })
})
And('User is on Roles & Permission in Managers page', () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })
})

When("Click on Tasks accordian", () => {
    settingPageLocatorObject.getPermissionsAndRoles().should('contain', 'Permissions & Roles').click({ force: true })

})

And('User unchecking Can Add in task by clicking on the checkbox', () => {
    settingPageLocatorObject.getCheckboxCanAddTask().uncheck({ force: true }).should('not.be.checked')
    settingPageLocatorObject.getCheckboxCanAddTask().check({ force: true }).should('be.checked')
})
And('User click on Update Permissions button', () => {
    settingPageLocatorObject.getUpdatePermissionButton().click({ force: true })
})
Then("A success message appears on the top of page", () => {
    settingPageLocatorObject.getPermissionSuccessMessage().should('contain', 'Permission(s) updated successfully.').click({ force: true })

})

//end test case Can Add



//Check that validation appears on entering firstname with numbers or special characters

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')


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
    settingPageLocatorObject.getFirstNameError().should('contain', 'Please enter valid first name')
    settingPageLocatorObject.getcloseAddnewManager().click({ force: true })
})

//end test case validation appears






//Check that validation appears on entering last name with numbers or special characters

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')

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
    settingPageLocatorObject.getFirstNameError().should('contain', 'Please enter valid last name')
    settingPageLocatorObject.getcloseAddnewManager().click({ force: true })
})

//end test case validation appears




//How to Update managers details

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')

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
    settingPageLocatorObject.getFirstName().clear({ force: true }).type("Test")
    settingPageLocatorObject.getLastName().clear({ force: true }).type("Manager")

})
And('User clicks on Update button in update', () => {
    settingPageLocatorObject.getUpdateButton().click({ force: true })

})
Then('Manager is updated', () => {
    settingPageLocatorObject.getUpdateSuccessMessage().should('contain', 'Manager updated successfully.')

})

//end test case update manager details

//How to delete existing manager

Given("User is navigating to Setting page", () => {
    cy.url().should('include', '/settings')

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
    settingPageLocatorObject.getdeletepopupmanager().should('contain', 'Are you sure you want to delete?')


})
And('User select Yes in Are You Sure You Want To Delete YES OR NO', () => {
    settingPageLocatorObject.getDeleteManagerButton().should('contain', 'Delete').click({ force: true })

})
Then('Manager is Deleted', () => {

    settingPageLocatorObject.getDeleteMessage().should('contain', 'Manager deleted successfully.')


})

//end test case delete manager details