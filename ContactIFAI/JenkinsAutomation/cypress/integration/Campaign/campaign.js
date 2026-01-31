/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import CampaignLocator from '../../Page_Locators/CampaignPageLocator/campaign.js'
const campaignlocator = new CampaignLocator()



// User moves to campaign screen

    When('User is on campaign screen', () => {
        cy.wait(6000)
        campaignlocator.navigatecampaign().click()
        campaignlocator.campaignbreadcrums().invoke('text').should('eq', 'Campaigns')
        cy.wait(2000)
    })


//-----------------Verify that campaign detail is opening-------------------------------//
    Given('User is navigate to Campaign list page', () => {
        campaignlocator.campaignbreadcrums().invoke('text').should('eq', 'Campaigns')
        campaignlocator.campaign_subject().invoke('text').should('contain', '[campaign]')
        
    })
    When ('User clicks on campaign', () => {
        campaignlocator.campaign_card().click()
    })
    Then ('Campaign detail page opens', () => {
        campaignlocator.campaign_detailpage_header().invoke('text').should('contains' , '[campaign]')
        cy.contains('Delivery Rate')
        cy.contains('Response Rate')
        cy.contains('Bounce Back')
    })

//-----------------Check that purge body is purging campaign body-------------------------------//

    Given('User is navigating to Campaign list page', () => {
        campaignlocator.campaignbreadcrums().invoke('text').should('eq', 'Campaigns')
        campaignlocator.campaign_subject().invoke('text').should('contain', '[campaign]')
        
    })
    And ('User clicks on campaign', () => {
        campaignlocator.campaign_card().click()
    })
    When ('User clicks on Recipients', () => {
        campaignlocator.campaign_response_btn().click()
    })
    Then ('All recipients are showing in recipient section', () => {
        campaignlocator.campaign_detailpage_header().invoke('text').should('contains' , '[campaign]')
        cy.contains('Name').should('be.exist')
        cy.contains('Company').should('be.exist')
        cy.contains('Tags').should('be.exist')
    })



//-----------------Check that purge body is purging campaign body-------------------------------//