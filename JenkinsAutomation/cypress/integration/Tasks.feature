Feature: Task
    Background: User moves to Task screen
        When User is navigating to Task Page

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: How to create a Task in list View
        Given User is on Task Page
        And User select TaskPage type list or calendar
        When User clicks on New Task
        And Task modal form appears
        And User enters Taskname in Add Title field
        And User selects contacts from dropdown menu
        And User can select Multiples contacts associated with tasks
        And User selects date & time
        And User selects reminder time from dropdown menu field
        And User selects assignee from dropdown menu
        And User selects priority from dropdown menu
        And User enter task description in desciption field
        And User clicks on save button
        Then A Task is created
        And Success message appears

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that task in list view on selecting open status filter from dropdown
        Given User is navigate to Task Page
        When User select open from All Task dropdown
        Then Only open status task are showing in the table

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that Task status change by clicking on Mark as complete
        Given User is navigated to Task Page
        When User clicks on any existing Task checkbox
        And User clicks on mark as completed button in the modal
        And Task status changed in the list view
        Then Task status is showing as completed

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that task in list view on selecting completed status filter from dropdown
        Given User is navigate on Task Page
        When User select complete from All Task dropdown
        Then Only complete status task are showing in the table

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that task in list view on selecting overdue statsus filter from dropdown
        Given User is navigating on Task Page
        When User select over due from All Task dropdown
        Then Only over due status task are showing in the table

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that task in list view on selecting All Task filter from dropdown
        Given User is navigates to Task Page
        When User select All Task from dropdown
        Then All Tasks contain all types of task status in the table

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that in tasks module search functionality is working fine or not
        Given User is navigatied on to Task Page
        When User type any taskname in search box
        And User press enter key
        Then Searched task is showing on screen according to desired requirements

    @statusTabFail @environmeentCleanUp @sanity
    Scenario: Check that Task is deleted or not
        Given User navigate to Task Page
        When User clicks on any Task checkbox
        And User clicks on Delete option
        And A delete button in the modal appears
        And User selects Are You Sure You Want to delete YES or NO
        Then Toast message appears at top of page

