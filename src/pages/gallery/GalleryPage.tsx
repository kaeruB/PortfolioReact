import React, { Component} from 'react';
import GalleryCoordinator from "./animation/GalleryCoordinator";

export class GalleryPage extends Component<{}> {
    public threeJsGalleryContainer: HTMLDivElement | null = null;
    public galleryTitleRef: HTMLSpanElement | null = null;
    public galleryDescriptionRef: HTMLSpanElement | null = null;

    componentDidMount() {
        const gallery: GalleryCoordinator = new GalleryCoordinator(
            this.threeJsGalleryContainer!,
            this.galleryTitleRef!,
            this.galleryDescriptionRef!
        );
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
                    <div className="works__gallery-container" ref={ref => (this.threeJsGalleryContainer = ref)} >
                        <div className="gallery-description">
                            <span className="gallery-description__title" ref={ref => (this.galleryTitleRef = ref)}>
                                My art gallery
                            </span>
                            <span className="gallery-description__description" ref={ref => (this.galleryDescriptionRef = ref)}>
                                Japanese calligraphy and drawing portraits - my method to relax. Explore the gallery by clicking on pictures and navigating with mouse.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryPage;
