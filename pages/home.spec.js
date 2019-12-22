import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './index'

const getLoading = (component) => component.find('Loading')
const getListOfImages = (component) => component.find('ListOfImages')


describe('Home page', () => {
    describe('when pass loading as true', () => {
        const home = shallow(<Home loading />)
        it('render the loading', () => {
            expect(getLoading(home)).toHaveLength(1)
        })
    })

    describe('when pass loading as false or NO pass', () => {
        const home = shallow(<Home />)
        it('dont render the loading', () => {
            expect(getLoading(home)).toHaveLength(0)
        })
        it('render a the gallery',()=>{
            expect(getListOfImages(home)).toHaveLength(1)
        })
    })
})