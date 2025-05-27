const { Given } = require("@badeball/cypress-cucumber-preprocessor");

Given("I open the site {string}", (url) => {
  cy.visit(url);
});