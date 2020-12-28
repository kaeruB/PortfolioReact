export interface CarrierData {
    place: PLACES;
    link: string;
    time: string;
    technologyIcons: Array<string>;
    category: 'work' | 'education';
    position: string;
    description: Array<DescriptionLinePart>;
    technology: Array<string>;
}

export interface DescriptionLinePart {
    text: string;
    highlighted: boolean;
}

export enum PLACES {
    NANGOK,
    AKAMAI,
    AGH,
    ANDEA,
    JLPT
}

export type JobDescriptionProps = {
    data: CarrierData
}