import * as THREE from "three";
import {COLOR} from "../../../utils/constants";
import galleryTexture from "../../../assets/textures/dry_ground4.jpg";
import {LightSetting, PhotoMetadata, XYPosition} from "../utils/models";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Calligraphy, Drawings, LightsSettings} from "../utils/constants";

export default class GalleryCoordinator {
    private _galleryRef: HTMLDivElement;
    private _galleryTitleRef: HTMLSpanElement;
    private _galleryDescriptionRef: HTMLSpanElement;

    private _camera: THREE.PerspectiveCamera;
    private _scene: THREE.Scene;
    private _groundMesh: THREE.Mesh;
    private _lights: Array<THREE.PointLight>;
    private _renderer: THREE.WebGLRenderer;
    private _galleryPicturesMeshes: Array<THREE.Mesh>;
    private _controls: OrbitControls | null = null;

    public constructor(
        galleryRef: HTMLDivElement,
        galleryTitleRef: HTMLSpanElement,
        galleryDescriptionRef: HTMLSpanElement
    ) {
        this._galleryRef = galleryRef;
        this._galleryTitleRef = galleryTitleRef;
        this._galleryDescriptionRef = galleryDescriptionRef;

        this._camera = this._getCamera();
        this._scene = this._getScene();
        this._groundMesh = this._getGroundMesh();
        this._lights = this._getLights();
        this._renderer = this._getRenderer();
        this._galleryPicturesMeshes = this._getGalleryPicturesMeshes();
    }

    public addElementsToScene(): void {
        this._addMeshToScene();
        this._addPicturesToScene();
        this._addLightsToScene();
        this._addGalleryPictureMeshClickListener();
    }

    public addGalleryToDOM(): void {
        this._galleryRef.appendChild(this._renderer.domElement);
        this._renderer.outputEncoding = THREE.sRGBEncoding;
    }

    public addOrbitControls(): void {
        this._controls = this._getControls();
    }

    public animate(): void {
        requestAnimationFrame(() => this.animate());
        this._updateLightsPosition();
    }

