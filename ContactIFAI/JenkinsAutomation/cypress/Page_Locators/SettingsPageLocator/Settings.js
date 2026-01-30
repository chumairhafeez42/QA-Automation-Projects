
class SettingPageLocator {

    getSettingIcon() {
        return cy.get('.sidebar-item-label').each(($el, index, $list) => {
            if ($el.text() == 'Settings') {
                cy.wrap($el).click()
            }
        })
    }
    getEditTextLocator() {
        return cy.get('.ant-col-6 > a')

    }
    getProfileUpdateButton() {
        return cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .update-btn')
    }
    getSliderMinimize() {
        return cy.get('.sidebar-logo > .ant-btn > .anticon > svg')
    }
    getFirstName() {
        return cy.get('.feild-container > .ant-form > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #first_name')
    }
    getFirstNameEditForm() {
        return cy.get('#first_name').eq(0)
    }
    getLastNameEditForm() {
        return cy.get('#last_name').eq(0)
    }
    getLastName() {
        return cy.get('.feild-container > .ant-form > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #last_name')
    }
    getEmail() {
        return cy.get('#email')
    }
    getSuccessMessageupdateProfile() {
        return cy.get('.ant-message > span')
    }
    getChangePasswordLink() {
        return cy.get('.credentials > :nth-child(2) > a')
    }
    changepaswdmodal(){
        return cy.get('#rcDialogTitle0')
    }
    closechangepaswdmodal(){
        return cy.get('.ant-modal-close-x')
    }
    oldpasswrdvalidationmsg(){
        return cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-explain > div')
    }
    newpaswrdvalidationmsg(){
        return cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-explain > div')
    }
    confirmnewpaswrdmsg(){
        return cy.get('.ant-form-item-has-feedback > .ant-form-item-control > .ant-form-item-explain > div')
    }
    getChangePasswordButton() {
        return cy.get('.ant-btn-primary')
    }
    getOldPasswordTextField() {
        return cy.get("#old_password")
    }
    getNewPasswordTextField() {
        return cy.get('#password')
    }
    passwrdsuccessmsg(){
        return cy.get('.ant-message-notice-content')
    }
    getConfirmNewPasswordTextField() {
        return cy.get('#password_confirm')
    }
    getXLnkTextField() {
        return cy.get("#xlinkKey")
    }
    xlinkemptyfieldvalidation(){
        return cy.get('.ant-form-item-explain > div')
    }
    xlinksuccessmsg(){
        return cy.get('.ant-message-notice-content')
    }
    getupdateButtonXLnk() {
        return cy.get('.update-btn')
    }
    getmanagermodeltxt(){
        return cy.get('#rcDialogTitle0')
    }
    getManagerTab() {
        return cy.get('#rc-tabs-0-tab-3').each(($el, index, $list) => {
            if ($el.text() == "Managers") {
                cy.wrap($el).click()
            }
        })
    }
    getManagerAdd() {
        return cy.get('.total-count > .ant-btn > :nth-child(2)')
    }
    getSaveButton() {
        return cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
    }
    getManagerModalForm() {
        return cy.contains('Add New Manager')
    }
    getManagerCross() {
        return cy.get('.ant-modal-close-x')
    }
    getFirstNameClass() {
        return cy.get(':nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-explain > div')
    }
    getFirstNameError() {
        return cy.get('.ant-form-item-explain > div')
    }
    getLastNameError() {
        return cy.get('.ant-form-item-explain > div')
    }
    getEMAILFORMATError() {
        return cy.get('.ant-form-item-explain > div')
    }

