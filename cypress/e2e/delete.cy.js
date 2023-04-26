import {loginKey} from '../fixtures/Login.json';
import {urls} from '../fixtures/Login.json';
import {onContactPage} from '../support/page_objects/contactPage';

describe('Login', () => {

  beforeEach('Login', () => {
    cy.visit(urls.urlMainPage).get(onContactPage.Email).type(loginKey.email);
    cy.get(onContactPage.Password).type(loginKey.password);
    cy.get(onContactPage.Submit).click();
  });

  it('delete first', () => {
    cy.get(onContactPage.ContactRow).eq(0).click();
    cy.get(onContactPage.Delete).click();
    cy.url().should('eq', urls.urlContactList);
    cy.get(onContactPage.ContactRow).should('have.length', 9);
  });

  it('delete 6th', () => {
    cy.get(onContactPage.ContactRow).eq(5).click()
    cy.get('#delete').click();
    cy.url().should('eq', urls.urlContactList);   
    cy.get(onContactPage.ContactRow).should('have.length', 8);
  });
})
