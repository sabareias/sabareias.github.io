import Socials from './Socials'
import { Container } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';
import Button from 'react-bootstrap/esm/Button';
import { SlArrowUp } from "react-icons/sl";

// for scroll to top button
const scrollOptions = {
    duration: 500,
    smooth: true,
};

// footer component
function Footer() {
    return (
        <>
        
        <footer  className="bg-body-tertiary footer">
            
        <Container fluid className="text-center py-4">

                
                <div className="d-flex justify-content-center align-items-middle gap-3">
                    <Socials /> 
                    <Button id="toTop" variant="outline-secondary" className="rounded-circle" onClick={() => animateScroll.scrollToTop(scrollOptions)}><SlArrowUp /></Button>
                </div>
                    <p className="mt-3 text-muted">&copy; {new Date().getFullYear()} Sabrina Areias</p>
            
        </Container>
        </footer>
        </>
    ) 
}

export default Footer
