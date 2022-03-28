import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ffxvlogo from "../assets/ffxvlogo.png"



const Header = () => {
    return (
        <Navbar bg="secondary" expand="lg" style={{display: "flex", margin: 0, padding: 0}}>
            <Container style={{display: "flex", margin: 0, padding: 0}}>
                <Navbar.Brand href="#home" style={{margin: 0}}>
                    <a href="https://finalfantasyxv.square-enix-games.com/"><img src={ffxvlogo} alt="" /></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#historia" style={{ color: "white" }}>Historia</Nav.Link>
                        <Nav.Link href="#trasfondo" style={{ color: "white" }}>Trasfondo</Nav.Link>
                        <Nav.Link href="#personajes" style={{ color: "white" }}>Personajes</Nav.Link>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <Form className='d- flex justify-content-end'>
                            <Form.Group className="mb-3" style={{display: "flex", marginLeft: 450}}>
                                <Form.Control type="text" placeholder="Search" />
                                <Button variant="success" type="submit">Search</Button>
                            </Form.Group>
                                                    </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header