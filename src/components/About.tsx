import '../App.css'
import { Fade } from "react-awesome-reveal";
import SabrinaHeadshot from '.././assets/SabrinaHeadshot.jpg';
import { Element } from 'react-scroll';

// 'About Me' page component
function About() {
    return (
    <>
    <Element name="about" />
    <div className="container py-4 mb-5">
        <Fade><h2 className="display-5">About Me</h2></Fade>
        <div className="mt-4 d-flex row justify-content-center align-items-center">
            <div className="col-sm-8 col-md-6 col-lg-4 mb-3 mx-auto">
                <img src={SabrinaHeadshot} alt="Sabrina Areias Headshot" className="img-fluid img-thumbnail rounded-circle" />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 text-start mx-auto">
                <Fade triggerOnce direction="up" cascade delay={100} damping={0.1}>
                <p>👋🏻 Hey, I'm Sabrina and I'm a software developer with a passion for solving puzzles.</p>
                <p>🌱 My programming journey began on Neopets as a tween obsessed with making cool pages for my virtual pets. Teaching myself HTML and CSS at a young age was the first step towards developing my love for creating with code!</p>
                <p>🎓 I graduated from <b>Bristol Community College</b> in December of 2025 with a degree in Computer Information Systems concentrating on <a href="https://catalog.bristolcc.edu/computer-information-systems/computer-programming-and-web-development">Programming and Web Development</a>.</p>
                <p>👩🏻‍💻 I'm experienced in <b>full-stack web development and C++</b>. I scratch my constant itch for learning by trying out new tools and working towards strengthening my skills.</p>
                <p>🧶 Outside of programming, I enjoy knitting, rock climbing, and video games, all of which feed my love for <b>creativity and problem solving</b>.</p>
                </Fade>
            </div>
        </div>
    </div>
    </>
    )
}
export default About