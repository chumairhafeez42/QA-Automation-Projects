export class LogoutLocator {

    getLogoutUserName(){
        return cy.get('.drop-down > .ant-btn')
    }

    getLogout()
    {
        return cy.get('ant-dropdown-menu-item')
    }
}
export default LogoutLocator;