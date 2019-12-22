import { setShowViral } from "./setShowViral"
import { SET_SHOW_VIRAL } from "../../types";

describe('setShowViral', () => {

    it('has SET_SHOW_VIRAL type', () => {
        const { type } = setShowViral();
        expect(type).toEqual(SET_SHOW_VIRAL)
    })

    describe('when execute the reducer with a value', () => {
        const newShowViral = false
        const oldState = {
            showViral: true
        }
        const { reducer } = setShowViral(newShowViral);
        it('modify the value into the store', () => {
            const newState = reducer(oldState)
            expect(newState.showViral).toEqual(newShowViral)
        })
    })
})