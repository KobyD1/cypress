import {amazonHomePage} from '../pages/amazonHomePage';
import {amazonCustomerPage} from '../pages/amazonCustomerPage';


describe('Amazon Customer Service Page Test', () => {
    beforeEach(() => {

        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearCookies()
        cy.visit('https://www.amazon.com');

    });

    it('Welcome Page And Navigation To Customer Service Test', () => {
        amazonHomePage.verifyTodaysDealsButton()
        amazonHomePage.verifyLogoExists()
        cy.title().should('include', 'Amazon');
        amazonHomePage.clickOnCustomerServiceLink()
        cy.title().should('include', 'Customer Service')

    });

    it('Customer Service Page - Track Package Navigation', () => {

        amazonHomePage.clickOnCustomerServiceLink()
        amazonCustomerPage.clickOnTrackPackage()
        cy.title().should('include', 'Help & Contact Us - Amazon Customer Service')
        amazonCustomerPage.verifyYourOrdersButton()

    })

    it('Customer Service Page - Help With Sign In Navigation ', () => {

        amazonHomePage.clickOnCustomerServiceLink()
        amazonCustomerPage.clickOnHelpSignInButton()
        cy.title().should('include', 'Amazon.com - Account & Login Issues')

    })

    it('Customer Service Page - Device Support Button Exists ', () => {

        amazonHomePage.clickOnCustomerServiceLink()
        amazonCustomerPage.verifyDigitalServiceButton()

    })

    it('Customer Service Page - Where Is My Stuff Button Exists ', () => {
        amazonHomePage.clickOnCustomerServiceLink()
        amazonCustomerPage.verifyWhereMyStuffButton()

    })


});