
describe('My test suite', function ()
{
    it('Verify title of the page -Positive-', function ()
    {
    cy.visit("https://www.arturocalle.com/")
    cy.title().should('eq', 'Comprar polos')
    })

    it('Verify title of the page -Negative-', () =>
    {
    cy.visit("https://www.arturocalle.com/")
    cy.title().should('eq', 'cucos')
    })
}
)