import { type FC, type ReactElement } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';

interface ProjectCardProps {
    name: string
    type: string
    id: string
    tags: Array<ReactElement>
    imageSrc: string
    description: string
    links?: Array<ReactElement>
    headerLink: string
}

const ProjectCard: FC<ProjectCardProps> = props => {
    return (
        <Card className="mb-4 shadow">
            <Card.Img
            variant="top" 
            src={props.imageSrc} 
            className="rounded img-thumbnail"
            />
            <Card.Body>
                {props.links}
                <Card.Title className="fw-bold">{props.name}</Card.Title>
                <Card.Subtitle className="text-muted mb-3 text-uppercase">{props.type}</Card.Subtitle>
                <Stack direction="horizontal" gap={2} className="mb-3 justify-content-center">
                    {props.tags}
                </Stack>
                <Card.Text>
                {props.description}
                </Card.Text>
                
                <Button variant="primary" aria-label={`Read more about ${props.name}`} href={`#/projects/${props.id}`}>Read More</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard