// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("postRequest", (endpoint, payload) => {
    const props = {
        method: 'POST',
        url: Cypress.env('BASE_API_URL') + endpoint,
        failOnStatusCode: false,
        body: payload
    };
    cy.request(props);
});

Cypress.Commands.add("getRequest", (endpoint) => {
    const props = {
        method: 'GET',
        url: Cypress.env('BASE_API_URL') + endpoint,
        failOnStatusCode: false,
    };
    cy.request(props);
});

Cypress.Commands.add("asserURL", (expectedUrl) => {
    cy.url().should('eq', Cypress.config().baseUrl + expectedUrl)
})



