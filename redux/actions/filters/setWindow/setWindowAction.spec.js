import { setWindowAction } from "./setWindowAction"
import { SET_WINDOW } from "../../types";

describe('setWindowAction', () => {

    it('has SET_WINDOW type', () => {
        const { type } = setWindowAction();
        expect(type).toEqual(SET_WINDOW)
    })

    describe('when execute the reducer with a value', () => {
        const newWindow = 'week'
        const oldState = {
            window: 'month'
        }
        const { reducer } = setWindowAction(newWindow);
        it('modify the value into the store', () => {
            const newState = reducer(oldState)
            expect(newState.window).toEqual(newWindow)
        })
    })
})