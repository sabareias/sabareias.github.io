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

// toggles light vs dark mode theme
    function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
        const htmlElement = document.querySelector("html");
        const themeToggleIcon = event.currentTarget.querySelector(".theme-toggle-icon");
        // confirm htmlElement is not null
        if (htmlElement) {
            const currentTheme = htmlElement.getAttribute("data-bs-theme");
            let newTheme;
            if (currentTheme === "light") {
                themeToggleIcon?.classList.remove("bi-sun-fill");
                themeToggleIcon?.classList.add("bi-moon-fill");
                newTheme = "dark";
            } else {
                themeToggleIcon?.classList.remove("bi-moon-fill");
                themeToggleIcon?.classList.add("bi-sun-fill");
                newTheme = "light";
            }
            htmlElement.setAttribute("data-bs-theme", newTheme);
        }
    }

// footer component
function Footer() {
    return (
        <>
        
        <footer  className="bg-body-tertiary footer">
            
        <Container fluid className="text-center py-4">

                
                <div className="d-flex justify-content-center align-items-middle gap-3">
                    <Socials /> 
                    <Button id="toTop" variant="outline-secondary" className="rounded-circle" onClick={() => animateScroll.scrollToTop(scrollOptions)}><SlArrowUp /></Button>
                    <Button variant="outline-info" onClick={toggleTheme} className="me-2"><i className="bi bi-moon-fill theme-toggle-icon"></i></Button>
                    
                </div>
                    <p className="mt-3 text-muted">&copy; {new Date().getFullYear()} Sabrina Areias</p>
            
        </Container>
        </footer>
        </>
    ) 
}

export default Footer
