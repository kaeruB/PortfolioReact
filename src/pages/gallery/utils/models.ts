export interface LightSetting {
    color: number;
    xMultiplayer: number;
    yMultiplayer: number;
    zMultiplayer: number;
}

export interface PhotoMetadata {
    path: string;
    title: string;
    description: string;
    position: {
        x: number,
        y: number,
        z: number
    }
}

export interface XYPosition {
    x: number;
    y: number;
}