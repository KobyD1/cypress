import { amazonHomePage } from '../pages/amazonHomePage';
import { amazonCustomerPage } from '../pages/amazonCustomerPage';


describe('Amazon Purches Test', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com');

      cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
      cy.clearCookies()
    cy.wait(10000)
    amazonHomePage.login("kobyd100@gmail.com", "YaaledIm_55")



  });


  it ('Customer Service page -Search for item and verify result',()=>{


    cy.visit('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    cy.get('#ap_email_login').type("kobyd100@gmail.com");
    cy.get('#continue').click();
    cy.get('#ap_password').type("YaaledIm_55");
    cy.get('#signInSubmit').click();


  })
});