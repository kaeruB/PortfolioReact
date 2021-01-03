import {CarrierData, PLACES} from "./models";

export const CARRIER_DATA: Array<CarrierData> = [
    {
        place: PLACES.NANGOK,
        link: 'https://7659sw.com/',
        time: '2/2020 - present',
        technologyIcons: ['vue', 'angular', 'electron'],
        category: 'work',
        position: 'Front-end developer',
        description: [
            {
                text: 'Developing applications for world-wide known companies. ',
                highlighted: false
            },
            {
                text: 'Building a video chat and a remote work support application. ',
                highlighted: false
            },
            {
                text: 'First job in a Japanese company. ',
                highlighted: true
            }
        ],
        technology: ['VueJS', 'Angular', 'TypeScript', 'Electron']
    },
    {
        place: PLACES.AGH,
        link: 'https://www.agh.edu.pl/en/',
        time: '9/2015 - 7/2020',
        technologyIcons: ['scala', 'java'],
        category: 'education',
        position: 'Master in Computer Science',
        description: [
            {
                text: 'Graduated first and second circle studies at a top Polish university. ',
                highlighted: false
            },
            {
                text: 'Co-author of an article published in Springer.\n',
                highlighted: false
            }
        ],
        technology: ['Scala', 'Java', 'SQL', 'Angular']
    },
    {
        place: PLACES.JLPT,
        link: 'https://www.jlpt.jp/e/',
        time: '12/2019',
        technologyIcons: [ 'japanese' ],
        category: 'education',
        position: 'Japanese-Language Proficiency Test N2',
        description: [
            {
                text: 'Aquired a certification of Japanese-language proficiency at a business level. ',
                highlighted: false
            },
            {
                text: 'JLPT certification starts at N5 (beginner) and ends at N1 (expert). ',
                highlighted: false
            }
        ],
        technology: [ ]
    },
    {
        place: PLACES.AKAMAI,
        link: 'https://www.akamai.com/us/en/about/',
        time: '7/2019 - 12/2019',
        technologyIcons: ['react', 'redux'],
        category: 'work',
        position: 'Front-end developer',
        description: [
            {
                text: 'A summer internship in a ',
                highlighted: false
            },
            {
                text: 'world biggest CDN provider. ',
                highlighted: true
            },
            {
                text: 'Worked with the Mapping Team and developed a highly useful visualization tool.',
                highlighted: false
            }
        ],
        technology: ['ReactJS', 'Redux', 'HighCharts']
    },
    {
        place: PLACES.ANDEA,
        link: 'https://www.andea.com/',
        time: '4/2018 - 2/2019',
        technologyIcons: ['sql', 'javascript'],
        category: 'work',
        position: 'MES developer',
        description: [
            {
                text: 'Developed solutions for Manufacturing Execution Systems using Delmia Apriso tools. Upgraded existing systems. ',
                highlighted: false
            },
            {
                text: 'Won the third place in Andea\'s competition for presenting an idea of a company improvement. ',
                highlighted: false
            }
        ],
        technology: ['CSS', 'JavaScript', 'T-SQL']
    }
];
