import React, { Component} from 'react';
import jackie from '../assets/img/jackie2.png';
// import chou from '../assets/img/chou.png';
import gem from '../assets/img/gem.png';
import suk from '../assets/img/jang_keun_suk2.png';
import rei from '../assets/img/rei.png';
import reiwa from '../assets/img/reiwa.jpg';
import ronbun from '../assets/img/ronbun.jpg';
import sasaki from '../assets/img/sasaki.png';
import hwa from '../assets/img/jung_yong_hwa3.png';
import gackt from '../assets/img/gackt.png';
import {shuffle} from "../utils/functions";
import * as THREE from 'three';
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";

interface PhotoStyle {
    top: string;
    left: string;
}

interface PhotoMetadata {
    path: string;
    style: PhotoStyle;
    title: string;
}

type WorksPageState = {
    // photos: PhotoMetadata;
}

const drawings: Array<PhotoMetadata> = [
    {
        path: jackie,
        style: {
            top: '36vh',
            left: '27vw'
        },
        title: 'Jackie Chan'
    },
    {
        path: gem,
        style: {
            top: '68vh',
            left: '19vw'
        },
        title: 'G.E.M.'
    },
    {
        path: suk,
        style: {
            top: '85vh',
            left: '37vw'
        },
        title: 'Jang Keung-Suk'
    },
    {
        path: hwa,
        style: {
            top: '60vh',
            left: '35vw'
        },
        title: 'Jung Yong-Hwa'
    },
    {
        path: gackt,
        style: {
            top: '33vh',
            left: '44vw'
        },
        title: 'Gackt'
    }
];
const calligraphy: Array<PhotoMetadata> = [
    // {
    //     path: chou,
    //     style: {
    //         top: '43vh',
    //         left: '78vw'
    //     }
    // },
    {
        path: rei,
        style: {
            top: '80vh',
            left: '75vw'
        },
        title: 'Rei Zero'
    },
    {
        path: reiwa,
        style: {
            top: '85vh',
            left: '55vw'
        },
        title: 'Reiwa time era'
    },
    {
        path: ronbun,
        style: {
            top: '60vh',
            left: '62vw'
        },
        title: 'Ronbun thesis'
    },
    {
        path: sasaki,
        style: {
            top: '33vh',
            left: '60vw'
        },
        title: 'Sasaki name'
    }
];

export class WorksPage extends Component<{}, WorksPageState> {
    mount: any;

    constructor(props: any) {
        super(props);

        this.state = {
            // photos:
        };

        // this.start = this.start.bind(this)
        // this.stop = this.stop.bind(this)
        // this.animate = this.animate.bind(this)
    }

