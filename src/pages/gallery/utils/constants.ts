import {LightSetting, PhotoMetadata} from "../../../model/Gallery";

import jackie from "../../../assets/img/jackie2.png";
import gem from "../../../assets/img/gem.png";
import suk from "../../../assets/img/jang_keun_suk2.png";
import hwa from "../../../assets/img/jung_yong_hwa3.png";
import gackt from "../../../assets/img/gackt.png";
import rei from "../../../assets/img/rei.png";
import reiwa from "../../../assets/img/reiwa.jpg";
import ronbun from "../../../assets/img/ronbun.jpg";
import sasaki from "../../../assets/img/sasaki.png";
import chou from "../../../assets/img/chou.png";


export const LightsSettings: Array<LightSetting> = [
    {
        color: 0xF20544,
        xMultiplayer: 1,
        yMultiplayer: 0.1
    },
    {
        color: 0xF235C0,
        xMultiplayer: 0.9,
        yMultiplayer: 0.2
    },
    {
        color: 0x5503A6,
        xMultiplayer: 0.8,
        yMultiplayer:0.3
    },
    {
        color: 0xF5C400,
        xMultiplayer: 0.7,
        yMultiplayer: 0.4
    },
    {
        color: 0xF23E2E,
        xMultiplayer: 0.6,
        yMultiplayer:0.5
    },
    {
        color: 0xD0FF22,
        xMultiplayer: 0.5,
        yMultiplayer: 0.6
    },
    {
        color: 0xEB8706,
        xMultiplayer: 0.4,
        yMultiplayer: 0.7
    },
    {
        color: 0x00FF47,
        xMultiplayer: 0.3,
        yMultiplayer: 0.8
    },
    {
        color: 0x06C0FF,
        xMultiplayer: 0.2,
        yMultiplayer:0.9
    },
    {
        color: 0xDFF0D8,
        xMultiplayer: 0.1,
        yMultiplayer: 1
    },
    {
        color: 0xE8DDA2,
        xMultiplayer: 1.1,
        yMultiplayer:0.1
    },
    {
        color: 0xFFDCCC,
        xMultiplayer: 1.2,
        yMultiplayer: 0.3
    },
    {
        color: 0xC5D6E8,
        xMultiplayer: 1.3,
        yMultiplayer:0.2
    },
    {
        color: 0xC8FFE6,
        xMultiplayer: 1.4,
        yMultiplayer: 0.3
    }
];


export const Drawings: Array<PhotoMetadata> = [
    {
        path: jackie,
        style: {
            top: '36vh',
            left: '27vw'
        },
        title: 'Jackie Chan',
        position: {
            x: -10,
            y: 4,
            z: 80
        }
    },
    {
        path: gem,
        style: {
            top: '68vh',
            left: '19vw'
        },
        title: 'G.E.M.',
        position: {
            x: 40,
            y: 2,
            z: 50
        }
    },
    {
        path: suk,
        style: {
            top: '85vh',
            left: '37vw'
        },
        title: 'Jang Keung-Suk',
        position: {
            x: 30,
            y: 6,
            z: 10
        }
    },
    {
        path: hwa,
        style: {
            top: '60vh',
            left: '35vw'
        },
        title: 'Jung Yong-Hwa',
        position: {
            x: -40,
            y: 18,
            z: -40
        }
    },
    {
        path: gackt,
        style: {
            top: '33vh',
            left: '44vw'
        },
        title: 'Gackt',
        position: {
            x: -30,
            y: 8,
            z: 30
        }
    }
];

export const Calligraphy: Array<PhotoMetadata> = [
    {
        path: chou,
        style: {
            top: '43vh',
            left: '78vw'
        },
        title: 'Chou',
        position: {
            x: 0,
            y: 3,
            z: -30
        }
    },
    {
        path: rei,
        style: {
            top: '80vh',
            left: '75vw'
        },
        title: 'Rei Zero',
        position: {
            x: 15,
            y: 16,
            z: 20
        }
    },
    {
        path: reiwa,
        style: {
            top: '85vh',
            left: '55vw'
        },
        title: 'Reiwa time era',
        position: {
            x: -60,
            y: 4,
            z: 50
        }
    },
    {
        path: ronbun,
        style: {
            top: '60vh',
            left: '62vw'
        },
        title: 'Ronbun thesis',
        position: {
            x: 70,
            y: 17,
            z: -60
        }
    },
    {
        path: sasaki,
        style: {
            top: '33vh',
            left: '60vw'
        },
        title: 'Sasaki name',
        position: {
            x: -70,
            y: 14,
            z: -60
        }
    }
];