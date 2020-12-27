import {LightSetting, PhotoMetadata} from "../../../model/Gallery";

import jackie from "../../../assets/img/gallery/jackie.jpg";
import gem from "../../../assets/img/gallery/gem.jpg";
import suk from "../../../assets/img/gallery/suk.jpg";
import hwa from "../../../assets/img/gallery/hwa.jpg";
import gackt from "../../../assets/img/gallery/gackt.jpg";
import rei from "../../../assets/img/gallery/rei.jpg";
import reiwa from "../../../assets/img/gallery/reiwa.jpg";
import ronbun from "../../../assets/img/gallery/ronbun.jpg";
import sasaki from "../../../assets/img/gallery/sasaki.jpg";
import chou from "../../../assets/img/gallery/chou.jpg";


export const LightsSettings: Array<LightSetting> = [
    {
        color: 0xF20544,
        xMultiplayer: 1,
        yMultiplayer: 0.9,
        zMultiplayer: 0.1
    },
    {
        color: 0xF235C0,
        xMultiplayer: 0.9,
        yMultiplayer: 0.9,
        zMultiplayer: 0.2
    },
    {
        color: 0x5503A6,
        xMultiplayer: 0.8,
        yMultiplayer: 0.9,
        zMultiplayer:0.3
    },
    {
        color: 0xF5C400,
        xMultiplayer: 0.7,
        yMultiplayer: 0.9,
        zMultiplayer: 0.4
    },
    {
        color: 0xF23E2E,
        xMultiplayer: 0.6,
        yMultiplayer: 0.9,
        zMultiplayer:0.5
    },
    {
        color: 0xD0FF22,
        xMultiplayer: 0.5,
        yMultiplayer: 0.9,
        zMultiplayer: 0.6
    },
    {
        color: 0xEB8706,
        xMultiplayer: 0.4,
        yMultiplayer: 0.9,
        zMultiplayer: 0.7
    },
    {
        color: 0x00FF47,
        xMultiplayer: 0.3,
        yMultiplayer: 0.5,
        zMultiplayer: 0.8
    },
    {
        color: 0x06C0FF,
        xMultiplayer: 0.2,
        yMultiplayer: 0.5,
        zMultiplayer:0.9
    },
    {
        color: 0xDFF0D8,
        xMultiplayer: 0.1,
        yMultiplayer: 0.5,
        zMultiplayer: 1
    },
    {
        color: 0xE8DDA2,
        xMultiplayer: 1.1,
        yMultiplayer: 0.5,
        zMultiplayer:0.1
    },
    {
        color: 0xFFDCCC,
        xMultiplayer: 1.2,
        yMultiplayer: 0.5,
        zMultiplayer: 0.3
    },
    {
        color: 0xC5D6E8,
        xMultiplayer: 1.3,
        yMultiplayer: 0.5,
        zMultiplayer:0.2
    },
    {
        color: 0xC8FFE6,
        xMultiplayer: 1.4,
        yMultiplayer: 0.5,
        zMultiplayer: 0.3
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
        description: "Movies with Jackie Chan is my childhood. My first attempt to draw with Charcoal.",
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
        description: "A Chinese singer. My first attempt to draw a woman's portrait. Pencil.",
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
        title: 'Jang Keun-Suk',
        description: "Korean actor. I tried to add some colors to my drawing (but it wasn't for me).",
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
        description: 'Korean singer. Pencil.',
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
        description: 'Japanese singer. Why does he keeps looking younger?',
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
        title: 'Chou - intestines',
        description: "Meaning: intestines. I've had digestion problems since junior high school but thanks to Japanese food I'm getting healthier. ありがとう！",
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
        title: 'Rei - Zero',
        description: "Just nothing, just zero:) But it looks cool, isn't it?",
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
        title: 'Reiwa - time era',
        description: 'Current time era in Japan.',
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
        title: 'Ronbun - thesis',
        description: "Painted in my last year of university as a New Year's wish - I ended my thesis on time!",
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
        title: 'Sasaki - name',
        description: "Some mysterious Japanese name of samurai's family. Check out kaziu.jp to learn more:)",
        position: {
            x: -70,
            y: 14,
            z: -60
        }
    }
];