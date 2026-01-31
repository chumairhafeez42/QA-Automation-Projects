export class DashboardLocator {

    navigatecampaign(){
        return cy.get('[href="/app/campaigns"] > .sidebar-item')
    }

    campaignbreadcrums(){
        return cy.get('.custom-breadcrumb-item')
    }

    campaign_card(){
        return cy.get(':nth-child(1) > .ant-card > .ant-card-body')
    }

    campaign_subject(){
        return cy.get(':nth-child(1) > .ant-card > .ant-card-body > a > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-title')
    }

    campaign_detailpage_header(){
        return cy.get('h3')
    }
    campaign_response_btn(){
        return cy.get('.ant-tabs-nav-list > :nth-child(2)')
    }
}
export default DashboardLocator