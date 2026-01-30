import { After, Before } from 'cypress-cucumber-preprocessor/steps'
import LogOutLocator from '../../Page_Locators/LogoutPageLocator/logout.js'
const logoutLocator = new LogOutLocator();

After({ tags: '@environmeentCleanUp' }, () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        logoutLocator.getLogoutButton().should('be.exist').click({force:true})
        cy.contains(this.data.Logout).should('be.exist').click({force : true})
        cy.log(this.data.success_logout)
        cy.wait(500)
    })
})