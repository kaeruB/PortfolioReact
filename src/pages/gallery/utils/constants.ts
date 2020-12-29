import {LightSetting, PhotoMetadata} from "./models";

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
import eevee from "../../../assets/img/gallery/eevee.jpg";
import me from "../../../assets/img/gallery/me.jpg";
import nisemono1 from "../../../assets/img/gallery/nisemono1.jpg";

export const CONTROLS_MAX_DISTANCE = 200;
export const CONTROLS_MIN_DISTANCE = 100;

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
        title: 'Jackie Chan',
        description: "Movies with Jackie Chan is my childhood. My first attempt to draw with Charcoal.",
        position: {
            x: 0.1,
            y: 0.5,
            z: 0.14
        }
    }
    ,
    {
        path: gem,
        title: 'G.E.M.',
        description: "A Chinese singer. My first attempt to draw a woman's portrait. Pencil.",
        position: {
            x: -0.3,
            y: 0.2,
            z: 0.3
        }
    },
    {
        path: suk,
        title: 'Jang Keun-Suk',
        description: "Korean actor. I tried to add some colors to my drawing (but it wasn't for me). I've got professional crayons from a friend (thanks!)",
        position: {
            x: 0.3,
            y: 0.1,
            z: -0.3
        }
    },
    {
        path: hwa,
        title: 'Jung Yong-Hwa',
        description: 'Korean singer. Pencil.',
        position: {
            x: -0.3,
            y: 0,
            z: -0.3
        }
    },
    {
        path: gackt,
        title: 'Gackt',
        description: 'Japanese singer. Why does he keeps looking younger? Pencil.',
        position: {
            x: -0.4,
            y: 0.3,
            z: -0.2
        }
    },
    {
        path: eevee,
        title: 'Eevee',
        description: "Eevee - pokemon. Crayons for kids, I couldn't afford good staff in junior high school:)",
        position: {
            x: 0.7,
            y: -0.2,
            z: 0.2
        }
    },
    {
        path: me,
        title: 'Me',
        description: 'My first steps using Illustrator. And my favorite red blouse with cats.',
        position: {
            x: 0,
            y: -0.25,
            z: 0.1
        }
    },
    {
        path: nisemono1,
        title: 'Cat',
        description: "I love cat's but when I touch them my hand gets swollen and I sneeze... (allergy). Illustrator.",
        position: {
            x: -0.7,
            y: -0.2,
            z: 0.1
        }
    }
];

export const Calligraphy: Array<PhotoMetadata> = [
    {
        path: chou,
        title: 'Chou - intestines',
        description: "Meaning: intestines. I've had digestion problems since junior high school but thanks to Japanese food I'm getting healthier. ありがとう！",
        position: {
            x: -0.2,
            y: 0.5,
            z: 0
        }
    },
    {
        path: rei,
        title: 'Rei - Zero',
        description: "Just nothing, just zero:) But it looks cool, isn't it?",
        position: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    {
        path: reiwa,
        title: 'Reiwa - time era',
        description: 'Current time era in Japan.',
        position: {
            x: 0,
            y: 0.2,
            z: -0.1
        }
    },
    {
        path: ronbun,
        title: 'Ronbun - thesis',
        description: "Painted in my last year of university as a New Year's wish - I ended my thesis on time!",
        position: {
            x: 0.3,
            y: 0.1,
            z: 0.09
        }
    },
    {
        path: sasaki,
        title: 'Sasaki - name',
        description: "Some mysterious Japanese name of samurai's family. Check out kaziu.jp to learn more:)",
        position: {
            x: 0.35,
            y: 0.35,
            z: -0.1
        }
    }
];