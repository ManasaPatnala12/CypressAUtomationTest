/// <reference types="cypress" /> 
import 'cypress-iframe'

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes('Python')) {
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText=price.text()
                    expect(priceText).to.equal('25')
                }
            )
            }
        })


    })

})









