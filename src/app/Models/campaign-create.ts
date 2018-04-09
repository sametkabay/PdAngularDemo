export interface Image {
    base64: string;
    path: string;
    extension: string;
}

export interface Content {
    base64: string;
    path: string;
    extension: string;
}

export interface Logo {
    base64: string;
    path: string;
    extension: string;
}

export interface Topic {
    topicId: number;
    name: string;
    appId: number;
    appName: string;
    id: number;
}

export interface Place {
    uuid: string;
    major: number;
    minor: number;
    latitude: number;
    longitude: number;
    proximityState: number;
    locationId: number;
    regionId: number;
    beaconId: number;
    locationName: string;
    regionName: string;
    beaconName: string;
    id: number;
}

export interface createObj {
    code: string;
    title: string;
    description: string;
    rule: string;
    image: Image;
    content: Content;
    logo: Logo;
    imageTemplateConfig: string;
    publishTime: Date;
    startDate: Date;
    endDate: Date;
    startTime: Date;
    endTime: Date;
    days: string;
    isActive: boolean;
    topics: Topic[];
    places: Place[];
    creationTime: Date;
    creatorUserId: number;
    id: number;
}