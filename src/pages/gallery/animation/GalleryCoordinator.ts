import * as THREE from "three";
import {COLOR} from "../../../utils/constants";
import galleryTexture from "../../../assets/textures/dry_ground4.jpg";
import {LightSetting, PhotoMetadata} from "../../../model/Gallery";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Calligraphy, Drawings, LightsSettings} from "../utils/constants";

export default class GalleryCoordinator {
    private _galleryRef: HTMLDivElement;

    private _camera: THREE.PerspectiveCamera;
    private _scene: THREE.Scene;
    private _groundMesh: THREE.Mesh;
    private _lights: Array<THREE.PointLight>;
    private _renderer: THREE.WebGLRenderer;
    private _galleryPicturesMeshes: Array<THREE.Mesh>;
    private _controls: OrbitControls | null = null;

    public constructor(
        galleryRef: HTMLDivElement
    ) {
        this._galleryRef = galleryRef;

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
            const pictureMaterial = new THREE.MeshBasicMaterial( {map: pictureTexture} );
            const pictureMesh = new THREE.Mesh(pictureGeometry, pictureMaterial);
            pictureMesh.position.x = metadata.position.x;
            pictureMesh.position.y = metadata.position.y;
            pictureMesh.position.z = metadata.position.z;

            (pictureMesh as any).onMeshClickCallback = (mouse: THREE.Vector2) => this._showGalleryPicturePopup(metadata, mouse);

            pictureMesh.matrixAutoUpdate = false;
            pictureMesh.updateMatrix();
            return pictureMesh;
        });
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
        light.add(new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: color })));
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

        mouse.x = (event.clientX / this._renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - (event.clientY / this._renderer.domElement.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, this._camera);

        const intersects = raycaster.intersectObjects(this._galleryPicturesMeshes);

        if (intersects.length > 0) {
            (intersects[0].object as any).onMeshClickCallback(mouse);
        }
    }

    private _showGalleryPicturePopup(metadata: PhotoMetadata, mouse: THREE.Vector2): void {
        console.log('clicked', metadata, mouse);
        const galleryPictureDescriptionDiv = document.createElement('div');
        galleryPictureDescriptionDiv.innerText = 'test ' + metadata.title;
        galleryPictureDescriptionDiv.style.position = 'absolute';
        galleryPictureDescriptionDiv.style.top = `${mouse.y}px`;
        galleryPictureDescriptionDiv.style.left = `${mouse.x}px`;

        this._galleryRef.appendChild(galleryPictureDescriptionDiv);
    }

    private _updateLightsPosition(): void {
        const time = Date.now() * 0.00025;
        const d = 80;

        LightsSettings.forEach((setting: LightSetting, index: number) => {
            this._lights[index].position.x = Math.sin(time * setting.xMultiplayer) * d;
            this._lights[index].position.z = Math.cos(time * setting.yMultiplayer) * d;
        });

        if (this._controls) {
            this._controls.update();
        }
        this._renderer.render(this._scene, this._camera);
    }
}