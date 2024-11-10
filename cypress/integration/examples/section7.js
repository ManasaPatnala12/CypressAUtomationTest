/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import 'cypress';
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
  const myVar = Cypress.env('MY_VARIABLE'); // Correct way to access the variable
  cy.log(myVar);
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck()
//cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked').and('have.value', ['option2,'option3'])
/*cy.get('input[type="checkbox"]')
  .check(['option2', 'option3'])
  .should('be.checked') // Ensure both are checked
  .and('have.value', ['option2', 'option3']); // Ensure they have the correct values */
  cy.get('input[type="checkbox"]')
  .check(['option2', 'option3']) // Check the checkboxes
  .should('be.checked') // Ensure they are checked
  .then(($checkboxes) => {
    const checkedValues = $checkboxes.map((i, el) => el.value).get(); // Extract values of checked checkboxes
    expect(checkedValues).to.deep.equal(['option2', 'option3']); // Assert that values match
  })
 
}  )
 
 
 
}  )