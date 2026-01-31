
class NotificationPageLocator {


    getBellIcon() {
        return cy.get('#notificationDropdown > .ant-btn')
    }
    getAllNotification_count() {
        return cy.get('[style="padding: 24px;"] > :nth-child(1)')
    }
    getdropdown() {
        return cy.get('[style="padding: 24px;"] > .ant-btn > :nth-child(1)')

    }
    getNotificationCount() {

        return cy.get(".notification-container > div > span")

    }
    notification_table(){
        return cy.get('.all-notification-table > :nth-child(1)')
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
    notification_header(){
        return cy.get('.heading-row > h3')
    }
    notification_modal_header(){
        return cy.get(':nth-child(1) > .ant-col-xs-21 > h4').first()
    }
    notification_modal_title(){
        return cy.get(':nth-child(1) > .ant-col-xs-21 > p').first()
    }
    notification_page_open(){
        return cy.get('.custom-breadcrumb-item')
    }
    notification_header_txt(){
        return cy.get(':nth-child(1) > .ant-col-md-18 > h3')
    }
    notification_title_txt(){
        return cy.get(':nth-child(1) > .ant-col-md-18 > p')
    }
    total_count(){
        return cy.get('[style="padding: 24px;"] > :nth-child(1)')
    }
    domain_dropdown(){
        return cy.get('.ant-dropdown-menu > :nth-child(6)')
    }
    view_all_notification(){
        return cy.get('.view-all-notification > a')
    }
}
export default NotificationPageLocator;