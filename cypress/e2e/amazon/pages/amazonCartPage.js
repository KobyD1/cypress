class AmazonCartPage {


    elements = {
        cartIcon: () => cy.get("div#nav-cart-count-container"),
        cartItems: () => cy.get('.sc-list-item'),
        shippingMessage: () => cy.get('div.a-section.a-spacing-top-micro.sc-sss-box'),
        addItemButton: () => cy.get('span.a-icon.a-icon-small-add')
    }


    clickOnCartIcon() {
        this.elements.cartIcon().click()
    }


    deleteAllCarts() {
        this.clickOnCartIcon()
        let deleteLinks = document.querySelectorAll('input[name="submit.delete.CURRENT"]');
        for (let i = 0; i < deleteLinks.length; i++) {
            deleteLinks[i].click();
        }
    }

    getAndAssertCartItems(expItem) {
        this.elements.cartItems()
            .should('exist')
            .then(($items) => {
                const match = [...$items].some(item => item.innerText.includes(expItem));
                expect(match).to.be.true;
            });
    }

    increaseItemOnCart(index) {
        const element = this.elements.addItemButton().eq(index)
        element.should('be.visible').click({force: true});
        cy.wait(3000)    // waiting for spinner will be removed
    }
// done VS List , the response is inconsist (2 types of messages )
    getAndAssertShippingStatus(expPattern) {

        this.elements.shippingMessage()
            .should('be.visible')
            .invoke('text')
            .should('include', expPattern[0]||expPattern[1])
    }

}

export const amazonCartPage = new AmazonCartPage();

