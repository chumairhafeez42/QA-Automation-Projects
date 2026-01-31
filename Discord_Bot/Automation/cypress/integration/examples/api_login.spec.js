/// <reference types="cypress" />
describe("Api Testing Automation",()=>{
    var token;
    let discord_url;
    it('POST_Login_Authentication',()=>{
        cy.request({
            method : 'POST',
            url : 'http://192.168.3.37/api/v1/auth/',
            body : {
                "email": "umair.hafeez@fiveriverstech.com",
                "password": "@@Umair4242@@"
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
        })
    })
    it('POST_Discord Dynamic Url',()=>{
        cy.request({
            method : 'POST',
            url : '192.168.3.37/api/v1/dynamicUrl/',
            headers: {
                'content-type' : 'application/json',
                'Authorization': 'jwt '+ token
            },
            body : {
                "redirect_url":"192.168.3.166"
            },
            
        }).then((response) =>{
            expect(response.status).to.be.eq(200);
            discord_url = response.body.data
            Cypress.env(discord_url)      
        })
    })
    it('Request to Dynamic Url',()=>{
        cy.log(discord_url)
        cy.visit(discord_url)
        cy.wait(5000)
        cy.get('.input-1CjGeR > .inputWrapper-31_8H8 > .inputDefault-_djjkz').type("umair.hafeez@fiveriverstech.com")
        cy.get(".block-egJnc0 > :nth-child(2) > .inputWrapper-31_8H8 > .inputDefault-_djjkz").type("@@Umair4242@@")
        cy.get('.block-egJnc0 > .marginBottom8-AtZOdT').click()
        cy.wait(5000)
        cy.get('.lookFilled-1Gx00P').click()
    })
})
