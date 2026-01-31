export class SignInPage{

    getemailtext(){
        return cy.contains('Email or Phone Number')
    }
    
    getpasstext(){
        return cy.contains('Password')
    }

    getusername(){
        return cy.get('.input-1CjGeR > .inputWrapper-31_8H8 > .inputDefault-_djjkz')
    }

    getpassword(){
        return cy.get('.block-egJnc0 > :nth-child(2) > .inputWrapper-31_8H8 > .inputDefault-_djjkz')
    }

    getloginbutton(){
        return cy.contains('Login')
    }

    cancel_button(){
        return cy.contains('Cancel')
    }
    cancel_auth_button(){
        return  cy.get('.lookLink-9FtZy-')
    }
    after_cancel_btn(){
        return cy.get('#root > header > nav > div > div > ul.ml-auto.right_navbar.navbar-nav > li:nth-child(1) > a').should('have.text', 'Login')
    }
    getauthbutton(){
        return  cy.contains('Authorize');
    }
    auth_button(){
        return cy.get('#app-mount > div.app-1q1i1E > div > div.leftSplit-1qOwnR > div > div > div.footer-3ZalXG > button.button-38aScr.lookFilled-1Gx00P.colorBrand-3pXr91.sizeMedium-1AC_Sl.grow-q77ONN')
    }
    user_info(){
        return cy.get('.user_info')
    }
    menu_dropdown(){
        return cy.get('.fa-chevron-down')
    }
    myserverbutton(){
        return cy.get('a.dropdown-item')
    }
    checkmanagebutton(){
        return cy.get('.server_buttons_group > :nth-child(1)')
    }
    checkbackbutton(){
        return cy.contains('Back to Server Selection')
    }
    dropdownbutton(){
        return cy.get('.user_info > .fa')
    }
    logoutbutton(){
        return cy.get('button.dropdown-item')
    }
    captchatext(){
        return cy.get('.colorHeaderPrimary-26Jzh-').should('have.text', 'Welcome Back')
    }
    password_validation(){
       return cy.get(':nth-child(2) > .colorStandard-2KCXvj')
    }

    login_block(){
        return cy.get('.block-egJnc0')
    }
}
export default SignInPage;