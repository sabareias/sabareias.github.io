{/* imports */}
import { Fade } from "react-awesome-reveal";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import TypedString from './TypedString'
import ResumeButton from './global/ResumeButton'
import Socials from './global/Socials'

// 'Intro' page component
function Intro() {

    // scroll indicator visibility state
    const [showIndicator, setShowIndicator] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            
            if (currentScrollPos === 0) { // show @ top of page
                setShowIndicator(true); 
            } else { // hide otherwise
                setShowIndicator(false); 
            }
        };
        // check scroll position on scroll
        window.addEventListener("scroll", handleScroll);
        // cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
    <>
        <div id="home" className="container py-4 vh-100 d-flex flex-column justify-content-center"> 
            <TypedString strToType="Sabrina Areias" />
            <Fade triggerOnce cascade direction="up" delay={100} damping={0.05}>
                <h2 className="h2 lead text-muted mb-3">Recent grad with experience developing full-stack web and C++ apps</h2>
                <Socials />
                <ResumeButton />
            </Fade>
            
            {/* scroll indicator - only show @ top of page*/}
            {showIndicator && (
            <div className="position-absolute top-90 start-50 translate-middle d-flex flex-column align-items-center">
                <Fade triggerOnce cascade direction="up" delay={100} damping={0.05}>
                    <span className="text-muted">Scroll</span>
                    <BsChevronDoubleDown />
                </Fade>
            </div>
            )}
        </div>
    </>
    )
}

export default Intro
