
class AmazonCustomerPage {


    elements = {
        trackPackage: () => cy.contains("Track your package"),
        whereMyStuff: ()=> cy.contains("Where's"),
        helpWithSignIn : ()=> cy.contains("A delivery, order or return"),
        searchMenu : ()=> cy.get("#hubHelpSearchInput"),
        searchResults :() => cy.get("#help-result-stats"),
        yourOrders : ()=> cy.contains("Your Orders")

    }

verifyHelpButton() {
    this.elements.helpWithSignIn()
        .should('be.visible')
}

    clickOnTrackPackage() {
        this.elements.trackPackage()
            .should('be.visible')
            .click()

    }

    verifyYourOrdersButton() {
        this.elements.yourOrders()
            .should('be.visible')

    }

    searchForItem(item){
        this.elements.searchMenu().type(item);
        this.elements.searchMenu().type('{enter}');
    }
    getSearchResults(patternToFind){
        cy.get('.help-content')
            .should('contain.text', patternToFind);

    }


}

export const amazonCustomerPage = new AmazonCustomerPage();

