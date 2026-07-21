import { Container, Nav, Navbar, Col, Image} from "react-bootstrap";

const LandingPage = () => {
return (
    // Navbar 
    <Navbar id="navbar" expand="lg" fixed="top" className="text-black bg-dark">
        <Container>
            <Nav className="me-auto d-flex flex-row flex-wrap">
                <Nav.Link href="#" className="link-light px-2">Home</Nav.Link>
                <Nav.Link href="#" className="link-light px-2">Events</Nav.Link>
                <Nav.Link href="#" className="link-light px-2">Calender</Nav.Link>
                <Nav.Link href="#" className="link-light px-2">Gallery</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

    // Center
    // Footer
    );
};

export default LandingPage;