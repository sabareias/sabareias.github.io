import Button from 'react-bootstrap/esm/Button';
import { FiArrowUpRight } from "react-icons/fi";

{/* open resume (new tab) button */}
function ResumeButton() {
    return (
        <>
        <a href="assets/SabrinaAreias_Resume-CG0aBAXK.pdf" target="_blank" rel="noreferrer">
            <Button variant="outline-secondary" className="mt-4">
                Resume&ensp;<FiArrowUpRight />
            </Button>
        </a>
        </>
    );
}

export default ResumeButton;