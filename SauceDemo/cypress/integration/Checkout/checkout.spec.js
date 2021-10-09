/// <reference types="cypress" />

describe('User checkout', () => {

    beforeEach(() => {
        //Command will login user before tests
        cy.login();
    })
    
    it('purchases ALL the T-shirts', () => {
        //add shirts to cart
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        //move to cart using icon link
        cy.get('#shopping_cart_container').click()
        //start checkout
        cy.get('[data-test=checkout]').click();
        //enter information
        cy.get('[data-test=firstName]').type('Steve');
        cy.get('[data-test=lastName]').type('Joseph');
        cy.get('[data-test=postalCode]').type('11040');
        cy.get('[data-test=continue]').click();       
        //complete checkout
        cy.get('[data-test=finish]').click();
        //Verify checkout completed successfully 
        cy.url().should('include', '/checkout-complete');
    })

})