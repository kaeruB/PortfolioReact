import React, { Component} from 'react';
import * as THREE from 'three';
import {
    addLightsToScene,
    addMeshToScene,
    addPicturesToScene,
    getCamera,
    getControls, getGalleryPicturesMeshes,
    getLights,
    getGroundMesh,
    getRenderer,
    getScene,
    updateLightsPosition, onGalleryPictureClicked
} from "../utils/gallery";
import {PhotoMetadata} from "../model/Gallery";
import {calligraphy, drawings} from "../utils/constants";

export class WorksPage extends Component<{}> {
    private threeJsGalleryContainer: any;

    componentDidMount() {
        this.createGallery();
    }

    private createGallery(): void {
        const camera: THREE.PerspectiveCamera = getCamera();
        const scene: THREE.Scene = getScene();
        const mesh: THREE.Mesh = getGroundMesh();
        const allArtItemsShuffled: Array<PhotoMetadata> = calligraphy.concat(drawings);
        const lights: Array<THREE.PointLight> = getLights();
        const renderer = getRenderer();
        const galleryPicturesMeshes = getGalleryPicturesMeshes(allArtItemsShuffled);

        addMeshToScene(mesh, scene);
        addPicturesToScene(galleryPicturesMeshes, scene);
        addLightsToScene(lights, scene);

        this.addGalleryToDOM(renderer);
        const controls = getControls(camera, renderer);

        this.addMouseClickListener(renderer, camera, galleryPicturesMeshes);

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

    private addMouseClickListener(
        renderer: THREE.WebGLRenderer,
        camera: THREE.PerspectiveCamera,
        galleryPicturesMeshes: Array<THREE.Mesh>
    ): void {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        this.threeJsGalleryContainer.addEventListener(
            'click',
            (event: MouseEvent) => {
                onGalleryPictureClicked(event, raycaster, mouse, renderer, camera, galleryPicturesMeshes);
            }
        );
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
