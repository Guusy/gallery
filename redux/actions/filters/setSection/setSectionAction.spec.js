import { setSectionAction } from "./setSectionAction"
import { SET_SECTION } from "../../types";

describe('setSectionAction', () => {

    it('has SET_SECTION type', () => {
        const { type } = setSectionAction();

        expect(type).toEqual(SET_SECTION)
    })

    describe('when execute the reducer with a value', () => {
        const newSection = 'top'
        const oldState = {
            section: 'user'
        }
        const { reducer } = setSectionAction(newSection);
        it('modify the value into the store', () => {
            const newState = reducer(oldState)
            expect(newState.section).toEqual(newSection)
        })
    })
})