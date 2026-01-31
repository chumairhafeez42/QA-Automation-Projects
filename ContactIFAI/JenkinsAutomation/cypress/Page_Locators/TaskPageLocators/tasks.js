export class TaskLocator {
    navigatetask() {
        return cy.get('[href="/app/tasks"] > .sidebar-item > .sidebar-item-label')
    }
    
    taskbreadcrums(){
        return cy.get('.custom-breadcrumb-item')    
    }

    listviewtask() {
        return cy.get('.ant-tabs-tab-active')
    }

    newtaskbutton() {
        return cy.get('.new-task-button')
    }

    modalform() {
        return cy.get('h1')
    }

    tasknamefield() {
        return cy.get('#summary')
    }

    taskcontactfield() {
        return cy.get('#selectPositionAddContacts > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
    }

    selecttaskcontact() {
        return cy.get('.ant-select-item-option-active > .ant-select-item-option-content')
    }

    taskdatetime() {
        return cy.get(".ant-picker-cell-today")
    }

    taskdatetimefield() {
        return cy.get('.ant-picker-input')
    }

    taskdatetimeokfield() {
        return cy.get('.ant-picker-ok > .ant-btn')
    }

    taskreminderfield() {
        return cy.get('#selectPositionRemind > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item')
    }
    tasktimesetreminder(){
        return cy.get('.ant-select-item-option-content')
    }
    taskdescriptionfield() {
        return cy.get('#description')
    }
    taskassignee() {
        return cy.get('#selectPositionAssignee > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content')
    }
    taskassigneeselect() {
        return cy.get('.ant-select-item-option-content')
    }
    taskpriority(){
        return cy.get('#selectPositionPriority > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
    }
    taskpriorityselect() {
        return cy.get('.ant-select-item-option-content')
    }
    tasksavebutton(){
        return cy.contains('Save')
    }
    tasksuccessmessage() {
        return cy.get('.ant-message-notice-content')
    }
    taskname(){
        return cy.get('[data-row-key="5073"] > :nth-child(2) > [style="cursor: pointer;"] > .task-complete-name')
    }

    tasknamecheckbox() {
        return cy.get('.ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox')
    }
    deletetask(){
        return cy.contains('Delete')
    }
    deletemodal (){
        return cy.get('.ant-modal-confirm-title')
    }

    deletemodalbutton(){
        return cy.get('.ant-btn-dangerous')
    }

    Alltaskdropdown() {
        return cy.get('#selectPosition > .ant-dropdown-trigger')
    }

    Alltaskdropicon(){
        return cy.get('#selectPosition > .ant-dropdown-trigger')
    }
    
    openstatus() {
        return cy.contains('Open')
    }

    openstatustable(){
        return cy.get('.ant-table-row > :nth-child(7)')
    }

    markascomplete () {
        return cy.contains('Mark as complete')
    }
    markascompletebutton(){
        return cy.get('.ant-btn-success')
    }
    completestatus() {
        return cy.contains('Completed')
    }
    completedstatustable(){
        return cy.get('.ant-table-row > :nth-child(7)')
    }
    alltaskstatus() {
        return cy.contains('All Tasks')
    }
    overduetaskstatus() {
        return cy.contains('Overdue')
    }
}
export default TaskLocator;