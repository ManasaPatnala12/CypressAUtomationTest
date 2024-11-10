class homePage {

    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayEditBox() {
        return cy.get('input[name="name"]:nth-child(1)')
    }
    getGender() {
        return cy.get('Select')       
}
getEntrepreneurButton() {
    return cy.get('#inlineRadio3')

}
getShopLink() {
    return cy.get('ul.navbar-nav > li:nth-child(2) > .nav-link')
}

}


export default homePage