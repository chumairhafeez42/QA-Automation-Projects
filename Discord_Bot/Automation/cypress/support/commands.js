let token, discord_url ,name , server_id;

Cypress.Commands.add("clickrecaptcha", () => {
  cy.window().then(win => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById("recaptcha-token")
      .click();
  });
});

Cypress.Commands.add("recaptcha", () => {
  cy.get('iframe')
    .first()
    .its('0.contentDocument.body')
    .should('not.be.undefined')
    .and('not.be.empty')
    .then(cy.wrap)
    .find('#recaptcha-anchor')
    .should('be.visible')
    .click();
  cy.log("User isn't Logged In")
})

Cypress.Commands.add("Login", () => {
  cy.request({
    method : 'POST',
    url : Cypress.env('Login_by_email'),
    body : {
        "email": Cypress.env('email'),
        "password": Cypress.env('password')
    },
    headers: {
        'content-type' : 'application/json'
    }
  }).then((response) =>{
      expect(response.status).to.be.eq(200);
      token = response.body.token
      var name = response.body.user.name
      var server_id = response.body.user.id

      cy.log(token)
      cy.log("Name: ",name)
      cy.log("Sever_ID: ",server_id)
      cy.request({
        method : 'POST',
        url : Cypress.env('discord_url_api'),
        headers: {
            'content-type' : 'application/json',
            'Authorization': 'jwt '+ token
        },
        body : {
            "redirect_url":Cypress.env('bot_domain')
        },
        
      }).then((response) =>{
        expect(response.status).to.be.eq(200);
        discord_url = response.body.data
        Cypress.env(discord_url)   
        cy.log(discord_url)
        cy.visit(discord_url ,{timeout: 9000})
        cy.contains('Email or Phone Number').should('have.text', 'Email or Phone Number')
        cy.contains('Password').should('have.text', 'Password')
        cy.get('.input-1CjGeR > .inputWrapper-31_8H8 > .inputDefault-_djjkz').type(Cypress.env('email'))
        cy.get('.block-egJnc0 > :nth-child(2) > .inputWrapper-31_8H8 > .inputDefault-_djjkz').type(Cypress.env('password'))
        cy.contains('Login').click().should('have.text', 'Login')
        cy.contains('Authorize' ,{timeout: 9000}).click()
        cy.get('.dropdown')
        cy.get('.user_info').click()
        cy.contains('My Server', {timeout: 5000}).click()
        cy.contains('Please Select a Server' , {timeout: 5000})
        cy.get('.servers_list > :nth-child(1)',{timeout: 5000})
        cy.get(':nth-child(1) > .server_buttons_group > .manage_btn').click()
        cy.url("https:192.168.3.166/servers")
      })
  })
})