import Footer from "../../components/global/Footer";
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { projectData } from "../../data/ProjectData";
import ProjectCard from "../../components/Projects/ProjectCard";


// Projects page component
function ProjectsPage() {
    return (
        <>
        <div className="vh-100" style={{marginBottom: "-144px" }}>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: "/" }} aria-label="Homepage">Home</Breadcrumb.Item>
            <Breadcrumb.Item active linkAs={RouterLink} linkProps={{ to: "/projects" }} aria-label="Projects page">Projects</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center">My Projects</h1>
        <div className="container d-flex py-4 justify-content-center align-items-center"> 
            <div className="row justify-content-center g-3">
                {projectData.map((project, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
                        <ProjectCard 
                            key={i}
                            name={project.name || ''}
                            type={project.type || ''}
                            id={project.id || ''}
                            tags={project.tags ?? []}
                            imageSrc={project.imageSrc || ''}
                            videoSrc={project.videoSrc || ''}
                            description={project.description || ''}
                            links={project.links?.map(linkObj => (
                                <a 
                                    key={linkObj.link}
                                    href={linkObj.link}
                                >
                                    {linkObj.icon}
                                </a>
                            ))}
                            headerLink={project.headerLink || ''} 
                        />
                    </div>
                ))}
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}
export default ProjectsPage;