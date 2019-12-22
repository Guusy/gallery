import Restclient from "./RestClient";

export class GalleryService extends Restclient {

    static getGallery({ section, sort, window, showViral }) {
        return this.get(`/gallery/${section}/${sort}/${window}/0`, {
            params: {
                showViral
            }
        })
    }

}