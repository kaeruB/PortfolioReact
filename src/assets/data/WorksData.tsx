import {BubbleModel} from "../../model/BubbleModel";

export const WORKS_DATA_CATEGORIES = {
    ART: 'Art',
    FRONTEND: 'Frontend',
    BACKEND: 'Backend'
};

export const WORKS_DATA: BubbleModel[] = [
    {
        category: WORKS_DATA_CATEGORIES.ART,
        description: 'Aaaaaaaaaaaa',
        picturePath: '',
        cx: 100,
        cy: 100,
        r: 20
    },
    {
        category: WORKS_DATA_CATEGORIES.BACKEND,
        description: 'Bbbbbbbbbbbbbbbbb',
        picturePath: '',
        cx: 20,
        cy: 100,
        r: 20
    },
    {
        category: WORKS_DATA_CATEGORIES.FRONTEND,
        description: 'Ffffffffffffffffffff',
        picturePath: '',
        cx: 100,
        cy: 200,
        r: 20
    }
];
