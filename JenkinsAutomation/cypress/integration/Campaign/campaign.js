/// <reference types="cypress" />
import { use } from "chai";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CampaignLocator from '../../Page_Locators/CampaignPageLocator/campaign.js'
const campaignlocator = new CampaignLocator()



// User moves to campaign screen

    When('User is on campaign screen', () => {
        cy.wait(2000)
        campaignlocator.navigatecampaign().click()
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext))
        })
    })


//-----------------Verify that campaign detail is opening-------------------------------//
    Given('User is navigate to Campaign list page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext)))
            expect(campaignlocator.campaign_subject().should('be.visible').eq(0).invoke('text'))
        })
    })
    When ('User clicks on campaign', () => {
        campaignlocator.campaign_card().should('be.exist').click()
    })
    Then ('Campaign detail page opens', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(campaignlocator.campaign_detailpage_header().should('be.exist').invoke('text').should('contains' , (this.data.cardtitlename)))
            expect(cy.contains(this.data.campaign_delivery_rate).should('be.exist'))
            expect(cy.contains(this.data.campaign_response_rate).should('be.exist'))
            expect(cy.contains(this.data.campaign_bounce_back).should('be.exist'))
        })
    })

//-----------------Check that recipients is showing all in reciepients in campaign details-------------------------------//

    Given('User is navigating to Campaign list page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext)))
            expect(campaignlocator.campaign_subject().should('be.visible').eq(0).invoke('text').should('eq' , this.data.cardtitlename))
        })
    })
    And ('User clicks on campaign', () => {
        campaignlocator.campaign_card().should('be.visible').click({force : true})
    })
    When ('User clicks on Recipients', () => {
        campaignlocator.campaign_recipients_btn().should('be.visible').click({force : true})
    })
    Then ('All recipients are showing in recipient section', () => {
        let InputVal = ''
        campaignlocator.campaign_user_email().eq(1).invoke('text').then(val => {
            InputVal = val;
            cy.log(InputVal)
            cy.contains(InputVal).should('be.exist')

        })
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(cy.contains(this.data.campaign_table_name_column).should('be.exist'))
            expect(cy.contains(this.data.campaign_table_company_column).should('be.exist'))
            expect(cy.contains(this.data.campaign_table_tag_column).should('be.exist'))
        })
    })

//-----------------Check that purge body is purging campaign body-------------------------------//

Given('User navigates on to Campaign list page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext)))
        expect(campaignlocator.campaign_subject().should('be.visible').eq(0).invoke('text').should('eq' , this.data.cardtitlename))
    })
})
When ('User clicks on campaign', () => {
    campaignlocator.campaign_card().should('be.visible').click({force :true})
})
And ('User clicks on purge body button', () => {
    campaignlocator.campaign_purge_btn().should('be.visible').click({force :true})
})
And ('A Warning Form appears', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.purge_modal_txt).should('be.exist')
    })
})

And ('User clicks on Yes or No button', () => {
    campaignlocator.purge_warning_form_auth().should('be.exist').click({force :true})
})
Then ('Campaign body purged successfully', () => {
    let InputVal = ''
    cy.get('.ant-col-19 > p').should('be.exist').invoke('text').then(val => {
        InputVal = val;
        cy.log(InputVal)
        cy.contains(InputVal).should('be.exist')

    })
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(cy.contains(this.data.purge_txt).should('be.exist'))
    })
})


//-----------------Verify that card view form is working properly in campaign module-------------------------------//


Given('User is navigating to Campaign page', ()=> {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext)))
        expect(campaignlocator.campaign_subject().should('be.visible').eq(0).invoke('text').should('eq' , this.data.cardtitlename))
    })
})
And ('campaigns are in listview form', ()=> {
    campaignlocator.table_panel_campaign().then($el => {
        campaignlocator.campaign_list_view().click({force :true})
    })
})
When ('User clicks on card view icon button', ()=> {
    campaignlocator.campaign_card_view().should('be.exist').click({force :true})
})
Then ('campaign card converted in card view form', ()=> {
    campaignlocator.campaign_card_grid().should('be.exist')
})


//-----------------Verify that listview form is working properly in campaign module-------------------------------//


Given('User is navigating on to Campaign page', ()=> {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext)))
        expect(campaignlocator.campaign_subject().should('be.visible').eq(0).invoke('text').should('eq' , this.data.cardtitlename))
    })
})
When ('User clicks on listview icon button', ()=> {    
    campaignlocator.campaign_card_view().click({force:true}).should('be.exist')
    campaignlocator.table_panel_campaign().then($el => {
        campaignlocator.campaign_list_view().click({force:true})
    })
})
Then ('campaign card converted in list form', ()=> {
    campaignlocator.campaign_list_grid().should('be.exist')
})



//-----------------Check that search functionality is working or not-------------------------------//


Given('User is navigating to Campaign page', ()=> {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext)))
        expect(campaignlocator.campaign_subject().should('be.visible').eq(0).invoke('text').should('eq' , this.data.cardtitlename))
    })
})

When('User enter value in searchbox', ()=> {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(campaignlocator.searchboxvalue().type(this.data.campaign_search_date).type('{enter}'))
    })
})

And ('User can search by selects Start End date', ()=> {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(campaignlocator.searchboxvalue().type(this.data.campaign_search_date).type('{enter}'))
    })
})
Then ('Searched campaign appears', ()=> {
    campaignlocator.campaign_card_grid().should('be.exist')
})


//-----------------Check that draft campaign is synced-------------------------------//

    Given ('User is navigating to Campaign page', ()=> {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(campaignlocator.campaignbreadcrums().invoke('text').should('eq', (this.data.campaignheadertext)))
            expect(campaignlocator.campaign_subject().should('be.visible').eq(0).invoke('text').should('eq' , this.data.cardtitlename))
        })
    })
    When ('User clicks on draft tab', ()=> {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(cy.contains(this.data.campaign_draft).click({force : true}))
        })
    })
    And ('User clicks on icon', ()=> {
       campaignlocator.campaign_config_btn().click().should('be.exist')
    })
    And ('User clicks on Campaign configurations', ()=> {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(cy.contains(this.data.campaign_config_txt).should('be.exist').click({force: true}))
        })
    })
    And ('User enter value in Email Subject', ()=> {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(cy.contains(this.data.campaign_copy_btn).click({force : true}).should('be.exist'))
        })
    })
    And ('User open gmail', ()=> {
        campaignlocator.campaign_reciepent_count().click({force : true}).should('be.exist')
    })
    And ('User Click on compose button', ()=> {

    })
    And ('User enter 10 emails', ()=> {

    })
    And ('User add value to subject', ()=> {

    })
    And ('User add value in email body', ()=> {

    })
    And ('User clicks configure button in campaign tab', ()=> {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(cy.contains(this.data.configure_modal_txt).click({force : true}).should('be.exist'))
        })
    })
    Then ('Success message appear on the top of page', ()=> {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            expect(cy.contains(this.data.campaign_setting_msg).should('be.exist'))
        })
    })


//-----------------Check that draft campaign is synced-------------------------------//