import {amazonHomePage} from '../pages/amazonHomePage';
import {amazonProductPage} from "../pages/amazonProductPage";
import {amazonCartPage} from "../pages/amazonCartPage";


describe('Amazon Purches Test', () => {

    before(() => {

    })


    beforeEach(() => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearCookies()
        cy.reload()

        cy.visit(Cypress.env('BASE_URL'));
// login is working but in comment - sometimes it fails due security issue
//     amazonHomePage.login(Cypress.env('USER_MAIL'), Cypress.env('USER_PASSWORD'))
        amazonCartPage.deleteAllCarts()
        amazonProductPage.getAndAssertCartCount(0)


    });


    it('Add To Cart And Verify For Free Shipping Flow Test', () => {

        // adding first product to cart
        amazonHomePage.searchForProduct(Cypress.env('PRODUCT_TO_FIND'))
        amazonHomePage.verifyProductFound()
        amazonHomePage.clickOnProductByTitle(Cypress.env("PRODUCT_DESCRIPTION"))
        amazonProductPage.clickOnAddToCart()
        amazonProductPage.getAndAssertCartCount(1)

        // adding second product to cart
        cy.visit(Cypress.env('SCISSORS_URL'))
        amazonProductPage.selectAndAssertScissorColor(1, Cypress.env('EXP_SCISSORS_COLOR'))
        amazonProductPage.clickOnAddToCart()
        amazonProductPage.getAndAssertCartCount(2)

        // verifying products did not change at cart page
        amazonProductPage.clickOnGoToCart()
        amazonCartPage.getAndAssertCartItems(Cypress.env("PRODUCT_DESCRIPTION"))

        // verify free shipping change VS product price
        amazonCartPage.getAndAssertShippingStatus(["are not eligible for FREE Shipping","are not eligible for FREE Shipping"])
        amazonCartPage.increaseItemOnCart(1)
        amazonCartPage.increaseItemOnCart(1)
        amazonCartPage.getAndAssertShippingStatus(["order qualifies for FREE Shipping","order qualifies for FREE Shipping"])


    })


});