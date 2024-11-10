/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';


describe('My First Test Suite', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data

        })
    })


    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);


        


        cy.visit('https://www.amazon.co.uk/')
       cy.get('#sp-cc', { timeout: 0 })
            .then(($popup) => {
                if ($popup.length) {
                    cy.wrap($popup).find('#sp-cc-rejectall-link').click();
                }
            });
        //cy.get('#sp-cc-rejectall-link').click()
        cy.get('a[href="/stores/page/5D96C4AA-F0F4-415F-90A4-B202C6B03A17?field-lbr_brands_browse-bin=AmazonBasics&ref_=nav_cs_amazonbasics"]').click()

        cy.get('.Navigation__more__jp3zs > button').each(($el, list) => {
            cy.contains('Bedroom').click()

        })
        cy.get('.SearchInput__input__IGt2m').type('fitted sheet').type('{enter}')
        cy.get('.OptionDropdown__dropdown-button__dEvJX').click()
        cy.contains('Avg. Customer Review').click()
       // cy.get('ProductGridItem__item__IkSDt')
       cy.get('.ProductGridItem__addToCartBtn__A_kTb .Button__button__b_aG7 .Button__innerWrapperWithoutIcon__ilfCe').then(($products) => {
     //   cy.get('.ProductGridItem__itemInfo__wl2YN').then(($products) => {
            cy.wait(5000)
            cy.scrollTo('bottom')
            cy.get('[data-testid="grid-more-button"] > .Button__button__b_aG7').click()

            const productCount = $products.length; // Get the length directly
            cy.log('Total products:', productCount);
        });

      //  cy.get('a[title*="Amazon Basics Classic Notebook"]')





    })

})
















