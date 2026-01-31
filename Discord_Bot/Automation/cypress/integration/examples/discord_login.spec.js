/// <reference types="cypress" />

describe("Login FRT BOT",()=>{
    it('Discord BOT Website',() =>{
        cy.visit('http://192.168.3.166/')
        cy.wait(1000)
        cy.get(':nth-child(1) > .btn')
            .invoke('attr', 'href')
            .and('contain', 'discord')
            .then(href => {
            url = href;
            cy.log(url)
        })
    })
})