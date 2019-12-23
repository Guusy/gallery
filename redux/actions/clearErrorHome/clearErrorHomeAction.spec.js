import { clearErrorHomeAction } from "./clearErrorHomeAction"
import { CLEAR_ERROR_HOME } from "../types";

describe('clearErrorHomeAction', () => {
    const { type, reducer } = clearErrorHomeAction();

    it('has CLEAR_ERROR_HOME type', () => {
        expect(type).toEqual(CLEAR_ERROR_HOME)
    })

    describe('when execute the reducer ', () => {
        const oldState = {
            errorHome: "a error"
        }
        it('clear errorHome', () => {
            const newState = reducer(oldState)
            expect(newState.errorHome).toEqual(null)
        })
    })
})