import { useEffect, useState } from "react";
import { type ProjectObject } from "../../data/types";
import ReactMarkdown from "react-markdown";
import { FiGithub } from 'react-icons/fi'
import { Button, Container } from "react-bootstrap";

interface ProjectContentProps {
    projectData: ProjectObject | null;
}

// Project content
function ProjectContent(props: ProjectContentProps) {
    const projectData = props.projectData;
    const [markdown, setMarkdown] = useState<string>('');
    
    // import markdown file based on project id
    useEffect(() => {
        import(`../../data/ProjectMD/${projectData?.id}.md`)
            .then((res) => {
                fetch(res.default)
                    .then((response) => response.text())
                    .then((response) => setMarkdown(response))
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    });

    
    return (
        <>
        <Container className="py-4 mb-5 text-start d-flex flex-column justify-content-center align-items-center">
            
            <div className="mt-4 row justify-content-center g-3 col-lg-6 col-md-8 col-sm-12">
                
                {/* displays video if videoSrc exists, else displays image */}
                {projectData?.videoSrc ? (
                    <video controls className="img-fluid my-3 rounded-3 shadow">
                        <source src={projectData.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    
                    <a href={projectData?.headerLink} aria-label={`Visit ${projectData?.name} on GitHub`} target="_blank">
                        <img src={projectData?.imageSrc} alt={`${projectData?.name} project screenshot`} className="img-fluid my-3 rounded-3 shadow"/>
                    </a>
                    
                )}

                <span className="fw-bold text-uppercase mb-0" style={{color: "#756a83"}}>{projectData?.type}</span>
                <div className="d-flex col align-items-center gap-3 mt-0">
                    <h2 className="display-5 ">{projectData?.name}</h2>

                    <Button variant="outline-secondary " aria-label={`Visit ${projectData?.name} on GitHub`} href={projectData?.headerLink} className="ms-2" target="_blank"><FiGithub /></Button>
                </div>
                <hr />
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </Container>
            
                

        </>
    )
}
export default ProjectContent;