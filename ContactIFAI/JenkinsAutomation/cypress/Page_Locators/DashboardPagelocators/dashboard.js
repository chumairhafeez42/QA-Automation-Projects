export class DashboardLocator {

    navigatedashboard(){
        cy.get('[href="/app"] > .sidebar-item')
    }

    dashboardbreadcrums(){
        return cy.get('.custom-breadcrumb-item')    
    }

    contactstatbox() {
        return cy.get(':nth-child(1) > .ant-card')
    }
    
    contactsalldropdown(){
        return cy.get('#selectPosition > [style="position: absolute; top: 0px; left: 0px; width: 100%;"] > :nth-child(1) > .ant-dropdown > .ant-dropdown-menu > :nth-child(1)')
    }
    contactdropdown(){
        return cy.get('.ant-card-body > #selectPosition > .ant-btn')
    }

    contacttodaydropdown(){
        return cy.get('#selectPosition > [style="position: absolute; top: 0px; left: 0px; width: 100%;"] > :nth-child(1) > .ant-dropdown > .ant-dropdown-menu > :nth-child(2)')
    }

    contact7daydropdown() {
        return cy.get('#selectPosition > [style="position: absolute; top: 0px; left: 0px; width: 100%;"] > :nth-child(1) > .ant-dropdown > .ant-dropdown-menu > :nth-child(3)')
    }

    contact30daydropdown(){
        return cy.get('#selectPosition > [style="position: absolute; top: 0px; left: 0px; width: 100%;"] > :nth-child(1) > .ant-dropdown > .ant-dropdown-menu > :nth-child(4)')
    }

    contact3monthdropdown() {
        return cy.get('#selectPosition > [style="position: absolute; top: 0px; left: 0px; width: 100%;"] > :nth-child(1) > .ant-dropdown > .ant-dropdown-menu > :nth-child(5)')
    }
    contacts_counts() {
        return cy.get('.contacts-value')
    }

    campaignstatbox() {
        return cy.get(':nth-child(2) > .ant-card')
    }

    campaigndropdown(){
        return cy.get('.ant-card-body > #selectPosition > .ant-btn')
    }

    campaignalldropdown(){
        return cy.get(':nth-child(2) > .ant-card > .ant-card-body > #selectPosition > .ant-btn')
    }
    
    campaigncounts(){
        return cy.get('.campaigns-value')
    }

    bouncedbackdropdown(){
        return cy.get(':nth-child(3) > .ant-card > .ant-card-body > #selectPosition > .ant-btn')
    }

    bounce_value(){
        return cy.get('.bounced-value')
    }

    taskstatsdropdown(){
        return cy.get(':nth-child(4) > .ant-card > .ant-card-body > #selectPosition > .ant-btn')
    }

    task_value(){
        return cy.get('.tasks-value')
    }

    trending_contacts(){
        return cy.get('.trending-contact-heading > h4')
    }

    treding_contacts_stats(){
        return cy.get('.trending-contact-graph > .chartjs-render-monitor')
    }

    emptynewcontact_stats() {
        return cy.get('.total-contacts-graph > .ant-empty > .ant-empty-description')
    }
}
export default DashboardLocator