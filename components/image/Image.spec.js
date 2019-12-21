import React from 'react'
import { shallow } from 'enzyme'
import { Image } from './Image'

const getDescription = (component) => component.find('.description')
const getImg = (component) => component.find('.img-gallery')
const getNoImage = (component) => component.find('.no-img')

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

    describe('when pass a src', () => {
        const aSrc = "description !"
        const component = shallow(<Image src={aSrc} />)
        it('render it', () => {
            expect(getImg(component).props().src).toEqual(aSrc)
        })
    })

    describe('when NO pass a src', () => {
        const component = shallow(<Image />)
        it('put a empty message', () => {
            expect(getNoImage(component).text()).toEqual("This image is not available.")
        })
    })
})