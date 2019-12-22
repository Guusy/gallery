import { finishLoadingAction } from "./finishLoadingAction"
import { FINISH_LOADING } from "../types";

describe('finishLoadingAction', () => {
    const { type, reducer } = finishLoadingAction();

    it('has START_LOADING type', () => {
        expect(type).toEqual(FINISH_LOADING)
    })

    describe('when execute the reducer ', () => {
        const oldState = {
            loading: true
        }
        it('change the loading to false', () => {
            const newState = reducer(oldState)
            expect(newState.loading).toEqual(false)
        })
    })
})