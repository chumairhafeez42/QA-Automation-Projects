export class SignOutPage{

    getusername(){
        return cy.get('.input-1CjGeR > .inputWrapper-31_8H8 > .inputDefault-_djjkz')
    }

    getpassword(){
        return cy.get('.block-egJnc0 > :nth-child(2) > .inputWrapper-31_8H8 > .inputDefault-_djjkz')
    }

    getloginbutton(){
        return cy.get('.block-egJnc0 > .marginBottom8-AtZOdT').should('have.text', 'Login');
    }
    auth_button(){
        return  cy.get('.lookLink-9FtZy-').should('have.text', 'Cancel');
    }
    getauthbutton(){
        return  cy.get('.lookFilled-1Gx00P').should('have.text', 'Authorize');
    }
    menu_dropdown(){
        return cy.get('.fa')
    }
    myserverbutton(){
        return cy.get('a.dropdown-item').should('have.text','My Server')
    }
    checkmanagebutton(){
        return cy.get('.server_buttons_group > :nth-child(1)').should('have.text','Manage')
    }
    checkbackbutton(){
        return cy.get('.back_link').should('have.text',' Back to Server Selection')
    }
    dropdownbutton(){
        return cy.get('.user_info > .fa')
    }
    logoutbutton(){
        return cy.get('button.dropdown-item').should('have.text' , 'Logout')
    }
    captchatext(){
        return cy.get('.colorHeaderPrimary-26Jzh-').should('have.text', 'Welcome Back')
    }
    password_validation(){
       return cy.get(':nth-child(2) > .colorStandard-2KCXvj')
    }
}
export default SignOutPage;