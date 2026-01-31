export class SignupLocator {
    username(){
        return cy.get('.drop-down > .ant-btn > .anticon > svg > path')
    }
    navigatesignup() {
        return cy.get('[href="/app"] > .sidebar-item > .sidebar-item-label')
    }
    signup_btn(){
        return cy.get('.for-sign-up > a')
    }
    signup_key_input(){
        return cy.get('.ant-input-password')
    }
    signup_key_btn(){
        return cy.get('.ant-btn')
    }
    validation_email_adress(){
        return cy.get(':nth-child(1) > .ant-col > .ant-form-item-explain > div')
    }
    validation_firstname(){
        return cy.get(':nth-child(2) > .ant-col > .ant-form-item-explain > div')
    }
    validation_lastname(){
        return cy.get(':nth-child(3) > .ant-col > .ant-form-item-explain > div')
    }
    validation_password(){
        return cy.get(':nth-child(4) > .ant-col > .ant-form-item-explain > div')
    }
    validation_password_confirm(){
        return cy.get(':nth-child(5) > .ant-col > .ant-form-item-explain > div')
        
    }
    email_input_field(){
        return cy.get('#email')
    }
    invalid_email_validation(){
        return cy.get('.ant-form-item-explain > div')
    }
    inputfieldfirstname(){
        return cy.get('#first_name')
    }
    inputfieldlastname(){
        return cy.get('#last_name')
    }
    inputfieldpassword(){
        return cy.get('#password')
    }
    inputfieldpasswordconfirm(){
        return cy.get('#password_confirm')
    }
    invalid_paswrd_validation(){
        return cy.get('.ant-form-item-explain > div')
    }
    invalid_paswrd_cnfrm_validation(){
        return cy.get(':nth-child(5) > .ant-col > .ant-form-item-explain > div')
    }
    invalid_recipent_email(){
        return cy.get('.ant-select-selector')
    }
    deleteaccountbtn(){
        return cy.get(':nth-child(4) > .ant-col-20 > a')
    }
    subject_copy(){
        return cy.get('.subject-copy')
    }
    AndRadioButton(){
        return cy.get('.ant-radio-group > :nth-child(1) > :nth-child(2)')
    }
    AndRadioButtonChecked(){
        return cy.get('.ant-radio-wrapper-checked > .ant-radio > .ant-radio-input')
    }
    OrradioButton(){
        return cy.get('.ant-radio-group > :nth-child(2) > :nth-child(2)')
    }
    OrradioButtonChecked(){
        return cy.get('.ant-radio-wrapper-checked > .ant-radio > .ant-radio-input')
    }
    recipent_count(){
        return cy.get('#recipients_count')
    }
    campaign_confiure_btn(){
        return cy.get('.ant-btn')
    }
    new_block_domain(){
        return cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-tag')
    }
    new_block_domain_first(){
        return cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-tag').first()
    }
    new_mute_domain(){
        return cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-tag')
    }
    new_mute_domain_first(){
        return cy.get(':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .site-tag-plus')
    }
    new_block_domain_input(){
        return cy.get('.ant-input')
    }
    new_mute_domain_input(){
        return cy.get('.ant-input')
    }
    domain_validation(){
        return cy.get('.ant-message-notice-content')
    }
    exist_block_domain_validation(){
        return cy.get('.ant-form > :nth-child(2)')
    }
    exist_mute_domain_validation(){
        return cy.get('.ant-form > :nth-child(5)')
    }
    block_domain_validation(){
        return cy.get('.ant-form > :nth-child(2)')
    }
    mute_domain_validation(){
        return cy.get('.ant-form > :nth-child(5)')
    }
    edit_Tag_close(){
        return cy.get('.edit-tag > .anticon > svg')
    }
}
export default SignupLocator;