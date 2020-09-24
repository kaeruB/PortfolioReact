import React, { Component} from 'react';
import jackie from '../assets/img/jackie2.png';
import chou from '../assets/img/chou.png';
import gem from '../assets/img/gem.png';
import suk from '../assets/img/jang_keun_suk2.png';
import rei from '../assets/img/rei.png';
import reiwa from '../assets/img/reiwa.jpg';
import ronbun from '../assets/img/ronbun.jpg';
import sasaki from '../assets/img/sasaki.png';
import hwa from '../assets/img/jung_yong_hwa3.png';
import gackt from '../assets/img/gackt.png';

interface PhotoStyle {
    top: string;
    left: string;
    border: string;
}

interface PhotoMetadata {
    path: string;
    style: PhotoStyle;
}

type WorksPageState = {
    // photos: PhotoMetadata;
}

const drawings: Array<PhotoMetadata> = [
    {
        path: jackie,
        style: {
            top: '26vh',
            left: '17vw',
            border: '6px solid white'
        }
    },
    {
        path: gem,
        style: {
            top: '58vh',
            left: '9vw',
            border: '6px solid white'
        }
    },
    {
        path: suk,
        style: {
            top: '81vh',
            left: '27vw',
            border: '6px solid white'
        }
    },
    {
        path: hwa,
        style: {
            top: '50vh',
            left: '30vw',
            border: '6px solid white'
        }
    },
    {
        path: gackt,
        style: {
            top: '23vh',
            left: '40vw',
            border: '6px solid white'
        }
    }
];
const calligraphy: Array<PhotoMetadata> = [
    {
        path: chou,
        style: {
            top: '28vh',
            left: '74vw',
            border: '6px solid black'
        }
    },
    {
        path: rei,
        style: {
            top: '77vh',
            left: '71vw',
            border: '6px solid black'
        }
    },
    {
        path: reiwa,
        style: {
            top: '81vh',
            left: '41vw',
            border: '6px solid black'
        }
    },
    {
        path: ronbun,
        style: {
            top: '50vh',
            left: '59vw',
            border: '6px solid black'
        }
    },
    {
        path: sasaki,
        style: {
            top: '18vh',
            left: '50vw',
            border: '6px solid black'
        }
    }
];

export class WorksPage extends Component<{}, WorksPageState> {

    constructor(props: any) {
        super(props);

        this.state = {
            // photos:
        };
    }

    componentDidMount(): void {

    }

    getPictures(pictures: Array<PhotoMetadata>) {
        return (
            pictures.map((photo: PhotoMetadata) =>
                <div className="works__circle" style={{ top: photo.style.top, left: photo.style.left }}>
                    {/*style={{border: photo.style.border }}*/}
                    <img src={photo.path} alt="Jackie Chan" className="works__image" />
                </div>
            )
        );
    }

    render() {
        return (
            <div>
                <div className='works'>
                    {/*<div className="width-keeper">*/}
                        <div className="works__header">
                            <span className="works__header--title">meanwhile, in my free time...</span>
                        </div>
                        { this.getPictures(drawings) }
                        <div className='works__title works__title--right works__title--white'>
                            <span>Pencil portrait</span>
                        </div>
                    {/*</div>*/}
                </div>
                <div className='works'>
                    <div className="width-keeper">
                        { this.getPictures(calligraphy) }
                        <div className='works__title works__title--left works__title--black'>
                            <span>Japanese calligraphy</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorksPage;
