export class DashboardLocator {

    navigatecampaign(){
        return cy.get('[href="/app/campaigns"] > .sidebar-item')
    }

    campaignbreadcrums(){
        return cy.get('.custom-breadcrumb-item')
    }

    campaign_card(){
        return cy.get(':nth-child(1) > .ant-card > .ant-card-body').first()
    }
    campaign_user_email(){
        return cy.get('.user-email')
    }
    searchboxvalue(){
        return cy.get('.ant-picker')
    }
    searchboxvalue2(){
        return cy.get(':nth-child(3) > input')
    }
    campaign_config_btn(){
        return cy.get('#selectPosition > .ant-btn')
    }
    campaign_reciepent_count(){
        return cy.get('#recipients_count')
    }
    campaign_subject(){
        return cy.get(':nth-child(1) > .ant-card > .ant-card-body > a > .ant-card-meta > .ant-card-meta-detail > .ant-card-meta-title')
    }
    campaign_detailpage_header(){
        return cy.get('h3')
    }
    campaign_recipient_header(){
        return cy.get(':nth-child(1) > :nth-child(1) > .user-complete-name')
    }
    campaign_recipients_btn(){
        return cy.get('.ant-tabs-nav-list > :nth-child(3)')
    }
    campaign_purge_btn(){
        return cy.get('.ant-col-5 > .ant-btn')
    }
    purge_warning_form(){
        return cy.get('.ant-popover-message-title')
    }
    purge_warning_form_auth(){
        return cy.get('.ant-popover-buttons > :nth-child(1)')
    }
    campaign_reciepent_name(){
        return cy.get('.user-complete-name')
    }
    table_panel_campaign(){
        return cy.get('.table-control-panel')
    }
    campaign_list_view(){
        return cy.get('[style="width: 40px;"] > .anticon > svg').first()
    }
    campaign_card_view(){
        return cy.get('[style="width: 40px; margin-right: -1px;"] > .anticon > svg').first()
    }
    campaign_card_grid(){
        return cy.get('.campaigns-wrapper > :nth-child(1) > :nth-child(1) > :nth-child(1)')
    }
    campaign_list_grid(){
        return cy.get(':nth-child(1) > .ant-col')
    }
}
export default DashboardLocator