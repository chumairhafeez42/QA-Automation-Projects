/// <reference types="cypress"/>

import {
    Given, When, Then, And
} from "cypress-cucumber-preprocessor/steps";

import NotificationPageLocator from '../../Page_Locators/NotificationPageLocator/NotificationPageLocator.js'
const notificationPageLocatorObject = new NotificationPageLocator();



//User is navigating to notification view all
When("User click on view all", () => {
    cy.wait(6000)
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(6000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(5000)

})

// Check total count of notification on notification page is showing or not

Given('User is navigating to notification page', () => {
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(1000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(1000)

})
let notificationCount = ""
When('User scroll down the page top to bottom', () => {
    cy.log('User scroll down the page top to bottom')
    // notificationPageLocatorObject.getNotificationCount().invoke('text').then($text => {
    //     cy.log($text)
    //     notificationCount = $text
    //     expect(notificationCount.trim()).equal('Total')
    // })
    cy.wait(4000)

})
Then('total no. of notification count appears at top and bottom of page', () => {
    cy.log('total no. of notification count appears at top and bottom of page')
    // cy.log("Total Notification Count = " + notificationCount + " And Hence Test Case is passed")




})

//  User case ended



// Check that pagination in notification screen is functional or not

Given('User is navigating to notification page', () => {
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(1000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(1000)

})
When('User clicks on any pagination number below the table', () => {
    notificationPageLocatorObject.getPagination2().should("be.exist").click()
    cy.wait(4000)

})
Then('Notifications present on that pagination number are showing in the table', () => {

    cy.log(cy.intercept("Notifications present on that pagination number are showing in the table"))

})

//  User case ended



// Check that All notification are showing

Given('User is navigating to notification page', () => {
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(1000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(1000)

})
When('User select All from the dropdown', () => {
    cy.wait(5000)
    notificationPageLocatorObject.getdropdown().click()
    notificationPageLocatorObject.getAllDropdown().click()
    cy.wait(4000)

})
Then('Only All notifications are showing', () => {
    notificationPageLocatorObject.getAllDropdown().should('contain', 'All')


})

//  Manager case ended

// Check that Manager notifications are showing

Given('User is navigating to notification page', () => {
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(1000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(1000)

})
When('User select Manager from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click()
    notificationPageLocatorObject.getManagerDropdown().should("be.exist").click()
    cy.wait(4000)

})
Then('Only Manager notifications are showing', () => {
    notificationPageLocatorObject.getManagerDropdown().should("contain", 'Manager')

})

//  Manager case ended


// Check that Campaign notifications are showing

Given('User is navigating to notification page', () => {
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(1000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(1000)

})
When('User select Campaign from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click()
    notificationPageLocatorObject.getCampaignDropdown().click()

    cy.wait(4000)

})
Then('Only Campaign notifications are showing', () => {
    notificationPageLocatorObject.getCampaignDropdown().should('contain', 'Campaign')

})

// Campaigns case ended


// Check that Task notifications are showing

Given('User is navigating to notification page', () => {

    cy.log("User is on notification page")

})
When('User select Tasks from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().click()
    notificationPageLocatorObject.getTaskDropdown().click()
    cy.wait(4000)

})
Then('Only Task notifications are showing', () => {


    notificationPageLocatorObject.getTaskDropdown().should('contain', 'Task')

})

//Task Test case ended


// Check that Contacts notification are showing

Given('User is navigating to notification page', () => {
    cy.log("User is on notification page")

})
When('User select Contacts from the dropdown', () => {

    notificationPageLocatorObject.getdropdown().click()
    notificationPageLocatorObject.getTotal().scrollIntoView()
    cy.wait(4000)
    notificationPageLocatorObject.getContactDropdown().click()
    cy.wait(7000)

})
Then('Only Contacts notifications are showing', () => {

    notificationPageLocatorObject.Contactnotification().should('contain', 'Contact')

})

//Contacts case ended


// Check that Tags notification are showing

Given('User is navigating to notification page', () => {
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(1000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(1000)

})
When('User select Tags from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().click()
    notificationPageLocatorObject.getTagDropdown().click()
    cy.wait(4000)

})
Then('Only Tags notifications are showing', () => {


    notificationPageLocatorObject.getTagDropdown().should('contain', 'Tag')

})

// Tags case ended

// Check that Configurations notification are showing

Given('User is navigating to notification page', () => {
    notificationPageLocatorObject.getBellIcon().click()
    cy.wait(1000)
    notificationPageLocatorObject.getAllNotification().click()
    cy.wait(1000)

})
When('User select Configurations from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click()
    notificationPageLocatorObject.getConfigurationDropdown().click()
    cy.wait(4000)

})
Then('Only Configurations notifications are showing', () => {

    notificationPageLocatorObject.getConfigurationDropdown().should('contain', 'Configuration')

})

// Configurations case ended