class AmazonCustomerPage {


    elements = {
        trackPackageButton: () => cy.contains("Track your package"),
        whereMyStuffButton: () => cy.contains("Where's"),
        helpWithSignInButton: () => cy.contains("Help with signing in"),
        searchMenu: () => cy.get("#hubHelpSearchInput"),
        searchResults: () => cy.get('#help-result-stats'),
        digitalServiceLink: () => cy.contains("Digital Services"),
        yourOrdersLink: () => cy.contains("Your Orders")

    }

    verifyDigitalServiceButton() {
        this.elements.digitalServiceLink()
            .should('be.visible')
    }

    verifyWhereMyStuffButton() {
        this.elements.whereMyStuffButton()
            .should('be.visible')
    }

    clickOnHelpSignInButton() {
        this.elements.helpWithSignInButton()
            .should('be.visible')
            .click()
    }

    clickOnTrackPackage() {
        this.elements.trackPackageButton()
            .should('be.visible')
            .click()
    }

    verifyYourOrdersButton() {
        this.elements.yourOrdersLink()
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

