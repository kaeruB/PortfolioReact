import jackie from "../assets/img/jackie2.png";
import gem from "../assets/img/gem.png";
import suk from "../assets/img/jang_keun_suk2.png";
import hwa from "../assets/img/jung_yong_hwa3.png";
import gackt from "../assets/img/gackt.png";
import rei from "../assets/img/rei.png";
import reiwa from "../assets/img/reiwa.jpg";
import ronbun from "../assets/img/ronbun.jpg";
import sasaki from "../assets/img/sasaki.png";
import chou from "../assets/img/chou.png";

export interface LightSetting {
    color: number;
    xMultiplayer: number;
    yMultiplayer: number;
}

export interface PhotoStyle {
    top: string;
    left: string;
}

export interface PhotoMetadata {
    path: string;
    style: PhotoStyle;
    title: string;
    position: {
        x: number,
        y: number,
        z: number
    }
}

export const drawings: Array<PhotoMetadata> = [
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
            z: 60
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
            y: 4,
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
            y: 4,
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
            y: 4,
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
            y: 4,
            z: 30
        }
    }
];

export const calligraphy: Array<PhotoMetadata> = [
    {
        path: chou,
        style: {
            top: '43vh',
            left: '78vw'
        },
        title: 'Chou',
        position: {
            x: 0,
            y: 4,
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
            x: 0,
            y: 4,
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
            x: 50,
            y: 4,
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
            x: -60,
            y: 4,
            z: -60
        }
    }
];