    private _getCamera(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 300);
        camera.position.set(0, 15, 210);
        camera.lookAt(0, 0, 0);
        return camera;
    }

    private _getScene(): THREE.Scene {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(COLOR.color_background_primary);
        scene.fog = new THREE.Fog(COLOR.color_background_primary, 10, 300);
        return scene;
    }

    private _getGroundMesh(): THREE.Mesh {
        const texture = this._getGroundTexture();
        const groundMaterial = new THREE.MeshPhongMaterial( { color: 0xcfbdd2, map: texture } );
        const mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(800, 800, 2, 2), groundMaterial);
        mesh.position.y = -5;
        mesh.rotation.x = -Math.PI / 2;
        return mesh;
    }

    private _getLights(): Array<THREE.PointLight> {
        const intensity = 2.5;
        const distance = 100;
        const decay = 2.0;
        const sphere = new THREE.SphereBufferGeometry( 0.25, 16, 8 );

        const pointLightArray: Array<THREE.PointLight> = [];

        LightsSettings.forEach((setting: LightSetting) => {
            const light =  this._getLight(setting.color, intensity, distance, decay, sphere);
            pointLightArray.push(light);
        });

        return pointLightArray;
    }

    private _getRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer( {antialias: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        return renderer;
    }

    private _getGalleryPicturesMeshes(): Array<THREE.Mesh> {
        const pictureMetadata: Array<PhotoMetadata> = Calligraphy.concat(Drawings);

        return pictureMetadata.map((metadata: PhotoMetadata) => {
            const pictureTexture = new THREE.TextureLoader().load(metadata.path);
            const pictureGeometry = new THREE.BoxBufferGeometry(15, 15, 15);
            const pictureMaterial = new THREE.MeshBasicMaterial( {map: pictureTexture, transparent: true, opacity: 0.5} );
            const pictureMesh = new THREE.Mesh(pictureGeometry, pictureMaterial);
            pictureMesh.position.x = metadata.position.x;
            pictureMesh.position.y = metadata.position.y;
            pictureMesh.position.z = metadata.position.z;
            (pictureMesh as any).onMeshClickCallback = (galleryPicture: THREE.Mesh) => {
                this._highlightGalleryPicture(galleryPicture);
                this._setDescriptionAndTitle(metadata);
            }

            pictureMesh.matrixAutoUpdate = false;
            pictureMesh.updateMatrix();
            return pictureMesh;
        });
    }

    private _highlightGalleryPicture(galleryPicture: THREE.Mesh): void {
        (galleryPicture.material as any).opacity = 1;
        setTimeout(() => {
            (galleryPicture.material as any).opacity = 0.9;
        }, 1400);
        setTimeout(() => {
            (galleryPicture.material as any).opacity = 0.8;
        }, 1435);
        setTimeout(() => {
            (galleryPicture.material as any).opacity = 0.7;
        }, 1470);
        setTimeout(() => {
            (galleryPicture.material as any).opacity = 0.6;
        }, 1505);
    }

    private _setDescriptionAndTitle(metadata: PhotoMetadata): void {
        this._galleryTitleRef.innerText = metadata.title;
        this._galleryDescriptionRef.innerText = metadata.description;
    }

    private _addMeshToScene(): void {
        this._scene.add(this._groundMesh);
    }

    private _addPicturesToScene(): void {
        this._galleryPicturesMeshes.forEach((p: THREE.Mesh) => {
            this._scene.add(p);
        });
    }

    private _addLightsToScene(): void {
        this._lights.forEach((light: THREE.PointLight) => {
            this._scene.add(light);
        });

        const dLight = this._getDirectionalLight();
        this._scene.add(dLight);
    }

    private _getControls(): OrbitControls {
        const controls = new OrbitControls(this._camera, this._renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        controls.minDistance = 120;
        controls.maxDistance = 200;
        controls.maxPolarAngle = Math.PI / 2;
        return controls;
    }

    private _addGalleryPictureMeshClickListener(): void {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        this._galleryRef.addEventListener(
            'click',
            (event: MouseEvent) => {
                this._onGalleryPictureClicked(event, raycaster, mouse);
            }
        );
    }

    private _getGroundTexture(): THREE.Texture {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(galleryTexture);
        texture.repeat.set(20, 10);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.encoding = THREE.sRGBEncoding;
        return texture;
    }

    private _getLight(color: number, intensity: number, distance: number, decay: number, sphere: THREE.SphereBufferGeometry): THREE.PointLight {
        const light = new THREE.PointLight(color, intensity, distance, decay);
        light.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: color })));
        return light;
    }

    private _getDirectionalLight(): THREE.DirectionalLight {
        const dLight = new THREE.DirectionalLight(0xffffff, 0.05 );
        dLight.position.set(0.5, 1, 0).normalize();
        return dLight
    }

    private _onGalleryPictureClicked (
        event: MouseEvent,
        raycaster: THREE.Raycaster,
        mouse: THREE.Vector2
    ): void {
        event.preventDefault();

        const pointerPosition: XYPosition = {
            x: event.clientX,
            y: event.clientY
        }
        mouse.x = (pointerPosition.x / this._renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - (pointerPosition.y / this._renderer.domElement.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, this._camera);

        const intersects = raycaster.intersectObjects(this._galleryPicturesMeshes);

        if (intersects.length > 0) {
            const galleryPicture: THREE.Mesh = intersects[0].object as THREE.Mesh;
            (intersects[0].object as any).onMeshClickCallback(galleryPicture);
        }
    }

    private _updateLightsPosition(): void {
        const time = Date.now() * 0.00025;
        const diameter = 80;
        const height = 10;

        LightsSettings.forEach((setting: LightSetting, index: number) => {
            this._lights[index].position.x = Math.sin(time * setting.xMultiplayer) * diameter;
            this._lights[index].position.z = Math.cos(time * setting.zMultiplayer) * diameter;
            this._lights[index].position.y = Math.cos(time * setting.yMultiplayer) * height + height;
        });

        if (this._controls) {
            this._controls.update();
        }
        this._renderer.render(this._scene, this._camera);
    }
}