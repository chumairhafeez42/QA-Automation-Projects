/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import NewsfeedPageLocator from '../../Page_Locators/NewsfeedPageLocator/newsfeed.js'
const newsfeed_locator = new NewsfeedPageLocator()

    let company_news;
    let description_news;
    let date_news; 
    let  google_company_news;
    let news_title;

//user moves to newsfeed screen
When('User click on Newsfeed', () => {
    newsfeed_locator.navigate_newsfeed().click({force : true})
})

//---------Check That Reload button in newsfeed is functional or not--------//

Given ('User is navigating to NewsFeed Page', () => {
    cy.log("User is on Newsfeed page")
})
When ('User clicks on Reload button', () => {
    newsfeed_locator.reloadbtn().click({force: true})
})
Then ('News are reloaded on the based of companies source scores', () => {
    newsfeed_locator.newstitle().invoke('text').then(val => {
        news_title = val;
        cy.log(news_title)
    })
    newsfeed_locator.news_company().invoke('text').then(val => {
        company_news = val;
        cy.log(company_news)
    })
    newsfeed_locator.news_description().invoke('text').then(val => {
        description_news = val;
        cy.log(description_news)
    })
    newsfeed_locator.news_date().invoke('text').then(val => {
        date_news = val;
        cy.log(date_news)
    })
    newsfeed_locator.news_google_company().invoke('text').then(val => {
        google_company_news = val;
        cy.log(google_company_news)
    })
})


//------Verify That Newsfeed is coming or not based on campaign communication?----------//


Given ('User is navigating to Campaign Page', () => {
    cy.contains('Campaign').should('be.exist').click({force : true})
    cy.log("User is on Campaign page")
})
And ('User verify that campaign is enabled',() => {
    newsfeed_locator.campaign_subject().should('be.exist')
    newsfeed_locator.campaign_enabled().should('be.enabled')
})
When ('User navigates to Newsfeed page', () => {
    newsfeed_locator.navigate_newsfeed().should('be.exist').click({force :true})
    newsfeed_locator.reloadbtn().should('be.exist').click({force: true})
})
And('User verify the news coming from that company which is communicated in campaign',() => {

})
Then ('Most communicated company news appears on top', () => {
    newsfeed_locator.newstitle().should('be.exist').invoke('text').then(val => {
        news_title = val;
        cy.log(news_title)
    })
    newsfeed_locator.news_company().should('be.exist').invoke('text').then(val => {
        company_news = val;
        cy.log(company_news)
    })
    newsfeed_locator.news_description().should('be.exist').invoke('text').then(val => {
        description_news = val;
        cy.log(description_news)
    })
    newsfeed_locator.news_date().should('be.exist').invoke('text').then(val => {
        date_news = val;
        cy.log(date_news)
    })
    newsfeed_locator.news_google_company().invoke('text').then(val => {
        google_company_news = val;
        cy.log(google_company_news)
    })
})


//------Check that Like button functionality is working fine or not?-------//

Given ('User is navigating to newsfeed page', () => {
    cy.log("User is on Newsfeed page")
})
And ('News are reloaded on the based of companies & source scores',() => {
    newsfeed_locator.navigate_newsfeed().should('be.exist').click({force :true})
    newsfeed_locator.reloadbtn().should('be.exist').click({force: true})
})
When ('User clicks on Like button any of news', () => {
    
})
And('A Success message appears',() => {

})
And('Like button disabled based on source',() => {

})
Then ('In backend source & company score is incremented', () => {
    newsfeed_locator.newstitle().should('be.exist').invoke('text').then(val => {
        news_title = val;
        cy.log(news_title)
    })
    newsfeed_locator.news_company().should('be.exist').invoke('text').then(val => {
        company_news = val;
        cy.log(company_news)
    })
    newsfeed_locator.news_description().should('be.exist').invoke('text').then(val => {
        description_news = val;
        cy.log(description_news)
    })
    newsfeed_locator.news_date().should('be.exist').invoke('text').then(val => {
        date_news = val;
        cy.log(date_news)
    })
    newsfeed_locator.news_google_company().invoke('text').then(val => {
        google_company_news = val;
        cy.log(google_company_news)
    })
})

