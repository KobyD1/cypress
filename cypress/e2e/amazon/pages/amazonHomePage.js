class AmazonHomePage {


    elements = {
        todaysDealsTab: () => cy.contains('a', "Today's Deals"),
        customerServiceTab: () => cy.contains('a', 'Customer Service'),
        sellTab: () => cy.contains('a', 'Sell'),
        logo: () => cy.get('#nav-logo-sprites'),
        loginButton: () => cy.contains('sign in'),
        emailButton: () => cy.get("[id*='ap_email']"), // the element ID sometimes changed
        passwordButton: () => cy.get("#ap_password"),
        continueButton: () => cy.get("#continue"),
        signInSubmit: () => cy.get('#signInSubmit'),
        searchMenu: () => cy.get('#twotabsearchtextbox'),
        searchResults: () => cy.get('.s-main-slot .s-result-item')


    }

    login(userName, password) {
        cy.log("Trying to login with user name: " + userName + " and password: ")
        this.elements.loginButton().click();
        this.elements.emailButton().type(userName);
        this.elements.continueButton().click();
        this.elements.passwordButton().type(password);
        this.elements.signInSubmit().click();


    }

    searchForProduct(product) {
        cy.log("Searching for product: " + product)
        this.elements.searchMenu().type(product + '{enter}')
        cy.get('#nav-search-submit-button').click();
    }

    verifyProductFound() {
        cy.wait(2000);
        cy.get('.s-main-slot .s-result-item').should('have.length.greaterThan', 0);
    }

    clickOnProductByTitle(title) {
        cy.get('.s-main-slot .s-result-item').contains(title).click();

    }

    verifyLogoExists() {
        this.elements.logo()
            .should('be.visible')
    }

    verifyTodaysDealsButton() {
        this.elements.todaysDealsTab()
            .should('be.visible')
            .and('have.attr', 'href')
            .then((href) => {
                expect(href).to.include('nav_cs_gb');
            });
    }

    clickOnDismiss() {

        try {
            cy.get("span.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss").click();
        } catch (error) {
            cy.log(`Dismiss button not found`);
        }


    }

    verifySellLink() {
        this.elements.sellTab()
            .should('be.visible')
            .and('have.attr', 'href')
            .then((href) => {
                expect(href).to.include('sell');
            });
    }

    verifyCustomerServiceLink() {
        this.elements.customerServiceTab()
            .should('be.visible')
            .and('have.attr', 'href')
            .then((href) => {
                expect(href).to.include('customerservice');
            });
    }

    clickOnCustomerServiceLink() {
        cy.log("Clicking on Customer Service link")
        this.elements.customerServiceTab().click({force: true});
    }


}

export const amazonHomePage = new AmazonHomePage();

