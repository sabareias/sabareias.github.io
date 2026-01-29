import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

import { Link } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

// responsive navigation bar component
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
            <Navbar.Brand href="/">Sabrina Areias</Navbar.Brand>

            {/* theme toggle button for smaller screens */}
            <Button variant="outline-primary" onClick={toggleTheme} className="d-lg-none ms-auto me-2"><i className="bi bi-moon-fill theme-toggle-icon"></i></Button>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="about" smooth duration={500} spy offset={-70} activeClass="active" className="navLink">About</Nav.Link>
                    <Nav.Link as={Link} to="work" smooth duration={500} spy offset={-70} activeClass="active" className="navLink" >Work</Nav.Link>
                    {/* contact drop-down for large screens */}
                    <NavDropdown title="Contact" id="collasible-nav-dropdown" className="d-none d-lg-block">
                        <NavDropdown.Item href="https://www.linkedin.com/in/sabrinaareias" target="_blank">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/sabareias" target="_blank">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="mailto:sabareias@gmail.com">Email</NavDropdown.Item>
                    </NavDropdown>
                    {/* contact links for smaller screens */}
                    <Nav.Link href="#contact" className="d-lg-none">Contact</Nav.Link>
                </Nav>

                <Nav>
                    {/* theme toggle button for large screens */}
                    <Button variant="outline-primary" onClick={toggleTheme} className="me-2 d-none d-lg-block"><i className="bi bi-moon-fill theme-toggle-icon"></i></Button>

                </Nav>
                
            </Navbar.Collapse>

        </Container>
        </Navbar>
        
    );
}

export default NavBar;