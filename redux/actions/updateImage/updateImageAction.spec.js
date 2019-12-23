import { updateImageAction } from "./updateImageAction"
import { UPDATE_IMAGE } from "../types";

describe('updateImageAction', () => {

    it('has UPDATE_IMAGE type', () => {
        const { type } = updateImageAction();

        expect(type).toEqual(UPDATE_IMAGE)
    })

    describe('when execute the reducer with image data', () => {
        const newImage = { id: 3 }
        const oldState = {
            image: { id: 0 }
        }
        const { reducer } = updateImageAction(newImage);
        it('modify the value into the store', () => {
            const newState = reducer(oldState)
            expect(newState.image.id).toEqual(newImage.id)
        })
    })
})