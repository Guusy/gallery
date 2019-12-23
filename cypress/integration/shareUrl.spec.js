/// <reference types="Cypress" />

import { dataTestId } from '../utils/dataTestId.js'

describe('when enter into the app with any filter by query param', () => {
    before(() => {
        cy.visit('/', {
            qs: {
                section: 'user',
                sort: 'rising',
                window: 'year',
                showViral: false
            }
        })
    })

    it('has section selected as user',()=>{
        cy.get(dataTestId('section-filter')).should('have.value', 'user')
    })

    it('has sort selected as rising',()=>{
        cy.get(dataTestId('sort-filter')).should('have.value', 'rising')
    })

    it('has window selected as year',()=>{
        cy.get(dataTestId('window-filter')).should('have.value', 'year')
    })

    it('has showViral unchecked',()=>{
        cy.get(dataTestId('showViral-filter')).should('not.have.attr', 'checked')    
    })
    
})

describe('when enter without query params',()=>{
    before(() => {
        cy.visit('/')
    })

    it('set the default values',()=>{
        cy.url().should('contain', '?section=hot&sort=viral&window=day&showViral=true')
    })
})