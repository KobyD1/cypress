import {amazonHomePage} from '../pages/amazonHomePage';
import {amazonCustomerPage} from '../pages/amazonCustomerPage';


describe('Amazon Customer Service Search For item Flow Test', () => {
    beforeEach(() => {

        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearCookies()
        cy.visit('https://www.amazon.com');

    });


    it('Customer Service Page -Search For Item (Where is my stuff)And Verify Result', () => {
        amazonHomePage.clickOnCustomerServiceLink()
        cy.title().should('include', 'Customer Service')
        amazonCustomerPage.searchForItem(Cypress.env("CS_ITEM_TO_FOUND"))
        amazonCustomerPage.getSearchResults(Cypress.env("CS_ITEM_TO_FOUND"))

    })

    it('Customer Service page -Negative Test For Search Item', () => {
        amazonHomePage.clickOnCustomerServiceLink()
        amazonCustomerPage.searchForItem("1*&&)*)abc#####")
        amazonCustomerPage.getSearchResults("0")

    })

});