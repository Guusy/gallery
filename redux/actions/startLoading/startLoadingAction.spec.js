import { startLoadingAction } from "./startLoadingAction"
import { START_LOADING } from "../types";

describe('startLoadingAction', () => {
    const { type, reducer } = startLoadingAction();

    it('has START_LOADING type', () => {
        expect(type).toEqual(START_LOADING)
    })

    describe('when execute the reducer ', () => {
        const oldState = {
            loading: false
        }
        it('change the loading to true', () => {
            const newState = reducer(oldState)
            expect(newState.loading).toEqual(true)
        })
    })
})