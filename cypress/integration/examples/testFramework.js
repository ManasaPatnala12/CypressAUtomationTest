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
       

       const homePageObj= new homePage()
       const productPageObj=new productPage()
       

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        
       // homePage.getGender().should('be.disabled')
       homePageObj.getEditBox().type(this.data.name)
        cy.wait(500)
        //cy.pause()
        // cy.get(':nth-child(4) > .ng-untouched').should('have.text',this.data.name)

        homePageObj.getTwoWayEditBox().should('have.value', this.data.name)
        // cy.get('input[name="name"]:nth-child(2)').should('have.attr','maxlength','2')
        /*cy.get('input[name="name"]:nth-child(2)').type('Cat').then(function(str){
           // const actual=cy.str.text()
            cy.get('input[name="name"]:nth-child(1)').should('have.text',cy.str.text())
    
        })
        
        cy.get("input[name='email']").type("cat@kitty.com")
        cy.get('#exampleInputPassword1').type('#exampleInputPassword1')
        cy.get('#exampleCheck1').check()
        //cy.get('#exampleFormControlSelect1').select('Female')*/
       homePageObj.getGender().select(this.data.gender)
       //homePageObj.getGender().should('be.disabled')

       homePageObj.getShopLink().click()

        this.data.productName.forEach(function(element)  {
            cy.selectProduct(element)
        });
        
       productPageObj.getCheckoutLink().click()
      //cy.selectProduct('Nokia Edge')
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        //cy.wait(500)

       productPageObj.getPriceTableColumn()
   // validating the sum of prices with the total price
   let sum=0
      cy.get('.col-sm-12 tr td:nth-child(4) > strong').each(($el, index, $list) => {

        const num=Number($el.text())
        sum= num+sum
      }).then(() => {
        // After the loop completes, assert the final sum
        cy.get('h3 > strong').should('have.text', sum.toString()); // Adjust `have.text` based on your HTML structure
      })

    })
      Cypress.config('defaultCommandTimeout', 8000)
    //  productPageObj.getCheckout_CheckoutPage().click()
      cy.get('#country').type('India')
      cy.get('.suggestions > ul > li > a').click()
      cy.get('#checkbox2').check({force: true} )
      cy.get("input[value='Purchase']").click()
     // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element){
        const text= element.text()
        expect(text.includes('Success! Thank you! Your order will be delivered in next few weeks :-)')).to.be.true

     })

})













