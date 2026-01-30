
class NotificationPageLocator {


    getBellIcon() {
        return cy.get('#notificationDropdown > .ant-btn')
    }
    getAllNotification() {
        return cy.contains('View All')
    }
    getdropdown() {
        return cy.get('[style="padding: 24px;"] > .ant-btn > :nth-child(1)')

    }
    getNotificationCount() {

        return cy.get(".notification-container > div > span")

    }

    getAllDropdown() {
        return cy.get('li').contains("All")
    }
    getContactDropdown() {
        return cy.get('.ant-dropdown-menu > :nth-child(3)')
    }
    Contactnotification(){
        return cy.get(':nth-child(1) > .ant-col-md-18 > h3')
    }
    getTagDropdown() {
        return cy.get('li').contains("Tag")
    }
    getTaskDropdown() {
        return cy.get('li').contains("Task")
    }
    getCampaignDropdown() {
        return cy.get('li').contains('Campaign')
    }
    getConfigurationDropdown() {
        return cy.get('.ant-dropdown-menu > :nth-child(7)')
    }
    getTagUserDropdown() {
        return cy.get('.ant-dropdown-menu > :nth-child(4)')
    }
    getManagerDropdown() {
        return cy.get('li').contains('Manager')
    }
    getTotal() {
        return cy.get('[style="padding: 24px;"] > :nth-child(1)')
    }
    getPagination2() {
        return cy.get('.ant-pagination-item-2 > a')
    }
    getPagination1() {
        return cy.get('.ant-pagination-item ant-pagination-item-1')
    }

}
export default NotificationPageLocator;