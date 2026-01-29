import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Fade } from "react-awesome-reveal";

// 'Skills' page component
function Skills() {
    return (
    <>
    <div id="skills" className="container py-4">
        <Fade><h2 className="display-5">Skills</h2></Fade>
        <p></p>
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    </>
    )
}
export default Skills