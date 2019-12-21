import React from 'react'
import { shallow } from 'enzyme'
import { Image } from './Image'

const getDescription = (component) => component.find('.description')

describe('Image', () => {
    describe('when pass a description', () => {
        const aDescription = "description !"
        const component = shallow(<Image description={aDescription} />)
        it('render it', () => {
            expect(getDescription(component).text()).toEqual(aDescription)
        })
    })

    describe('when NO pass a description', () => {
        const component = shallow(<Image />)
        it('dont render it', () => {
            expect(getDescription(component).exists()).toBe(false)
        })
    })
})