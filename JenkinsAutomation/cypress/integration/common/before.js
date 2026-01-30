import { After, Before } from 'cypress-cucumber-preprocessor/steps'
import LoginLocator from '../../Page_Locators/LoginPageLocators/Login.js'
const loginLocator = new LoginLocator();

Before({ tags: '@statusTabFail' }, () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.visit(this.data.visiting_domain)
        cy.wait(3000);
        cy.contains(this.data.SignIn_Text).should('be.exist')
        loginLocator.getEmailInput().should("be.visible").type(this.data.Login_email)
        loginLocator.getPasswordInput().clear({force: true}).type(this.data.login_password);
        loginLocator.getLoginButton().should('be.exist').click({force :true});
        cy.log(this.data.success_login);
        cy.wait(3000)
    })
    
})