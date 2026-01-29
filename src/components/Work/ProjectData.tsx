import {
    SQLiteBadge,
    ExpressBadge,
    ReactBadge,
    CPPBadge
} from './TechBadges'
import { FiGithub } from 'react-icons/fi'
{/* import { FiGithub, FiLink } from 'react-icons/fi' */}
import { type ReactElement } from 'react'

interface LinkObject {
    link: string,
    icon: ReactElement
}

interface ProjectData {
    name: string,
    type: string,
    id: string,
    tags: Array<ReactElement>,
    imageSrc: string,
    tagline: string,
    description: string,
    links?: Array<LinkObject>,
    headerLink: string
}

export const projectData: ProjectData[] = [
    {
        name: 'Knit Note',
        id: 'knitnote',
        type: 'Web App',
        tagline: 'A fiber-arts project tracker',
        tags: [<ReactBadge />, <ExpressBadge />, <SQLiteBadge />],
        imageSrc: 'projects/KnitNote/KnitNote.png',
        description:
            'A fiber-arts project tracker with full CRUD functionality.',
        links: [
            {
                link: 'https://github.com',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/',
    },
    {
        name: 'PomoPet',
        id: 'pomopet',
        type: 'C++ Application',
        tagline: 'Virtual pet productivity app',
        tags: [<CPPBadge />],
        imageSrc: 'projects/PomoPet/PomoPet.png',
        description:
            'A text-based productivity app that combines virtual pet simulation with a Pomodoro timer where users grow their pets by focusing.',
        links: [
            {
                link: 'https://github.com/',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/',
    }
]
