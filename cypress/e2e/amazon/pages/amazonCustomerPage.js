class AmazonCustomerPage {


    elements = {
        trackPackage: () => cy.contains("Track your package"),
        whereMyStuff: () => cy.contains("Where's"),
        helpWithSignIn: () => cy.contains("Help with signing in"),
        searchMenu: () => cy.get("#hubHelpSearchInput"),
        searchResults: () => cy.get('#help-result-stats'),
        digitalService: () => cy.contains("Digital Services"),
        yourOrders: () => cy.contains("Your Orders")

    }

    verifyDigitalServiceButton() {
        this.elements.digitalService()
            .should('be.visible')
    }

    verifyWhereMyStuffButton() {
        this.elements.whereMyStuff()
            .should('be.visible')
    }

    clickOnHelpSignInButton() {
        this.elements.helpWithSignIn()
            .should('be.visible')
            .click()
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

    searchForItem(item) {
        cy.log("Searching for item: " + item)
        this.elements.searchMenu().type(item);
        this.elements.searchMenu().type('{enter}');
    }

    getSearchResults(patternToFind) {
        this.elements.searchResults()
            .should('contain.text', patternToFind);
    }


}

export const amazonCustomerPage = new AmazonCustomerPage();

