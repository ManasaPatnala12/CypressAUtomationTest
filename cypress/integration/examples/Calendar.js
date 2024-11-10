/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';


describe('My First Test Suite', function () {
  

    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);

        const date = "15"
        const month = "6"
        const year = "2026"
        const expectedList = [month, date, year];
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
       cy.wait(5000)
        cy.get(".react-date-picker__inputGroup").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.contains("button", year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(month) - 1).click();
        cy.contains("abbr", date).click();
        // cy.contains('abbr',date).click()

        //Assertion

        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
            //this loop retries the promise not the actual list element, so we need to wrap n resolve the promise
            //pulling attributes value, use invoke 
            cy.wrap($el).invoke('val').should('eq',expectedList[index])


        })

    })


})









