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

    constructor(props: any) {
        super(props);

        this.state = {
            // photos:
        };
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
                    {/*{ this.getCircles(drawings) }*/}
                    {/*{ this.getRectangle(calligraphy) }*/}

                    <div className="works__images-container">
                        {this.getPicturesGrid()}
                    </div>
                </div>
            </div>
        );
    }
}

export default WorksPage;
