import Footer from "../components/global/Footer";
import NavBar from "../components/global/NavBar";
import { Fade } from "react-awesome-reveal";

// '404 Not Found' page component
export default function NotFound() {
    return (
        <>
            <NavBar />
            <Fade triggerOnce >
            <div className="container py-4  d-flex flex-column justify-content-center vh-100 pt-7" style={{marginTop: "-100px", marginBottom: "-76px"}}> 
                <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            </div>
            </Fade>
            <Footer />
        </>
    );
}