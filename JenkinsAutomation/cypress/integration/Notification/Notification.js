/// <reference types="cypress"/>

import {
    Given, When, Then, And
} from "cypress-cucumber-preprocessor/steps";
import NotificationPageLocator from '../../Page_Locators/NotificationPageLocator/NotificationPageLocator.js'
const notificationPageLocatorObject = new NotificationPageLocator();


let InputVal; 
//User is navigating to notification view all
When("User click on view all", () => {
    notificationPageLocatorObject.getBellIcon().should("be.exist").click({force : true})
    notificationPageLocatorObject.notification_header().invoke('text').should('be.exist').then(el => {
        InputVal = el;
        cy.log(InputVal)
        cy.contains(InputVal)
    })   
    notificationPageLocatorObject.view_all_notification().should('be.visible').click({force : true})
    notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(el => {
        InputVal = el;
        cy.log(InputVal)
        cy.contains(InputVal)
    })
    notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(el => {
        InputVal = el;
        cy.log(InputVal)
        cy.contains(InputVal)
    })
    
    notificationPageLocatorObject.getAllNotification_count().should("be.exist").click({force : true})
})

// Check total count of notification on notification page is showing or not

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
    cy.wait(2000)
})
let notificationCount = ""
When('User scroll down the page top to bottom', () => {
    notificationPageLocatorObject.notification_table().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
})
Then('total no. of notification count appears at top and bottom of page', () => {
    notificationPageLocatorObject.total_count().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
})

//  User case ended
// Check that pagination in notification screen is functional or not

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User clicks on any pagination number below the table', () => {
    notificationPageLocatorObject.getPagination2().should("be.exist").click({force : true})
    cy.wait(3000)
    notificationPageLocatorObject.notification_table().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    notificationPageLocatorObject.total_count().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
})
Then('Notifications present on that pagination number are showing in the table', () => {
    notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
})

//  User case ended
// Check that All notification are showing

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User select All from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should("be.exist").click({force : true})
    cy.wait(500)
    notificationPageLocatorObject.getAllDropdown().should("be.exist").click({force : true})
    cy.wait(3000)
})
Then('Only All notifications are showing', () => {
    notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
})

//  Manager case ended
// Check that Manager notifications are showing

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User select Manager from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click({force : true})
    cy.wait(500)
    notificationPageLocatorObject.getManagerDropdown().should("be.exist").click({force : true})
    cy.wait(3000)
})
Then('Only Manager notifications are showing', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        notificationPageLocatorObject.getManagerDropdown().should("contain", this.data.notification_manager)
        notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
        notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
            InputVal = val;
            cy.log(InputVal)
        })
    })
    
    })
})

//  Manager case ended
// Check that Campaign notifications are showing

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User select Campaign from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click({force : true})
    cy.wait(500)
    notificationPageLocatorObject.getCampaignDropdown().should('be.exist').click({force : true})
    cy.wait(3000)
})
Then('Only Campaign notifications are showing', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.getCampaignDropdown().should('contain', this.data.notification_campaign))
    })
    notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
})

// Campaigns case ended
// Check that Task notifications are showing

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User select Tasks from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click({force : true})
    cy.wait(500)
    notificationPageLocatorObject.getTaskDropdown().should('be.exist').click({force : true})
    cy.wait(1000)

})
Then('Only Task notifications are showing', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        notificationPageLocatorObject.getTaskDropdown().should('contain' , this.data.notification_task)
        notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
            InputVal = val;
            cy.log(InputVal)
        })
        notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
            InputVal = val;
            cy.log(InputVal)
        })
    })
})

//Task Test case ended
// Check that Contacts notification are showing

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User select Contacts from the dropdown', () => {

    notificationPageLocatorObject.getdropdown().should('be.exist').click({force : true})
    notificationPageLocatorObject.getTotal().scrollIntoView()
    cy.wait(1000)
    notificationPageLocatorObject.getContactDropdown().should('be.exist').click({force : true})
    cy.wait(1000)

})
Then('Only Contacts notifications are showing', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        notificationPageLocatorObject.Contactnotification().should('contain', this.data.notification_contact)
        notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
            InputVal = val;
            cy.log(InputVal)
        })
        notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
            InputVal = val;
            cy.log(InputVal)
        })
    })
})

//Contacts case ended
// Check that Tags notification are showing

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User select Tags from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click({force : true})
    notificationPageLocatorObject.getTagDropdown().should('be.exist').click({force : true})
    cy.wait(1000)
})
Then('Only Tags notifications are showing', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        notificationPageLocatorObject.getTagDropdown().should('contain', this.data.notification_tag)
        notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
            InputVal = val;
            cy.log(InputVal)
        })
        notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
            InputVal = val;
            cy.log(InputVal)
        })
    })
})

// Tags case ended
// Check that Configurations notification are showing

Given('User is navigating to notification page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        expect(notificationPageLocatorObject.notification_page_open().invoke('text').should('be.exist'))
        expect(cy.contains(this.data.notification_header_text))
    })
})
When('User select Domain from the dropdown', () => {
    notificationPageLocatorObject.getdropdown().should('be.exist').click({force : true})
    notificationPageLocatorObject.domain_dropdown().should('be.exist').click({force : true})
    cy.wait(1000)
})
Then('Only Domain notifications are showing', () => {
    cy.fixture('testdata').then(function (data) {
    this.data = data;
    notificationPageLocatorObject.domain_dropdown().should('contain', this.data.notification_domain)
    notificationPageLocatorObject.notification_header_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    notificationPageLocatorObject.notification_title_txt().invoke('text').should('be.exist').then(val => {
        InputVal = val;
        cy.log(InputVal)
    })
    })
})

// Configurations case ended