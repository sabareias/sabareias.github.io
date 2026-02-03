import {
    SQLiteBadge,
    ExpressBadge,
    ReactBadge,
    CPPBadge
} from '../components/Projects/TechBadges'
import { FiGithub } from 'react-icons/fi'
import { type ProjectObject } from './types'

export const projectData: ProjectObject[] = [
    {
        name: 'Knit Note',
        id: 'knitnote',
        type: 'Web App',
        tagline: 'A fiber-arts project tracker',
        tags: [<ReactBadge key="react" />, <ExpressBadge key="express" />, <SQLiteBadge key="sqlite" />],
        imageSrc: '#/projects/KnitNote/KnitNote.png',
        description:
            'A fiber-arts project tracker with full CRUD functionality.',
        links: [
            {
                link: 'https://github.com/sabareias/knitnote.git',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/sabareias/knitnote.git',
    },
    {
        name: 'PomoPet',
        id: 'pomopet',
        type: 'C++ Application',
        tagline: 'Virtual pet productivity app',
        tags: [<CPPBadge key="cpp" />],
        imageSrc: '#/projects/PomoPet/PomoPet.png',
        description:
            'A text-based productivity app that combines virtual pet simulation with a Pomodoro timer where users grow their pets by focusing.',
        links: [
            {
                link: 'https://github.com/sabareias/pomopet.git',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/sabareias/pomopet.git',
    }
]
