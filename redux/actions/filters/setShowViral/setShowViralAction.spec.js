import { setShowViralAction } from "./setShowViralAction"
import { SET_SHOW_VIRAL } from "../../types";

describe('setShowViralAction', () => {

    it('has SET_SHOW_VIRAL type', () => {
        const { type } = setShowViralAction();
        expect(type).toEqual(SET_SHOW_VIRAL)
    })

    describe('when execute the reducer with a value', () => {
        const newShowViral = false
        const oldState = {
            showViral: true
        }
        const { reducer } = setShowViralAction(newShowViral);
        it('modify the value into the store', () => {
            const newState = reducer(oldState)
            expect(newState.showViral).toEqual(newShowViral)
        })
    })
})