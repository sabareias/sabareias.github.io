import { type FC} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import { FiGithub } from 'react-icons/fi'
import { type ProjectObject } from '../../data/types'

// Project card component
const ProjectCard: FC<ProjectObject> = props => {
    const liveLink = props.links?.find((link) => link.linkType === 'live');
    return (
        <Card className="mb-4 shadow">
            <a href={props.headerLink} aria-label={`Visit ${props.name} on GitHub`} target="_blank">
            <Card.Img
            variant="top" 
            src={props.imageSrc} 
            className="rounded img-thumbnail"
            alt={`Preview image of ${props.name} project`}
            /></a>
            <Card.Body>
                
                <Card.Title className="fw-bold">{props.name}</Card.Title>
                <Card.Subtitle className="text-muted  mb-3 text-uppercase">{props.type}</Card.Subtitle>
                <Stack direction="horizontal" gap={2} className="mb-3 justify-content-center">
                    {props.tags}
                </Stack>
                <Card.Text className="text-muted">
                {props.description}
                </Card.Text>
                
                <Button variant="primary" aria-label={`Read more about ${props.name}`} href={`#/projects/${props.id}`}>Read More</Button>
                <Button variant="outline-secondary" aria-label={`Visit ${props.name} on GitHub`} href={props.headerLink} className="ms-2" target="_blank"><FiGithub /></Button>
                {liveLink && (
                    <Button variant="outline-secondary" aria-label={`Visit ${props.name} live`} href={liveLink.link} target="_blank" className='ms-2'>{liveLink.icon}</Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard