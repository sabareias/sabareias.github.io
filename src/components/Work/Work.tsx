import '../../App.css'
import { Fade } from "react-awesome-reveal";
import { Element } from 'react-scroll';


import { projectData } from './ProjectData'
import ProjectCard from './ProjectCard';

// Projects and work experience page component
function Work() {
    return (
    <>
        <Element name="work" />
        <div className="container py-4 mb-5">
            <Fade triggerOnce><h2 className="display-5 ">Projects</h2></Fade>
            <div className="mt-4 row justify-content-center g-3">
                    {projectData.map((project) => (
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-stretch" key={project.id}>
                            <ProjectCard 
                                name={project.name || ''}
                                type={project.type || ''}
                                id={project.id || ''}
                                tags={project.tags || ''}
                                imageSrc={project.imageSrc || ''}
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
    </>
    )
}
export default Work;