import { clearErrorImageDetailAction } from "./clearErrorImageDetailAction"
import { CLEAR_ERROR_IMAGE_DETAIL } from "../types";

describe('clearErrorImageDetailAction', () => {
    const { type, reducer } = clearErrorImageDetailAction();

    it('has CLEAR_ERROR_IMAGE_DETAIL type', () => {
        expect(type).toEqual(CLEAR_ERROR_IMAGE_DETAIL)
    })

    describe('when execute the reducer ', () => {
        const oldState = {
            errorImageDetail: "a error"
        }
        it('clear errorImageDetail', () => {
            const newState = reducer(oldState)
            expect(newState.errorImageDetail).toEqual(null)
        })
    })
})