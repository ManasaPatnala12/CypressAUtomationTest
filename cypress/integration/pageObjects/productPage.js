class productPage {

    getCheckoutLink() {
        return cy.get('.nav-link.btn.btn-primary')
    }

    getPriceTableColumn(){
        return cy.get('.col-sm-12 tr td:nth-child(3)')
    }

    getCheckout_CheckoutPage(){
        return cy.contains('Checkout')
        
    }
    getCountryLocation(){
        return cy.get('#country')
        
    }
    getCountryLocation(){
        return cy.get('#checkbox2')
        
    }
    getCountryLocation(){
        return cy.get('.btn-success')
        
    }


    
    

}


export default productPage