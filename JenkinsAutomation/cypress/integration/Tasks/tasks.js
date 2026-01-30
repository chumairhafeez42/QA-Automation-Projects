/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import TaskLocator from '../../Page_Locators/TaskPageLocators/tasks.js'
const tasklocator = new TaskLocator()

// User moves to Task screen

    When('User is navigating to Task Page', () => {
        tasklocator.navigatetask().should('be.exist').click({force:true})
        cy.wait(1000)
    })


//...........................................................................................//
// How to create a Task in list view

    Given ('User is on Task Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.taskbreadcrums().invoke('text').should('eq', this.data.Task_breadcrum)
        })
        cy.wait(2000)
    })
    And ('User select TaskPage type list or calendar', () => {
        tasklocator.listviewtask().should('be.exist').click({force:true})
        cy.wait(1000)
    })
    When ('User clicks on New Task', () => {
        tasklocator.newtaskbutton().should('be.exist').click({force:true})
    })
    And ('Task modal form appears', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.modalform().invoke('text').should('eq', this.data.newtask_txt)
            })
        })
    And ('User enters Taskname in Add Title field', () => {
        tasklocator.taskfieldview().should('be.visible')
        tasklocator.tasknamefield().scrollIntoView().type("Test Task")
    })
    And ('User selects contacts from dropdown menu', () => {
        tasklocator.taskcontactfield().should('be.exist').click({force:true})
        
    })
    And ('User can select Multiples contacts associated with tasks', () => {
        tasklocator.selecttaskcontact().should('be.exist').click({force:true})
        // tasklocator.tasknamefield().scrollIntoView().type("Test Task")
    })
    And ('User selects date & time', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.taskdescriptionfield().type(this.data.taskdescription_field).clear()
            tasklocator.taskdatetimefield().type(this.data.taskdate_time)
            tasklocator.taskdatetimeokfield().should('be.exist').click({force: true})
        })
    })
    And ('User selects reminder time from dropdown menu field', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.taskreminderfield().should('be.exist').click({force: true})
            tasklocator.tasktimesetreminder().contains(this.data.remminder_minutes).click({force: true})
        })
    })
    And ('User selects assignee from dropdown menu', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.wait(1000)
            tasklocator.taskassignee().click()
            tasklocator.taskassigneeselect().contains(this.data.task_email).click({force: true})
        })
    })
    And ('User selects priority from dropdown menu', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.taskpriority().should('be.exist').click({force: true})
            tasklocator.taskpriorityselect().contains(this.data.task_priority).click({force: true})
        })
    })
    And ('User enter task description in desciption field', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.taskdescriptionfield().type(this.data.taskdescription_field)
        })
    })
    And ('User clicks on save button', () => {
        tasklocator.tasksavebutton().should('be.visible').click({force: true})
    })
    Then ('A Task is created', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.tasksuccessmessage().should('be.exist').contains(this.data.task_success_msg)
        })
    })
    And ('Success message appears', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.new_task).should('be.exist')
        })
    })

//.........................................................................................//
//Check that task in list view on selecting open status filter from dropdown


    Given('User is navigate to Task Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.new_task).should('be.exist')
            cy.wait(2000)
            tasklocator.Alltaskdropdown().should('be.exist').click({force : true})
        })
    })
    When ('User select open from All Task dropdown', () => {
        tasklocator.openstatus().should('be.exist').click({force : true})
    })
    Then ('Only open status task are showing in the table', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            let status = tasklocator.openstatustable().contains(this.data.open_status_priority).should('be.exist')
        })
    })

//.........................................................................................//
//Check that task in list view on selecting open status filter from dropdown


    Given('User is navigated to Task Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.new_task).should('be.exist')
            cy.wait(2000)
        })
    })
    When ('User clicks on any existing Task checkbox', () => {
        tasklocator.tasknamecheckbox().eq(0).within(checkBox => {
            tasklocator.task_checkbox().eq(0).click({force : true})
        })

    })
    And ('User clicks on mark as completed button in the modal', () => {
        tasklocator.markascomplete().click({force : true})
        tasklocator.markascompletebutton().click({force : true})
        
    })
    And ('Task status changed in the list view', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.tasksuccessmessage().contains(this.data.task_success_update).should('be.exist')
            cy.wait(1000)
        })
    })
    Then ('Task status is showing as completed', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            let status = tasklocator.openstatustable().contains(this.data.complete_status_priority).should('be.exist')
        })
    })


