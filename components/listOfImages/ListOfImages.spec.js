import React from 'react'
import { shallow } from 'enzyme'
import { ListOfImages } from './ListOfImages'
const getImages = (component) => component.find('Image')

describe('ListOfImages', () => {
    describe('when pass  images', () => {
        const component = shallow(<ListOfImages
            images={[
                { src: '123123', description: '123123' },
                { src: '123123', description: '123123' },
            ]}
        />)
        it('render it', () => {
            expect(getImages(component)).toHaveLength(2)
        })
    })

    describe('when NO pass images', () => {
        const component = shallow(<ListOfImages />)
        it('dont render it', () => {
            expect(getImages(component)).toHaveLength(0)
        })
    })

})