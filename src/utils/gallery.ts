import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {COLOR, LightsSettings} from "./constants";
import {LightSetting, PhotoMetadata} from "../model/Gallery";
import galleryTexture from "../assets/textures/dry_ground4.jpg";

export function getCamera(): THREE.PerspectiveCamera {
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 300);
    camera.position.set(0, 15, 210);
    camera.lookAt(0, 0, 0);
    return camera;
}

export function getScene(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLOR.color_background_primary);
    scene.fog = new THREE.Fog(COLOR.color_background_primary, 10, 300);
    return scene;
}

function getTexture(): any {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(galleryTexture);
    texture.repeat.set(20, 10);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.encoding = THREE.sRGBEncoding;
    return texture;
}

export function getGroundMesh(): THREE.Mesh {
    const texture = getTexture();
    const groundMaterial = new THREE.MeshPhongMaterial( { color: 0xcfbdd2, map: texture } );
    const mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(800, 800, 2, 2), groundMaterial);
    mesh.position.y = -5;
    mesh.rotation.x = -Math.PI / 2;
    return mesh;
}

export function addMeshToScene(mesh: THREE.Mesh, scene: THREE.Scene): void {
    scene.add(mesh);
}

export function getGalleryPicturesMeshes(pictureMetadata: Array<PhotoMetadata>): Array<THREE.Mesh> {
    return pictureMetadata.map((metadata: PhotoMetadata) => {
        const pictureTexture = new THREE.TextureLoader().load(metadata.path);
        const pictureGeometry = new THREE.BoxBufferGeometry(15, 15, 15);
        const pictureMaterial = new THREE.MeshBasicMaterial( {map: pictureTexture} );
        const pictureMesh = new THREE.Mesh(pictureGeometry, pictureMaterial);
        pictureMesh.position.x = metadata.position.x;
        pictureMesh.position.y = metadata.position.y;
        pictureMesh.position.z = metadata.position.z;

        (pictureMesh as any).onMeshClickCallback = () => { console.log('mesh', metadata); }

        pictureMesh.matrixAutoUpdate = false;
        pictureMesh.updateMatrix();
        return pictureMesh;
    });
}

export function addPicturesToScene(pictures: Array<THREE.Mesh>, scene: THREE.Scene): void {
    pictures.forEach((p: THREE.Mesh) => {
        scene.add(p);
    });
}

function getLight(color: number, intensity: number, distance: number, decay: number, sphere: THREE.SphereBufferGeometry): THREE.PointLight {
    const light = new THREE.PointLight(color, intensity, distance, decay);
    light.add(new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: color })));
    return light;
}

export function getLights(): Array<THREE.PointLight> {
    const intensity = 2.5;
    const distance = 100;
    const decay = 2.0;
    const sphere = new THREE.SphereBufferGeometry( 0.25, 16, 8 );

    const pointLightArray: Array<THREE.PointLight> = [];

    LightsSettings.forEach((setting: LightSetting) => {
       const light =  getLight(setting.color, intensity, distance, decay, sphere);
        pointLightArray.push(light);
    });

    return pointLightArray;
}

export function addLightsToScene(lights: Array<THREE.PointLight>, scene: THREE.Scene): void {

    lights.forEach((light: THREE.PointLight) => {
        scene.add(light);
    });

    const dLight = getDirectionalLight();
    scene.add(dLight);
}

export function getRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer( {antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
}

export function updateLightsPosition(lights: Array<THREE.PointLight>, controls: OrbitControls, renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
    const time = Date.now() * 0.00025;
    const d = 80;

    LightsSettings.forEach((setting: LightSetting, index: number) => {
        lights[index].position.x = Math.sin(time * setting.xMultiplayer) * d;
        lights[index].position.z = Math.cos(time * setting.yMultiplayer) * d;
    });

    controls.update();
    renderer.render(scene, camera);
}

export function getDirectionalLight(): THREE.DirectionalLight {
    const dLight = new THREE.DirectionalLight(0xffffff, 0.05 );
    dLight.position.set(0.5, 1, 0).normalize();
    return dLight
}

export function getControls(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer): any {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.minDistance = 120;
    controls.maxDistance = 200;
    controls.maxPolarAngle = Math.PI / 2;
    return controls;
}

export function onGalleryPictureClicked (
    event: MouseEvent,
    raycaster: THREE.Raycaster,
    mouse: THREE.Vector2,
    renderer: THREE.WebGLRenderer,
    camera: THREE.PerspectiveCamera,
    galleryPicturesMeshes: Array<THREE.Mesh>
): void {
    event.preventDefault();

    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(galleryPicturesMeshes);

    if (intersects.length > 0) {
        (intersects[0].object as any).onMeshClickCallback();
    }
}