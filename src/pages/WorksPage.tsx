import React, { Component} from 'react';
import * as THREE from 'three';
import {
    addLightsToScene,
    addMeshToScene,
    addPicturesToScene,
    getCamera,
    getControls,
    getLights,
    getMesh,
    getRenderer,
    getScene,
    updateLightsPosition
} from "../utils/gallery";
import {calligraphy, drawings, PhotoMetadata} from "../model/Gallery";

export class WorksPage extends Component<{}> {
    private threeJsGalleryContainer: any;

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.createGallery();
    }

    private createGallery(): void {
        const camera: THREE.PerspectiveCamera = getCamera();
        const scene: THREE.Scene = getScene();
        const mesh: THREE.Mesh = getMesh();
        const allArtItemsShuffled: Array<PhotoMetadata> = calligraphy.concat(drawings);
        const lights: Array<THREE.PointLight> = getLights();
        const renderer = getRenderer();

        addMeshToScene(mesh, scene);
        addPicturesToScene(allArtItemsShuffled, scene);
        addLightsToScene(lights, scene);

        this.addGalleryToDOM(renderer);
        const controls = getControls(camera, renderer);

        const animate = function () {
            requestAnimationFrame(animate);
            updateLightsPosition(lights, controls, renderer, scene, camera);
        }
        animate();
    }

    private addGalleryToDOM(renderer: THREE.WebGLRenderer): void {
        this.threeJsGalleryContainer.appendChild(renderer.domElement);
        renderer.outputEncoding = THREE.sRGBEncoding;
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

export default WorksPage;
