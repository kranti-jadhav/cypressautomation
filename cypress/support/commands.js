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
 import Homepage from "../e2e/Pageobjectmodel/Homepage.cy"

 const homepage=new Homepage()

 Cypress.Commands.add('login', (email, password) => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    homepage.getuserName().type(email)
    homepage.getpassword().type(password)
    homepage.getLoginButton().click()


  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })