export class TagLocator {

    getNewTag() {
        return cy.get('#selectPosition > .filters-button')

    }
    navigateTags(){
        return cy.get('[href="/app/tags"] > .sidebar-item > .sidebar-item-label')
    }
    tags_breadcrums(){
        return cy.get('.custom-breadcrumb-item')
    }
    tag_image(){
        return cy.get('img')
    }
    newtable_row(){
        return cy.get('[class*=ant-table-row-level]')
    }
    table_coulmn(){
        return cy.get('.ant-checkbox-input')
    }
    tag_name(){
        return cy.get('.ant-tag')
    }
    tag_cancel(){
        return cy.get('.ant-btn')
    }
    tag_selector(){
        return cy.get('.ant-select-selector')
    }
    tag_description_edit(){
        return  cy.get('.ant-empty-description')
    }
    AllTagSelector(){
        return cy.get('input.ant-checkbox-input')
    }
    getTagNameInput() {
        return cy.get('#createTagName', { timeout: 2000 })
    }

    getImageDiv() {
        return cy.get('.modal-win')
    }

    getCheckbox() {
        return cy.get('.ant-table-selection-column')
    }

    SelectedCheckbox(){
        return cy.get('input.ant-checkbox-input')
    }
    getDescriptionInput() {
        return cy.get('textarea')
    }

    getCancelButton() {
        return cy.get('.cancel-tag-modal')
    }

    getCreateDisablesButton() {
        return cy.get('.create-tag')
    }

    getCreateEnablesButton() {
        return cy.get('.create-tag')
    }


    getExistingTagError() {
        return cy.get('.ant-message-notice-content')
    }

    tagselectcheck(){
        return cy.get('[data-row-key="2304"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
    }
    tagtablecoulmn(){
        return cy.get('.ant-table-row-level-0')
    }
    tagtablerows(){
        return cy.get('.ant-table-selection-column')
    }
    tagdeletecancelbtn(){
        return cy.get('.ant-modal-confirm-btns > :nth-child(1)')
    }
    getTaskHeader() {
        return cy.get('.custom-breadcrumb-item')
    }

    getTablecell() {
        return cy.get('.ant-table-cell', { timeout: 5000 })
    }

    getNewTagModalAppear() {
        return cy.get('h1').contains('Add New Tag')
    }
    tagnamevalidation(){
        return cy.get('.ant-form-item-explain > div')
    }
    tagtotalcount(){
        return cy.get('.ant-pagination-total-text')
    }
    closeTagModal() {
        return cy.get('.ant-modal-close-x > .anticon > svg')
    }

    successMessage() {
        return cy.get('.ant-message-notice-content')
    }

    editOption() {
        return cy.get('.record-actions > :nth-child(1) > :nth-child(2)')

    }
    editOptions() {
        return cy.get('.ant-btn-button')
    }

    deleteOption() {
        return cy.get('.record-actions > .ant-btn > :nth-child(2)')
    }

    tableTbody() {
        return cy.get('[class*="ant-table-row ant-table-row-level-"]')
    }

    tagFilterDropdown() {
        return cy.get('#selectPosition > .ant-dropdown-trigger')
    }

    AreYouSureText() {
        return cy.get('.ant-modal-confirm-content')
    }


    editTagModal() {
        return cy.get('h1')
        // cy.get('#rcDialogTitle1')
    }


    editModalCancelButton() {
        return cy.get('#cancel-update-tag')
    }

    editTagNameField() {
        return cy.get('#tagName')
    }

    editDescription() {
        return cy.get('#tagDescription')
        // :nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .tag-modal-form > textarea')
    }

    updateSuccessMessage() {
        return cy.get('.ant-message-custom-content > :nth-child(2)')
    }

    updateButton() {
        return cy.get('#update-tag', { timeout: 2000 })
        // cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary')
    }

    // cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-footer > .ant-btn-primary')

    deleteModal() {
        return cy.get(':nth-child(11) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body', { timeout: 2000 })
    }
    deleteButton() {
        return cy.get('.ant-btn-dangerous')
    }

    deleteCancelButton() {
        return cy.get('.ant-modal-confirm-btns > :nth-child(1) > span')
    }

    deleteSuccessMessage() {
        return cy.get('.ant-message-custom-content > :nth-child(2)')
    }


    AllTagDropDown() {
        return cy.get('#selectPosition > .ant-dropdown-trigger')
    }

    AllTagAllFilter() {
        return cy.get('.ant-dropdown-menu > :nth-child(1)')
    }

    AllTagRecentlyFilter() {
        return cy.get('.ant-dropdown-menu > :nth-child(2)')
    }

    TotalTagCount() {
        return cy.get('.ant-pagination-total-text')
    }

    SearchTag() {
        return cy.get('#search')
    }

    SearchValidation() {
        return cy.get('.ant-form-item-explain > div')
    }

    TagPage2() {
        return cy.get('.ant-pagination-item-2 > a')
    }

    PageDataDropdown() {
        return cy.get('.ant-select-selector')
    }

    PageDataDropdownds() {
        return cy.get('.ant-select-selection-item')
    }

    DropdownInternalVal() {
        return cy.get('.ant-select-item-option-content')
    }

    tableRows() {
        return cy.get(':nth-child(2) > .ant-tag')
    }
    EmptyTableRows(){
        return cy.get('.ant-table-placeholder > .ant-table-cell')
    }
    tagTable(){
        return cy.get('.ant-table-wrapper')
    }

    getTableDescription() {
        return cy.get('.ant-table-row-selected > :nth-child(3) > .description-table')
    }
    getTableHead() {
        return cy.get('.ant-table-thead')
    }

    deleteModalText() {
        return cy.get('.ant-modal-confirm-title')
    }

    DeleteModal() {
        return cy.get('.ant-modal-body')
    }


}// End




export default TagLocator;