/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import TaskLocator from '../../Page_Locators/TaskPageLocators/tasks.js'
const tasklocator = new TaskLocator()
import LoginLocator from '../../Page_Locators/LoginPageLocators/Login.js'
const loginLocator = new LoginLocator();


// User moves to Task screen

    When('User is navigating to Task Page', () => {
        cy.wait(6000)
        tasklocator.navigatetask().click()
        cy.wait(2000)
    })


//...........................................................................................//
// How to create a Task in list view

    Given ('User is on Task Page', () => {
        tasklocator.taskbreadcrums().invoke('text').should('eq', 'Tasks')
        
    })
    And ('User select TaskPage type list or calendar', () => {
        tasklocator.listviewtask().click()
        cy.wait(2000)
    })
    When ('User clicks on New Task', () => {
        tasklocator.newtaskbutton().should('be.exist').click()

    })
    And ('Task modal form appears', () => {
        tasklocator.modalform().invoke('text').should('eq', 'Add New Task')
    })
    And ('User enters Taskname in Add Title field', () => {
        tasklocator.tasknamefield().type("Test Task")
    })
    And ('User selects contacts from dropdown menu', () => {
        tasklocator.taskcontactfield().click()
    })
    And ('User can select Multiples contacts associated with tasks', () => {
        tasklocator.selecttaskcontact().click()
    })
    And ('User selects date & time', () => {
        tasklocator.taskdescriptionfield().type('Test data').clear()
        tasklocator.taskdatetimefield().type('2021-11-26 22:15')
        tasklocator.taskdatetimeokfield().should('be.exist').click()
        
    })
    And ('User selects reminder time from dropdown menu field', () => {
        tasklocator.taskreminderfield().click()
        tasklocator.tasktimesetreminder().contains('5 Minutes').click()
    })
    And ('User selects assignee from dropdown menu', () => {
        tasklocator.taskassignee().click()
        tasklocator.taskassigneeselect().contains('contactdatabase96@gmail.com').should('be.visible').click()
    })
    And ('User selects priority from dropdown menu', () => {
        tasklocator.taskpriority().click()
        tasklocator.taskpriorityselect().contains('High').click()
    })
    And ('User enter task description in desciption field', () => {
        tasklocator.taskdescriptionfield().type('Test data')
    })
    And ('User clicks on save button', () => {
        tasklocator.tasksavebutton().should('be.visible').click()
    })
    Then ('A Task is created', () => {
        tasklocator.tasksuccessmessage().contains('Task created successfully.')
    })
    And ('Success message appears', () => {
        cy.contains('Test Task').should('be.exist')
    })

//.........................................................................................//
//Check that task in list view on selecting open status filter from dropdown


    Given('User is navigate to Task Page', () => {
        cy.contains('Test Task').should('be.exist')
        cy.wait(1000)
        tasklocator.Alltaskdropdown().click()
    })
    When ('User select open from All Task dropdown', () => {
        tasklocator.openstatus().click()
    })
    Then ('Only open status task are showing in the table', () => {
        let status = tasklocator.openstatustable().contains('Open').should('be.exist')
    })

//.........................................................................................//
//Check that task in list view on selecting open status filter from dropdown


    Given('User is navigated to Task Page', () => {
        cy.contains('Test Task').should('be.exist')
        cy.wait(1000)
        
    })
    When ('User clicks on any existing Task checkbox', () => {
        tasklocator.tasknamecheckbox().eq(0).within(checkBox => {
            cy.get('.ant-checkbox-input').eq(0).click()
        })

    })
    And ('User clicks on mark as completed button in the modal', () => {
        tasklocator.markascomplete().click()
        tasklocator.markascompletebutton().click().should('be.exist')
        
    })
    And ('Task status changed in the list view', () => {
        tasklocator.tasksuccessmessage().contains('Task(s) updated successfully.')
        cy.wait(1000)

    })
    Then ('Task status is showing as completed', () => {
        let status = tasklocator.openstatustable().contains('Completed').should('be.exist')
    })


//.........................................................................................//
//Check that task in list view on selecting completed status filter from dropdown


    Given('User is navigate on Task Page', () => {
        cy.contains('Test Task').should('be.exist')
        cy.wait(1000)
        tasklocator.Alltaskdropdown().click()
    })
    When ('User select complete from All Task dropdown', () => {
        tasklocator.completestatus().click()
    })
    Then ('Only complete status task are showing in the table', () => {
        let status = tasklocator.completedstatustable().contains('Complete').should('be.exist')
    })

//.........................................................................................//
//Check that task in list view on selecting All Task filter from dropdown


    Given('User is navigates to Task Page', () => {
        cy.contains('Test Task').should('be.exist')
        cy.wait(1000)
        tasklocator.Alltaskdropdown().click()
        tasklocator.completestatus().click()
        let status = tasklocator.completedstatustable().contains('Complete').should('be.exist')
        cy.wait(1000)
        cy.get('.ant-input-search').type('Test Scenario').clear()
        
    })
    When ('User select All Task from dropdown', () => {
        tasklocator.Alltaskdropicon().click()
        tasklocator.alltaskstatus().click()
    })
    Then ('All Tasks contain all types of task status in the table', () => {
        let status = cy.contains('Test Task').should('be.exist')
    })

//...........................................................................................//

//Check that task in list view on selecting overdue statsus filter from dropdown


Given('User is navigating on Task Page', () => {
    cy.contains('Test Task').should('be.exist')
    cy.wait(1000)
    tasklocator.Alltaskdropdown().click()
    
})
When ('User select over due from All Task dropdown', () => {
    
    tasklocator.overduetaskstatus().click()
})
Then ('Only over due status task are showing in the table', () => {
    let status = cy.contains('Test Scenario').should('be.exist')
})

//...........................................................................................//

//Check that in tasks module search functionality is working fine or not
    Given ('User is navigatied on Task Page', () => {
        cy.contains('Test Task').should('be.exist')
        cy.wait(10000)
        cy.get('.ant-input-search').type('Test Scenario').clear()
    })
    When ('User type any taskname in search box', () => {
        cy.get('.ant-input-search').type('Test Scenario{enter}')
    })
    And ('User press enter key', () => {
    })
    Then ('Searched task is showing on screen according to desired requirements', () => {
        cy.contains('Test Scenario').should('be.exist')
    })



//..........................................................................................//

// Check that Task is deleted or not?

    Given ('User navigate to Task Page', () => {
        cy.contains('Test Task').should('be.exist')
    })

    When ('User clicks on any Task checkbox', () => {
        tasklocator.tasknamecheckbox().eq(0).within(checkBox => {
            cy.get('.ant-checkbox-input').eq(0).click()
        })
    })
    And ('User clicks on Delete option', () => {
        tasklocator.deletetask().click()
    })
    And ('A delete button in the modal appears', () => {
        tasklocator.deletemodal().contains('Delete task(s)').should('be.exist')
        
    })
    And ('User selects Are You Sure You Want to delete YES or NO', () => {
        tasklocator.deletemodalbutton().click()
    })
    Then ('Toast message appears at top of page', () => {
        tasklocator.tasksuccessmessage().contains('Task(s) deleted successfully.')
        
    })


    //...........................................................................................//