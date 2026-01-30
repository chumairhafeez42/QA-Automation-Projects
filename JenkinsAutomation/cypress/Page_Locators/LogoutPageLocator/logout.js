export class LogoutLocator {

    getLogoutUserName(){
        return cy.get('.drop-down > .ant-btn')
    }

    getLogout()
    {
        return cy.get('ant-dropdown-menu-item')
    }
    getLogoutButton(){
        return cy.get('.sub-item > .ant-btn > :nth-child(1)')
    }
}
export default LogoutLocator;