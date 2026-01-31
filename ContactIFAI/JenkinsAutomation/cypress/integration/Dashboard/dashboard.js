/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import DashboardLocator from '../../Page_Locators/DashboardPagelocators/dashboard.js'
const dashboardlocator = new DashboardLocator()



// User moves to dashboard screen

    When('User is on dashboard screen', () => {
        cy.wait(6000)
        dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
        cy.wait(2000)
    })


//-----------------Dashboard Total Contacts Today filter count functionaly working or not-------------------------------//

    Given('User is navigating to Dashboard Screen', () => {
        dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
    })
    When('User selects today filter in total contacts dropdown list', () => {
        dashboardlocator.contactstatbox().within(() => {
            dashboardlocator.contactdropdown().should('be.visible').click()
            dashboardlocator.contacttodaydropdown().click()
            cy.wait(100)
        })
    })
    Then('total counts of contacts created by today appears on card', () => {
        dashboardlocator.contacts_counts().invoke('text').should('be.exist')
    })


//-------------------Dashboard Total Contacts 7 days filter count functionaly working or not---------------------------------//

Given('User is navigate to Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When('User selects 7 days filter in total contacts dropdown list', () => {
    dashboardlocator.contactstatbox().within(() => {
        dashboardlocator.contactdropdown().should('be.visible').click()
        dashboardlocator.contact7daydropdown().click()
        cy.wait(1000)
    })
})
Then('total counts of contacts created by 7 days appears on card', () => {
    dashboardlocator.contacts_counts().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Contacts 30 days filter count functionaly working or not---------------------------------//

Given('User is navigating on Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When('User selects 30 days filter in total contacts dropdown list', () => {
    dashboardlocator.contactstatbox().within(() => {
        dashboardlocator.contactdropdown().should('be.visible').click()
        dashboardlocator.contact30daydropdown().click()
        cy.wait(1000)
    })
})
Then('total counts of contacts created by 30 days appears on card', () => {
    dashboardlocator.contacts_counts().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Contacts 3 months filter count functionaly working or not---------------------------------//

Given('User is navigated to Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When('User selects 3 months filter in total contacts dropdown list', () => {
    dashboardlocator.contactstatbox().within(() => {
        dashboardlocator.contactdropdown().should('be.visible').click()
        dashboardlocator.contact3monthdropdown().click()
        cy.wait(1000)
    })
})
Then('total counts of contacts created by 3 months appears on card', () => {
    dashboardlocator.contacts_counts().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Contacts All filter count functionaly working or not---------------------------------//

Given('User is navigates to Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When('User selects all filter in total contacts dropdown list', () => {
    dashboardlocator.contactstatbox().within(() => {
        dashboardlocator.contactdropdown().should('be.visible').click()
        dashboardlocator.contactsalldropdown().click()
        cy.wait(1000)
    })
})
Then('total counts of contacts created by all appears on card', () => {
    dashboardlocator.contacts_counts().invoke('text').should('be.exist')
})


//----------------------------------------Ended Contact Stats-----------------------------------------------------------------//
//-------------------Dashboard Total Campaigns today filter count functionaly working or not---------------------------------//

Given ('User navigating to Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects today filter in total campaign dropdown list', () => {
    dashboardlocator.campaignalldropdown().should('be.visible').click()
    cy.contains('Today').click()
    cy.wait(1000)
})
Then ('total counts of campaigns created by today appears on card', () => {
    dashboardlocator.campaigncounts().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Campaigns 7 days filter count functionaly working or not---------------------------------//

Given ('User navigate to Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 7 days filter in total campaign dropdown list', () => {
    dashboardlocator.campaignalldropdown().should('be.visible').click()
    cy.contains('7 Days').click()
    cy.wait(1000)
})
Then ('total counts of campaign created by 7 days appears on card', () => {
    dashboardlocator.campaigncounts().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Campaigns 30 days filter count functionaly working or not---------------------------------//

Given('User navigates to Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 30 days filter in total campaign dropdown list', () => {
    dashboardlocator.campaignalldropdown().should('be.visible').click()
    cy.wait(500)
    cy.contains('30 Days').click()
    cy.wait(1000)
})
Then ('total counts of campaign created by 30 days appears on card', () => {
    dashboardlocator.campaigncounts().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Campaigns 3 months filter count functionaly working or not---------------------------------//

Given ('User navigating on Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 3 months filter in total campaign dropdown list', () => {
    dashboardlocator.campaignalldropdown().should('be.visible').click()
    cy.contains('3 Months').click()
    cy.wait(1000)
})
Then ('total counts of campaigns created by 3 months appears on card', () => {
    dashboardlocator.campaigncounts().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Campaigns All filter count functionaly working or not---------------------------------//

Given ('User navigated to Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects All filter in total campaigns dropdown list', () => {
    dashboardlocator.campaignalldropdown().should('be.visible').click()
    cy.contains('All').click()
    cy.wait(1000)
})
Then ('total counts of campaigns created by All appears on card', () => {
    dashboardlocator.campaigncounts().invoke('text').should('be.exist')
})

//----------------------------------------Ended  Stats-----------------------------------------------------------------//
//-------------------Dashboard Total bounced Today filter count functionaly working or not---------------------------------//

Given ('User navigating to bounced backs Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects today filter in total bounced dropdown list', () => {
    dashboardlocator.bouncedbackdropdown().should('be.visible').click()
    cy.contains('Today').click()
    cy.wait(1000)
})
Then ('total counts of bounced created by today appears on card', () => {
    dashboardlocator.bounce_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total bounced 7 days filter count functionaly working or not---------------------------------//

Given ('User navigates to bounced backs Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 7 days filter in total bounced dropdown list', () => {
    dashboardlocator.bouncedbackdropdown().should('be.visible').click()
    cy.contains('7 Days').click()
    cy.wait(1000)
})
Then ('total counts of bounced created by 7 days appears on card', () => {
    dashboardlocator.bounce_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total bounced 30 days filter count functionaly working or not---------------------------------//

Given ('User is navigating on bounced backs Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 30 days filter in total bounced dropdown list', () => {
    dashboardlocator.bouncedbackdropdown().should('be.visible').click()
    cy.contains('30 Days').click()
    cy.wait(1000)
})
Then ('total counts of bounced created by 30 days appears on card', () => {
    dashboardlocator.bounce_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total bounced 3 months filter count functionaly working or not---------------------------------//

Given ('User navigating on bounced backs Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 3 months filter in total bounced dropdown list', () => {
    dashboardlocator.bouncedbackdropdown().should('be.visible').click()
    cy.contains('3 Months').click()
    cy.wait(1000)
})
Then ('total counts of bounced created by today appears on card', () => {
    dashboardlocator.bounce_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total bounced All filter count functionaly working or not---------------------------------//

Given ('User is navigated to bounced backs Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects All filter in total bounced dropdown list', () => {
    dashboardlocator.bouncedbackdropdown().should('be.visible').click()
    cy.contains('All').click()
    cy.wait(1000)
})
Then ('total counts of bounced created by All appears on card', () => {
    dashboardlocator.bounce_value().invoke('text').should('be.exist')
})

//---------------------___Ended----------------------------------------------------------------------------//

//----------------------------------------Ended  Stats-----------------------------------------------------------------//
//-------------------Dashboard Total Tasks Today filter count functionaly working or not---------------------------------//

Given ('User navigating to Tasks Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects today filter in total tasks dropdown list', () => {
    dashboardlocator.taskstatsdropdown().should('be.visible').click()
    cy.contains('Today').click()
    cy.wait(1000)
})
Then ('total counts of tasks created by today appears on card', () => {
    dashboardlocator.task_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Tasks 7 days filter count functionaly working or not---------------------------------//

Given ('User navigates to Tasks Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 7 days filter in total tasks dropdown list', () => {
    dashboardlocator.taskstatsdropdown().should('be.visible').click()
    cy.contains('7 Days').click()
    cy.wait(1000)
})
Then ('total counts of tasks created by 7 days appears on card', () => {
    dashboardlocator.task_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Tasks 30 days filter count functionaly working or not---------------------------------//

Given ('User is navigating on Tasks Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 30 days filter in total tasks dropdown list', () => {
    dashboardlocator.taskstatsdropdown().should('be.visible').click()
    cy.contains('30 Days').click()
    cy.wait(1000)
})
Then ('total counts of tasks created by 30 days appears on card', () => {
    dashboardlocator.task_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Tasks 3 months filter count functionaly working or not---------------------------------//

Given ('User navigating on Tasks Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects 3 months filter in total tasks dropdown list', () => {
    dashboardlocator.taskstatsdropdown().should('be.visible').click()
    cy.contains('3 Months').click()
    cy.wait(1000)
})
Then ('total counts of tasks created by 3 months appears on card', () => {
    dashboardlocator.task_value().invoke('text').should('be.exist')
})

//-------------------Dashboard Total Tasks All filter count functionaly working or not---------------------------------//

Given ('User is navigated to Tasks Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')
})
When ('User selects All filter in total tasks dropdown list', () => {
    dashboardlocator.taskstatsdropdown().should('be.visible').click()
    cy.contains('All').click()
    cy.wait(1000)
})
Then ('total counts of tasks created by All appears on card', () => {
    dashboardlocator.task_value().invoke('text').should('be.exist')
})

//-------------------------------------------------Ended--------------------------------------------------------------------//

Given ('User is navigating to treding companies Dashboard Screen', () => {
    dashboardlocator.dashboardbreadcrums().invoke('text').should('eq', 'Dashboard')   
})
When ('User Hover over Trending companies card', () => {
    dashboardlocator.trending_contacts().invoke('text').should('eq', 'Trending Contacts')
})
Then ('Trending companies associated contacts based communication appears on card', () => {
    dashboardlocator.treding_contacts_stats().invoke('text')
})

//-------------------------------------------------Ended--------------------------------------------------------------------//