import { setSortAction } from "./setSortAction"
import { SET_SORT } from "../../types";

describe('setSortAction', () => {

    it('has SET_SORT type', () => {
        const { type } = setSortAction();
        expect(type).toEqual(SET_SORT)
    })

    describe('when execute the reducer with a value', () => {
        const newSort = 'time'
        const oldState = {
            sort: 'viral'
        }
        const { reducer } = setSortAction(newSort);
        it('modify the value into the store', () => {
            const newState = reducer(oldState)
            expect(newState.sort).toEqual(newSort)
        })
    })
})