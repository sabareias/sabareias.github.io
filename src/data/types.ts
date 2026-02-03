import { type ReactElement } from 'react';

export interface LinkObject {
    link: string;
    icon: ReactElement;
}

export interface ProjectObject {
    name: string;
    type: string;
    id: string;
    tags?: Array<ReactElement>;
    imageSrc: string;
    videoSrc?: string;
    tagline: string;
    description: string;
    links?: Array<LinkObject>;
    headerLink: string;
}