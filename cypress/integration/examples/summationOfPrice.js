/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import homePage from '../pageObjects/homePage';
import productPage from '../pageObjects/productPage';


describe('My First Test Suite', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data

        })
    })


    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);


        const homePageObj = new homePage()
        const productPageObj = new productPage()


        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        // homePage.getGender().should('be.disabled')
        homePageObj.getEditBox().type(this.data.name)
        cy.wait(500)


        homePageObj.getTwoWayEditBox().should('have.value', this.data.name)

        homePageObj.getGender().select(this.data.gender)


        homePageObj.getShopLink().click()

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });

      //  productPageObj.getCheckoutLink().click()

        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()


        productPageObj.getPriceTableColumn()
        // validating the sum of prices with the total price
        let sum = 0
        cy.get('tr td:nth-child(4)  strong').each(($el, index, $list) => {
             const text=$el.text()
           var result= text.split(" ")
           result =result[1].trim()
           sum=Number(sum)+Number(result)
           

        }).then(function(){
            cy.log(sum)

        })

        cy.get('h3 strong').then(function(element){
            const text=element.text()
            var res=text.split(" ")
            res=res[1].trim()
            //cy.log(Number(res))
            expect(Number(res)).to.equal(sum)

        })
    

        })

    })
















