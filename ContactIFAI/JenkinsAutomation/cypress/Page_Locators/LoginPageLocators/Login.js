export class LoginLocator {

    getEmailInput() {
        return cy.get('#username')
    }

    getPasswordInput() {
        return cy.get('#password')
    }

    getEmailValidation() {
        return cy.get(':nth-child(1) > .ant-col > .ant-form-item-explain > div')
    }

    getPasswordValidation() {
        return cy.get(':nth-child(2) > .ant-col > .ant-form-item-explain > div')
    }


    getInvalidMessage() {
        
        return cy.get(".ant-message-custom-content > :nth-child(2)")
    }

    getLoginButton()
    {
        return cy.get(".ant-btn")
    }

}
export default LoginLocator;