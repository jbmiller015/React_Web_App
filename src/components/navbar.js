import React from "react"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigate = (props) => {
    return (
        <Navbar bg="dark" variant="dark" style={{minWidth: 700}}>
            <Navbar.Brand href="#home">Me</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default Navigate;