    getLastNameClass() {
        return cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-explain > div')
    }
    getEmailAddressClass() {
        return cy.get(':nth-child(2) > .ant-col-24 > .ant-row > .ant-form-item-control > .ant-form-item-explain > div')
    }
    getPermissionsAndRoles() {
        return cy.get('.ant-col-17 > .dashboard > .ant-tabs > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(2)')
    }
    checkboxenable(){
        return cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    }
    getProfileButton() {
        return cy.get('.ant-col-17 > .dashboard > .ant-tabs > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(1)')
    }
    getContactDetail() {
        return cy.get('.show-main-contact')
    }
    getContactTab() {
        return cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-header')
    }

    getCampaignTab() {
        return cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-header > .anticon > svg')
    }
    getTaskTab() {
        return cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-header > .anticon > svg')
    }
    getNotificationTab() {
        return cy.get(':nth-child(4) > .ant-collapse-item > .ant-collapse-header')
    }
    getCheckboxCanAddToWhiteList() {
        return cy.get('.ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    }
    getCheckboxCanPurge() {
        return cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input')
    }
    getcanedit(){
        return cy.get('.ant-collapse-content-box > :nth-child(1) > :nth-child(2)')
    }
    checkCheckboxCanAddToWhiteList(){
        // return cy.get('.ant-checkbox-group > .ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input')
        return cy.get('.ant-checkbox-group > :nth-child(1) > :nth-child(2)')
    }
    getCanEditCheckbox(){
        return cy.get('.ant-collapse-content-box > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    }
    getCheckboxCanDelete(){
        return cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input')
    }
    checkCheckboxCanDelete(){
        return cy.get('.ant-checkbox-group > :nth-child(3) > :nth-child(2)')
    }
    getCheckboxCanEdit() {
        return cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > .ant-checkbox-group > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    }
    getCheckboxCanAddTask() {
        return cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input')
    }
    getCheckboxCanIgonre() {
        return cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input')
    }
    checkCheckboxCanIgnore(){
        return cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input')
    }
    getcloseAddnewManager(){
        return cy.get('.ant-modal-close-x > .anticon > svg > path')
    }
    getCheckboxCanEdit() {
        return cy.get(':nth-child(3) > .ant-checkbox > .ant-checkbox-input')
    }
    getCheckboxCanConfigure() {
        return cy.get(':nth-child(2) > .ant-checkbox > .ant-checkbox-input')
    }
    getUpdatePermissionButton() {
        return cy.get('#rc-tabs-1-panel-2 > :nth-child(1) > .ant-btn')
    }
    getPermissionSuccessMessage() {
        return cy.get('.ant-message > span')
    }
    getUpdateSuccessMessage() {
        return cy.get('.ant-message-notice-content')
    }
    getdeletepopupmanager(){
        return cy.get('.ant-modal-confirm-content')
    }
    getCanDisableCampaign() {
        return cy.get(':nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    }
    getCheckboxTaskCanEdit(){
        return cy.get('.ant-checkbox-wrapper-checked > .ant-checkbox > .ant-checkbox-input')
    }
    checkCheckboxTaskCanEdit(){
        return cy.get('.ant-collapse-content-box > :nth-child(1) > .ant-checkbox > .ant-checkbox-input')
    }
    getManagerEditButton() {
        return cy.get('.edit-delete > :nth-child(2)')
    }
    getUpdateButton() {
        return cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
    }
    getManagerDelete() {
        return cy.get('.edit-delete > :nth-child(3)')
    }
    getDeleteMessage() {
        return cy.get('.ant-message > span')
    }
    getDeleteManagerButton() {
        return cy.get('.ant-btn-dangerous')
    }
    AddManagerBtn(){
        return cy.get('.total-count > .ant-btn')
    }
    AddManagerFirstField(){
        return cy.get('.feild-container > .ant-form > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #first_name')
    }
    AddManagerLastField(){
        return cy.get('.feild-container > .ant-form > :nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #last_name')
    }
    AddManagerEmailField(){
        return cy.get('#email')
    }
    createManagerBtn(){
        return cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn')
    }
    Managerdetailuser(){
        return cy.get('.show-contact')
    }
}
export default SettingPageLocator;