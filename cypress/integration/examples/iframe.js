/// <reference types="cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#courses-iframe')
        cy.iframe().find("a[href*='1']").as('btn').click({ multiple: true })
        cy.wait(1000); 
        cy.get("a[href*='1']").as('link')
        cy.get('link').click({force: true})
        cy.get('link').should('have.class', 'active')
        
        //cy.get('@btn').should('have.class', 'active')
        cy.iframe().find('.pricing-header').should('have.length',2)
        


    })

})









