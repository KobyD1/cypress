import { amazonHomePage } from '../pages/amazonHomePage';
import { amazonCustomerPage } from '../pages/amazonCustomerPage';


describe('Amazon Welcome Page Test', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com');

      cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
      cy.clearCookies()
    cy.wait(10000)

    // cy.reload()


  });

  it('Welcome page test and Navigation to Customer Service', () => {
    amazonHomePage.verifyTodaysDealsLink()
    amazonHomePage.verifyLogoExists()
    cy.title().should('include', 'Amazon');
    amazonHomePage.clickOnCustomerServiceLink()
    cy.title().should('include', 'Customer Service')



  });

  it ('Customer Service page - By topics library',()=>{

    amazonHomePage.clickOnCustomerServiceLink()
    amazonCustomerPage.clickOnTrackPackage()
    cy.title().should('include', 'Customer Service')

    amazonCustomerPage.verifyYourOrdersButton()


  })

  it ('Customer Service page -Search for item and verify result',()=>{

    amazonHomePage.clickOnCustomerServiceLink()
    cy.title().should('include', 'Customer Service')
    amazonCustomerPage.searchForItem("Where's my stuff")
    amazonCustomerPage.getSearchResults("Where's My Stuff")

    // amazonCustomerPage.verifyHelpButton()


  })
});