/// <reference types="cypress" />

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(el)
    {
        const url= el.prop('href')
        cy.visit(url)
        cy.origin(url, ()=>
        {
          cy.get("div.sub-menu-bar a[href*='about']").click()
        })
    })



    })

})









