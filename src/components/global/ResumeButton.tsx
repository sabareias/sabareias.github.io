import Button from 'react-bootstrap/esm/Button'
import resumePDF from '../../assets/SabrinaAreias_Resume.pdf';
import { FiArrowUpRight } from "react-icons/fi";

{/* open resume (new tab) button */}
function ResumeButton() {
    return (
        <>
        <a target="_blank" href={resumePDF} >
            <Button variant="outline-secondary" className="mt-4">
                Resume&ensp;<FiArrowUpRight />
            </Button>
        </a>
        </>
    );
}

export default ResumeButton;