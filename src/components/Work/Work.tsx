import '../../App.css'
import { Fade } from "react-awesome-reveal";
import { Element } from 'react-scroll';


import { projectData } from './ProjectData'
import ProjectCard from './ProjectCard';

// Pprojects and work experience page component
function Work() {
    return (
    <>
        <Element name="work" />
        <div className="container py-4 ">
            <Fade><h2 className="display-5">Projects</h2></Fade>
            <div className="mt-4 d-flex row justify-content-center align-items-center g-3">
                <div className="col-lg-6 ">
                    {projectData.map((project) => (
                        <ProjectCard 
                            name={project.name || ''}
                            type={project.type || ''}
                            id={project.id || ''}
                            tags={project.tags || ''}
                            imageSrc={project.imageSrc || ''}
                            description={project.description || ''}
                            links={project.links?.map(linkObj => (
                                <a 
                                    href={linkObj.link}
                                >
                                    {linkObj.icon}
                                </a>
                            ))}
                            headerLink={project.headerLink || ''} 
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    </>
    )
}
export default Work;