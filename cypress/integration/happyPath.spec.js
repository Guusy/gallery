/// <reference types="Cypress" />

import { dataTestId } from '../utils/dataTestId.js'
const aDescription = 'lorem impsum'
const aTitle = 'title lorem impsum'
const ups = 3451
const downs = 2333
const score = 1222
const imageMock = {
    id: '12',
    src: 'https://i.imgur.com/jVIMP6L.png',
    description: aDescription,
    title: aTitle,
    ups,
    downs,
    score,
}
describe('Happy path', () => {


    it('visit home', () => {
        cy.visit('/')
    })

    it('apply a filter', () => {
        cy.get(dataTestId('showViral-filter')).click()
    })

    it('the url changes', () => {
        cy.url().should('contain', '?section=hot&sort=viral&window=day&showViral=false')
    })

    it('apply the filter', () => {
        cy.server()
        cy.route({
            method: 'GET', url: '/3/gallery/hot/viral/day/0?showViral=false',
            status: 200, response: {
                data: [imageMock]
            }
        })

        cy.get(dataTestId('search-button')).click()

    })

    it('show the image', () => {
        cy.get(dataTestId(12)).should('have.attr', 'src').should('include', 'https://i.imgur.com/jVIMP6L.png')
    })

    it('show the description', () => {
        cy.get('.description').contains(aDescription)
    })

    it('click the first image', () => {

        cy.get(dataTestId(12)).click()
    })

    it('navigate to the detail of this image', () => {
        cy.location('pathname').should('eq', `/image/12`)
    })

})
