import React from 'react'
import { shallow } from 'enzyme'
import { Image } from './Image'

describe('Image', () => {
    it('smoke test', () => {
        const component = shallow(<Image />)
        expect(component.exists()).toBe(true)
    })
})