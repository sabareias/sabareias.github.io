import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectData as allProjectData } from "../../data/ProjectData";
import { type ProjectObject } from "../../data/types";
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Footer from "../../components/global/Footer";
import ProjectContent from "./ProjectContent";
import NotFound from "../NotFound";

// Project page
function ProjectPage() {
    const { projectId } = useParams();
    const [projectData, setProjectData] = useState<ProjectObject | null>(null);

    useEffect(() => {
        
        allProjectData.forEach((project) => {
            if (project['id'] === projectId) {
                setProjectData(project);
            }
    })
    }, []);

    return (
        <>
            { !projectData ? ( // if projectData is null, show NotFound page
                <NotFound />
            ) : (
                <>
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: "/" }} aria-label="Homepage">Home</Breadcrumb.Item>
                        <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: "/projects" }} aria-label="Projects page">Projects</Breadcrumb.Item>
                        <Breadcrumb.Item active>{projectData.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <ProjectContent projectData={projectData} />
                    <Footer />
                </>
            )}
        </>
    )
}
export default ProjectPage;