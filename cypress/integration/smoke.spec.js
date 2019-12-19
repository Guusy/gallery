

describe('Smoke test',()=>{
    it('ok',()=>{
        cy.visit('/')
        cy.get('[data-testid=image]')
    })
})