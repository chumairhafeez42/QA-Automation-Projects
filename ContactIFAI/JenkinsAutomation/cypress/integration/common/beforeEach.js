import LoginLocator from '../../Page_Locators/LoginPageLocators/Login.js'
const loginLocator = new LoginLocator();


beforeEach(function () {

    // cy.visit('http://192.168.3.71:9797/signin')
    cy.visit('https://contactif.ai/signin')
    cy.contains('Sign in').should('be.exist')
    cy.wait(12000);

    // loginLocator.getEmailInput().clear()
    // cy.wait(2000);
    // loginLocator.getPasswordInput().clear()
    // cy.wait(2000)
  
    loginLocator.getEmailInput().type("contactdatabase96@gmail.com")
    loginLocator.getPasswordInput().clear().type("Aabc@1122");
    loginLocator.getLoginButton().click();
    cy.log("User logged in successfully");
    cy.wait(12000)
})