import * as THREE from "three";
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";
import {LightsSettings} from "./constants";
import {LightSetting, PhotoMetadata} from "../model/Gallery";

export function getCamera(): THREE.PerspectiveCamera {
    const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 300 );
    camera.position.set( 0, 15, 150 );
    camera.lookAt( 0, 0, 0 );
    return camera;
}

export function getScene(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x1d121f );
    scene.fog = new THREE.Fog( 0x040306, 10, 300 );
    return scene;
}

function getTexture(): any {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load( "textures/disturb.jpg" );
    texture.repeat.set( 20, 10 );
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.encoding = THREE.sRGBEncoding;
    return texture;
}

export function getMesh(): THREE.Mesh {
    const texture = getTexture();
    const groundMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );
    const mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 800, 400, 2, 2 ), groundMaterial );
    mesh.position.y = - 5;
    mesh.rotation.x = - Math.PI / 2;
    return mesh;
}

export function addMeshToScene(mesh: THREE.Mesh, scene: THREE.Scene): void {
    scene.add(mesh);
}

export function addPicturesToScene(pictureMetadata: Array<PhotoMetadata>, scene: THREE.Scene): void {
    pictureMetadata.forEach((metadata: PhotoMetadata) => {
        const pictureTexture = new THREE.TextureLoader().load(metadata.path);
        const pictureGeometry = new THREE.BoxBufferGeometry(15, 15, 15);
        const pictureMaterial = new THREE.MeshBasicMaterial( {map: pictureTexture} );
        const pictureMesh = new THREE.Mesh(pictureGeometry, pictureMaterial);
        pictureMesh.position.x = metadata.position.x;
        pictureMesh.position.y = metadata.position.y;
        pictureMesh.position.z = metadata.position.z;

        pictureMesh.matrixAutoUpdate = false;
        pictureMesh.updateMatrix();
        scene.add(pictureMesh);
    });
}

function getLight(color: number, intensity: number, distance: number, decay: number, sphere: THREE.SphereBufferGeometry): THREE.PointLight {
    const light = new THREE.PointLight(color, intensity, distance, decay );
    light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: color } ) ) );
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
    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    return renderer;
}

export function updateLightsPosition(lights: Array<THREE.PointLight>, controls: TrackballControls, renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
    const time = Date.now() * 0.00025;
    const d = 150;

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
    const controls = new TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.dynamicDampingFactor = 0.15;
    return controls;
}