// loads TypeScript definition for Cypress
// and "cy.runExample" custom command
/// <reference types="@cypress/fiddle" />

const helloTest = {
  html: `
      <div>Hello</div>
    `,
  test: `
      cy.get('div').should('have.text', 'Hello')
    `,
}

it('tests hello', () => {
  cy.runExample(helloTest)
  cy.get('div').then(($el) => {
    console.log($el[0].getBoundingClientRect())
    const obj = $el[0].getBoundingClientRect()
    cy.log(obj.x)
  })
})
