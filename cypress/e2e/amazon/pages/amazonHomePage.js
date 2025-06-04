// cypress/support/page_objects/amazonHomePage.js

class AmazonHomePage {


    elements = {
        todaysDeals: () => cy.contains('a', "Today's Deals"),
        customerService: () => cy.contains('a','Customer Service'),
        sell: () => cy.contains('a', 'Sell'),
        logo: () => cy.get('#nav-logo-sprites'),
        loginButton : () => cy.get('#nav-link-accountList-nav-line-1'),
        emailButton: () => cy.get("#ap_email"),
        passwordButton: () => cy.get("#ap_password"),
        continueButton: () => cy.get("#continue"),
        signInSubmit :() =>cy.get('#signInSubmit'),


    }

login(userName, password){
        this.elements.loginButton().click();
  this.elements.emailButton().type(userName);
    this.elements.continueButton().click();

    this.elements.passwordButton().type(password);
    this.elements.signInSubmit().click();


}

verifyLogoExists() {
    this.elements.logo()
        .should('be.visible')
}
    verifyTodaysDealsLink() {
        this.elements.todaysDeals()
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

        cy.get('body').then(($body) => {
            if ($body.find('.glow-toaster-button-dismiss').length > 0) {
                cy.get('.glow-toaster-button-dismiss').click();
            }
        });

    }

    verifySellLink() {
        this.elements.sell()
            .should('be.visible')
            .and('have.attr', 'href')
            .then((href) => {
                expect(href).to.include('sell');
            });
    }

    verifyCustomerServiceLink() {
         this.clickOnDismiss()
        this.elements.customerService()
            .should('be.visible')
             .and('have.attr', 'href')
             .then((href) => {
                 expect(href).to.include('customerservice');
             });
    }

    clickOnCustomerServiceLink() {
        this.elements.customerService().click({force: true});
    }


}

export const amazonHomePage = new AmazonHomePage();