//.........................................................................................//
//Check that task in list view on selecting completed status filter from dropdown


    Given('User is navigate on Task Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.new_task).should('be.exist')
            cy.wait(2000)
            tasklocator.Alltaskdropdown().should('be.exist').click({force :true})
        })
    })
    When ('User select complete from All Task dropdown', () => {
        tasklocator.completestatus().should('be.exist').click({force :true})
    })
    Then ('Only complete status task are showing in the table', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            let status = tasklocator.completedstatustable().contains(this.data.completeTask).should('be.exist')
        })
    })

//.........................................................................................//
//Check that task in list view on selecting All Task filter from dropdown


    Given('User is navigates to Task Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.new_task).should('be.exist')
            cy.wait(2000)
            tasklocator.Alltaskdropdown().should('be.exist').click({force :true})
            tasklocator.completestatus().should('be.exist').click({force :true})
            let status = tasklocator.completedstatustable().contains(this.data.completeTask).should('be.exist')
            cy.wait(1000)
            tasklocator.task_search_field().type(this.data.existing_task)
        })
    })
    When ('User select All Task from dropdown', () => {
        tasklocator.Alltaskdropicon().should('be.exist').click({force :true})
        tasklocator.alltaskstatus().should('be.exist').click({force :true})
    })
    Then ('All Tasks contain all types of task status in the table', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            let status = cy.contains(this.data.new_task).should('be.exist')
        })
    })

//...........................................................................................//

//Check that task in list view on selecting overdue statsus filter from dropdown
///////////////////////////////////////////////////////////////////////////////

Given('User is navigating on Task Page', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        cy.contains(this.data.new_task).should('be.exist')
        cy.wait(2000)
        tasklocator.Alltaskdropdown().should('be.exist').click({force :true})
    })
})
When ('User select over due from All Task dropdown', () => {
    tasklocator.overduetaskstatus().should('be.exist').click({force :true})
})
Then ('Only over due status task are showing in the table', () => {
    cy.fixture('testdata').then(function (data) {
        this.data = data;
        let status = cy.contains(this.data.existing_task).should('be.exist')
    })
})

//...........................................................................................//

//Check that in tasks module search functionality is working fine or not
    Given ('User is navigatied on to Task Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.new_task).should('be.exist')
            cy.wait(2000)
        })
    })
    When ('User type any taskname in search box', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.task_search_field().type(this.data.existing_task).type('{enter}')
        })
    })
    And ('User press enter key', () => {
    })
    Then ('Searched task is showing on screen according to desired requirements', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.existing_task).should('be.exist')
        })
    })

//..........................................................................................//

// Check that Task is deleted or not?

    Given ('User navigate to Task Page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            cy.contains(this.data.new_task).should('be.exist')
            cy.wait(2000)
        })
    })
    When ('User clicks on any Task checkbox', () => {
        tasklocator.tasknamecheckbox().eq(0).within(checkBox => {
           tasklocator.task_checkbox().eq(0).click({force : true})
        })
    })
    And ('User clicks on Delete option', () => {
        tasklocator.deletetask().should('be.exist').click({force : true})
    })
    And ('A delete button in the modal appears', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.deletemodal().contains(this.data.task_delete_txt).should('be.exist')
        })
    })
    And ('User selects Are You Sure You Want to delete YES or NO', () => {
        tasklocator.deletemodalbutton().should('be.exist').click({force : true})
    })
    Then ('Toast message appears at top of page', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data;
            tasklocator.tasksuccessmessage().contains(this.data.task_success_delete).should('be.exist')
        })
    })


    //...........................................................................................//