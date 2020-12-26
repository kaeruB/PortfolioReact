

export interface LightSetting {
    color: number;
    xMultiplayer: number;
    yMultiplayer: number;
    zMultiplayer: number;
}

export interface PhotoStyle {
    top: string;
    left: string;
}

export interface PhotoMetadata {
    path: string;
    style: PhotoStyle;
    title: string;
    description: string;
    position: {
        x: number,
        y: number,
        z: number
    }
}
