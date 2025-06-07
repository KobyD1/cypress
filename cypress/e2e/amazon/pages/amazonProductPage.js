class AmazonProductPage {


    elements = {
        addToCartButton: () => cy.get("#add-to-cart-button"),
        cartCountByIcon: () => cy.get('span#nav-cart-count'),
        scissorColorSelector: () => cy.get("#inline-twister-expander-header-color_name"),
        goToCartButton: () => cy.get("#sw-gtc"),


    }

    clickOnGoToCart() {
        this.elements.goToCartButton()
            .should('be.visible')
            .click()
    }

    clickOnAddToCart() {
        this.elements.addToCartButton()
            .should('be.visible')
            .click({force: true})

    }


    selectAndAssertScissorColor(index, expColor) {
        cy.log('Verify for correct color selected ,colors :', expColor);

        cy.get("#color_name_" + index).click()
        this.elements.scissorColorSelector()
            .should('include.text', expColor);
    }


    getCartCount() {
        this.elements.cartCountByIcon()
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const itemCount = parseInt(text.trim(), 10);
            });
        return itemCount;
    }


    getAndAssertCartCount(expItemAmount) {
        this.elements.cartCountByIcon()
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const itemCount = parseInt(text.trim(), 10);
                cy.log('Number of items in cart:', itemCount);
                expect(itemCount).to.be.equals(expItemAmount)
            });


    }


}

export const amazonProductPage = new AmazonProductPage();

