export class ContactsLocator {

    firstName_editbox(){
        return cy.get('.first_name')
    }
    
    Contacts_Sidebar_Navigation()
    {
        return cy.get('.anticon-contacts')
    }
    
    contacts_Page_Header()
    {
        return cy.get('.custom-breadcrumb-item')
    }
    
    lastName_editbox(){
        return cy.get('.last_name')
    }
    contact_username(){
        return cy.get('.user-complete-name')
    }
    contact_username_first(){
        return cy.get('.user-complete-name').first()
    }
    contact_detail_email(){
        return cy.get(':nth-child(2) > .value')
    }
    communication_tab(){
        return cy.get('div >.header > span')
    }
    contact_profile_history(){
        return cy.get('div >.header > span')
    }
    
    Edit_boxTick()
    {
        return cy.get('.anticon-check')
    }
    
    Edit_boxCross()
    {
        return cy.get('.anticon-close')
    }
    
    company_editbox(){
        return cy.get('#company')
    }
    
    contact_Detail_GreaterThenSymbol()
    {
        return cy.get('.anticon-right')
    }
    close_modal(){
        return cy.get('.modal-win>div>div>img')
    }
    
    
    three_DotButton()
    {
        return cy.get('.more-options')
    }
    check_box(){
        return cy.get('.ant-checkbox-input')
    }
    three_Dot_Ul(){
        return cy.get('.ant-dropdown-menu-root')
    }
    
    three_Dot_Ul_Li()
    {
        return cy.get('.ant-dropdown-menu-item')
    }
    
    New_ContactButton()
    {
        return cy.get('.anticon-user-add')
    }
    
    Filter_Button()
    {
        return cy.get('.ant-btn-default')
    }
    
    search_Input()
    {
        return cy.get('#search')
    }
    
    All_Contacts_Filter_Parent(){
        return cy.get('#selectPosition')
    }
    All_Contacts_Dropdownlist()
    {
        return cy.get('.filter-dropdowns')
    }
    
    All_Contacts_Dropdownlist_Options()
    {
        return cy.get('.ant-dropdown-menu-item-only-child')
    }
    
    Table_Length_contacts_span_arrow()
    {
        return cy.get('.ant-select-selector')
    }
    
    Table_Length_Number_contacts()
    {
        return cy.get('.ant-select-item-option-content')
    }
    
    pagination_Ul()
    {
        return cy.get('.ant-table-pagination-right')
    }
    pagination_Ul_right_li()
    {
        return cy.get('.ant-pagination-item')
    }
    
    second_pagination_button(){
        return cy.get('.ant-pagination-item-2')
    }
    next_Pagination(){
        return cy.get('.ant-pagination-next')
    }
    table_body()
    {
        return cy.get('.ant-table-tbody')
    }
    table_rows(){
        return cy.get('.ant-table-row-level-0')
    }
    complete_Name(){
        return cy.get('.user-complete-name')
    }
    table_cell(){
        return cy.get('.ant-table-cell')
    }
    mute_contact(){
        return cy.get('.user-complete-name > .anticon > svg')
    }
    contact_detail_side(){
        return cy.get('.ant-card-body')
    }
    
    contact_Detail_Tabs(){
        return cy.get('.ant-tabs-tab')
    }
    
    contact_Task_heading_Div(){
        return cy.get('.contact-tasks-wrapper>.header>span')
    }
    
    
    contact_campaign_heading_Div(){
        return cy.get('.header > :nth-child(1)')
    }
    
    contact_communication_Span_Text()
    {
        return cy.get('[aria-labelledby=rc-tabs-0-tab-3]')
    }
    contact_options(){
        return cy.get('.record-actions')
    }
    
    contact_Profile_History_Text(){
        return cy.get('#rc-tabs-0-panel-4')
    }
    contact_selector(){
        return cy.get('.ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
    }
    
    reset_Button()
    {
        return cy.get('#selectPosition> .ant-btn-button')
    }
    afet_contact_selection_Option(){
       return cy.get('.record-actions')
    }
    ignore_modal(){
        return cy.get('.ant-modal-body')
    }
    
    delete_contact()
    {
        return cy.get('.ant-btn-button')
    }
    temprary_delete()
    {
        return cy.get('.ant-btn-default')
    }
    delete_modal()
    {
        return cy.get('.import-export')
    }
    
    
    
    add_to_ignore_modal(){
        return cy.get('.ant-btn-dangerous')
    }
    
    ignore_modal_button_div(){
        return cy.get('.ant-modal-confirm-btns >.ant-btn')
    }
    successMessage() {
        return cy.get('.ant-message-notice-content')
    }
    add_to_Whitelist_Options_button(){
        return cy.get('.ant-modal-confirm-btns')
    }
    
    add_to_white_list(){
        return cy.get('.ant-btn-primary')
    }
    New_Contact_Button(){
        return cy.get('.filters-button')
    }
    
    contact_modal_form(){
        return cy.get('.modal-win')
    }
    contact_First_Name(){
        return cy.get('#firstName')
    }
    contact_Last_Name(){
        return cy.get('#lastName')
    }
    contact_Company_Name(){
        return cy.get('#companyName')
    }
    contact_job_Title(){
        return cy.get('#jobTitle')
    }
    contact_Email_Address(){
        return cy.get('#emailAddress')
    }
    contact_PhoneNumber(){
        return cy.get('#phoneNumber')
    }
    contact_Mailing_Address(){
        return cy.get('#mailingAddress')
    }
    contact_Secondary_Mailing_Address(){
        return cy.get('#secondaryMailingAddress')
    }
    contact_Comments()
    {
        return cy.get('#comments')
    }
    add_contact_Tags()
    {
        return cy.get('.ant-select-selector')
    }
    add_contact_tag_Selection()
    {
        return cy.get('.ant-select-item-option-content')
    }
    
    contact_save_button(){
        return cy.get('.save-contact')
    }
    
    }
    export default ContactsLocator