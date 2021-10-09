//Example command to login bypassing UI
// Cypress.Commands.add('login', (username, password) => {
//     return cy.request({
//         method: 'POST',
//         url: 'https://www.saucedemo.com/',
//         form: true,
//         body: {
//             username,
//             password,
//         },
//     })
// })
Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.get('[data-test=username]').type(Cypress.env('std_user'));
    cy.get('[data-test=password]').type(Cypress.env('password'), { log: false });
    cy.get('[data-test=login-button]').click();
})