    componentDidMount() {
        const clock = new THREE.Clock();

        const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 300 );
        camera.position.set( 0, 15, 150 );
        camera.lookAt( 0, 0, 0 );

        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x1d121f );
        scene.fog = new THREE.Fog( 0x040306, 10, 300 );

        const textureLoader = new THREE.TextureLoader();

        const texture = textureLoader.load( "textures/disturb.jpg" );
        texture.repeat.set( 20, 10 );
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.encoding = THREE.sRGBEncoding;

        const groundMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );
        const objectMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.5, metalness: 1.0 } );

        const mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 800, 400, 2, 2 ), groundMaterial );
        mesh.position.y = - 5;
        mesh.rotation.x = - Math.PI / 2;
        scene.add( mesh );

        const allArtItemsShuffled: Array<PhotoMetadata> = calligraphy.concat(drawings);
        allArtItemsShuffled.forEach((metadata: PhotoMetadata) => {
            const pictureTexture = new THREE.TextureLoader().load(metadata.path);
            const pictureGeometry = new THREE.BoxBufferGeometry(15, 15, 15);
            const pictureMaterial = new THREE.MeshBasicMaterial( {map: pictureTexture} );
            const pictureMesh = new THREE.Mesh(pictureGeometry, pictureMaterial);
            pictureMesh.position.x =  400 * ( 0.5 - Math.random() );
            pictureMesh.position.y =  4; // 50 * ( 0.5 - Math.random() ) + 25;
            pictureMesh.position.z = 200 * ( 0.5 - Math.random() );
            pictureMesh.matrixAutoUpdate = false;
            pictureMesh.updateMatrix();
            scene.add(pictureMesh);
        });


        const intensity = 2.5;
        const distance = 100;
        const decay = 2.0;

        const c1 = 0xff0040, c2 = 0x0040ff, c3 = 0x80ff80, c4 = 0xffaa00, c5 = 0x00ffaa, c6 = 0xff1100;

        const sphere = new THREE.SphereBufferGeometry( 0.25, 16, 8 );

        const light1 = new THREE.PointLight( c1, intensity, distance, decay );
        light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c1 } ) ) );
        scene.add( light1 );

        const light2 = new THREE.PointLight( c2, intensity, distance, decay );
        light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c2 } ) ) );
        scene.add( light2 );

        const light3 = new THREE.PointLight( c3, intensity, distance, decay );
        light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c3 } ) ) );
        scene.add( light3 );

        const light4 = new THREE.PointLight( c4, intensity, distance, decay );
        light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c4 } ) ) );
        scene.add( light4 );

        const light5 = new THREE.PointLight( c5, intensity, distance, decay );
        light5.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c5 } ) ) );
        scene.add( light5 );

        const light6 = new THREE.PointLight( c6, intensity, distance, decay );
        light6.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c6 } ) ) );
        scene.add( light6 );

        const dlight = new THREE.DirectionalLight( 0xffffff, 0.05 );
        dlight.position.set( 0.5, 1, 0 ).normalize();
        scene.add( dlight );



        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement ); // container = this.mount
        renderer.outputEncoding = THREE.sRGBEncoding;

        const controls = new TrackballControls( camera, renderer.domElement );
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.dynamicDampingFactor = 0.15;

        controls.keys = [ 65, 83, 68 ];

        const animate = function () {
            requestAnimationFrame( animate );

            const time = Date.now() * 0.00025;
            const d = 150;

            light1.position.x = Math.sin( time * 0.7 ) * d;
            light1.position.z = Math.cos( time * 0.3 ) * d;

            light2.position.x = Math.cos( time * 0.3 ) * d;
            light2.position.z = Math.sin( time * 0.7 ) * d;

            light3.position.x = Math.sin( time * 0.7 ) * d;
            light3.position.z = Math.sin( time * 0.5 ) * d;

            light4.position.x = Math.sin( time * 0.3 ) * d;
            light4.position.z = Math.sin( time * 0.5 ) * d;

            light5.position.x = Math.cos( time * 0.3 ) * d;
            light5.position.z = Math.sin( time * 0.5 ) * d;

            light6.position.x = Math.cos( time * 0.7 ) * d;
            light6.position.z = Math.cos( time * 0.5 ) * d;

            controls.update(  ); // clock.getDelta()

            renderer.render( scene, camera );
        }
        animate();

        // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new THREE.Mesh( geometry, material );
        // scene.add( cube );
        // camera.position.z = 5;
        // const animate = function () {
        //     requestAnimationFrame( animate );
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render( scene, camera );
        // };
        // animate();
    }

    getCircles(pictures: Array<PhotoMetadata>) {
        return (
            pictures.map((photo: PhotoMetadata) =>
                <div className="works__circle" style={{ top: photo.style.top, left: photo.style.left }}>
                    <img src={photo.path} alt="Jackie Chan" className="works__image" />
                </div>
            )
        );
    }

    getRectangle(pictures: Array<PhotoMetadata>) {
        return (
            pictures.map((photo: PhotoMetadata) =>
                <div className="works__circle" style={{ top: photo.style.top, left: photo.style.left }}>
                    <img src={photo.path} alt="Jackie Chan" className="works__image works__image--rectangle" />
                </div>
            )
        );
    }

    getPicturesGrid() {
        const allArtItemsShuffled: Array<PhotoMetadata> = shuffle(calligraphy.concat(drawings));
        return (
            allArtItemsShuffled.map((metadata: PhotoMetadata) =>
                <div className="works__image-wrapper">
                    <img src={metadata.path} alt="Jackie Chan" className="works__image works__image--rectangle" />
                    <div className="works__image-description">
                        {metadata.title}
                    </div>
                </div>
            )
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
                    <div ref={ref => (this.mount = ref)} />
                </div>
            </div>
        );
    }
}

// <div>
//     <div className='works'>
//         <div className="works__header">
//             <div className="works__header--line">&nbsp;</div>
//             <span className="works__header--title">hobby</span>
//             <div className="works__header--line">&nbsp;</div>
//         </div>
//         {/*{ this.getCircles(drawings) }*/}
//         {/*{ this.getRectangle(calligraphy) }*/}
//
//         <div className="works__images-container">
//             {this.getPicturesGrid()}
//         </div>
//     </div>
// </div>

export default WorksPage;
