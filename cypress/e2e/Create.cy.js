import {body} from '../fixtures/ContactBody.json';
import {urls} from '../fixtures/Login.json';
import {loginKey} from '../fixtures/Login.json';

describe('create contact', () => {

  Cypress._.times(10, () => {
    it('create contact', () => {
      cy.request({
        method: 'POST',
        url: urls.urlLogin,
        body: loginKey,
      })
        .its('body')
        .then(res => {
          const header = res.token;
          cy.request({
            method: 'POST',
            url: urls.urlContacts,
            body: body,
            headers: {
              Authorization: 'Bearer ' + header,
              dummy: 'test'
            }
          })
            .then((response) => {      
              expect(response).property('status').to.equal(201);
              expect(response.body).property('firstName').to.equal(body.firstName);
              expect(response.body).property('lastName').to.equal(body.lastName);
              expect(response.body).property('birthdate').to.equal(body.birthdate);
              expect(response.body).property('email').to.equal(body.email);
              expect(response.body).property('phone').to.equal(body.phone);
              expect(response.body).property('street1').to.equal(body.street1);
              expect(response.body).property('street2').to.equal(body.street2);
              expect(response.body).property('city').to.equal(body.city);
              expect(response.body).property('stateProvince').to.equal(body.stateProvince);
              expect(response.body).property('postalCode').to.equal(body.postalCode);
              expect(response.body).property('country').to.equal(body.country);
            }); 
        });
    });
  });
})