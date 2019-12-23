/// <reference types="Cypress" />

import { dataTestId } from '../utils/dataTestId.js'

describe('Error path', () => {


    it('visit home', () => {
        cy.visit('/')
    })

    it('apply a filter and fails', () => {
        cy.get(dataTestId('showViral-filter')).click()
    })

    it('the url changes', () => {
        cy.url().should('contain', '?section=hot&sort=viral&window=day&showViral=false')
    })

    it('search and the api calls fails', () => {
        cy.server()

        cy.route({
            method: 'GET', url: '/3/gallery/hot/viral/day/0?showViral=false',
            status: 500, response: {}
        })

        cy.get(dataTestId('search-button')).click()

    })

    it('show error "Sorry, there was an error loading the gallery" ', () => {
        cy.get(dataTestId("error-home")).contains('Sorry, there was an error loading the gallery')
    })

    it('apply another', () => {
        cy.get(dataTestId('showViral-filter')).click()
    })

    it('the url changes', () => {
        cy.url().should('contain', '?section=hot&sort=viral&window=day&showViral=true')
    })

    it('search and the api calls responds ok', () => {
        cy.server()

        cy.route({
            method: 'GET', url: '/3/gallery/hot/viral/day/0?showViral=true',
            status: 200, response: { data: [] }
        })

        cy.get(dataTestId('search-button')).click()

    })

    it('dont show the error', () => {
        cy.get(dataTestId("error-home")).should('not.exist');
    })
})
