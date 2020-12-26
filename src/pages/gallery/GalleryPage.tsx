import React, { Component} from 'react';
import GalleryCoordinator from "./utils/GalleryCoordinator";

export class GalleryPage extends Component<{}> {
    private threeJsGalleryContainer: any;

    componentDidMount() {
        const gallery: GalleryCoordinator = new GalleryCoordinator(this.threeJsGalleryContainer);
        gallery.addElementsToScene();
        gallery.addGalleryToDOM();
        gallery.addOrbitControls();
        gallery.animate();
    }

    render() {
        return (
            <div>
                <div className='works'>
                    <div className="works__header">
                        <div className="works__header--line">&nbsp;</div>
                        <span className="works__header--title">hobby</span>
                        <div className="works__header--line">&nbsp;</div>
                    </div>
                    <div ref={ref => (this.threeJsGalleryContainer = ref)} />
                </div>
            </div>
        );
    }
}

export default GalleryPage;
