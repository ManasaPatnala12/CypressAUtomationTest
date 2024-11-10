/// <reference types="cypress" />

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // cy.get(".mouse-hover-content").invoke('show')
       // cy.contains('Top').click()
       cy.contains('Top').click({force:true})
        cy.url().should('include','top')



    })

})









