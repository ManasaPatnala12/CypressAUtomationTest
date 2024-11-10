

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {
        const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
        cy.log(myVar);


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()


        //window alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get("#opentab").invoke('removeAttr', 'target').click();
        cy.origin("https://www.qaclickacademy.com/", () => {
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.get('.section-title.mt-50 h2').should('contain' ,'Welcome to QAClick Academy ')
        })
    
    })

})









