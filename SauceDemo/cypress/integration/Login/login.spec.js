/// <reference types="cypress" />

describe('User login', () => {
    //Using premade users with info kept as env vars
    const standard_user = Cypress.env('std_user');
    const password = Cypress.env('password');
    
    beforeEach(() => {
        cy.visit('/');
    })

    //Happy path
    it('logs in successfully', () => {
        //enter credentials and submit
        cy.get('[data-test=username]').type(standard_user);
        cy.get('[data-test=password]').type(password, { log: false });
        cy.get('[data-test=login-button]').click();
        //user redirected to product page only accessible by login
        cy.url().should('include', '/inventory');
    })

    //Most common negative test cases to verify invalid password logins
    //Alerts validated with relevant text
    it('attempts to login with the wrong password', () => {
        cy.get('[data-test=username]').type(standard_user);
        cy.get('[data-test=password]').type('TestPassword123');
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test=error').should('be.visible').contains('do not match');
    })

    it('attempts to login with no password', () => {
        cy.get('[data-test=username]').type(standard_user);
        cy.get('[data-test=login-button]').click();
        cy.get('[data-test=error').should('be.visible').contains('Password is required');
    })
})