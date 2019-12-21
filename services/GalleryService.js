import Restclient from "./RestClient";

export class GalleryService extends Restclient {

    static getGallery(){
        return this.get('/gallery/hot')
    }

}