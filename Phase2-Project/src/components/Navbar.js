import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

function Navbar(){
    return (
        <div >
           <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">FlatIron Planetarium</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#pricing">Planets</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="More" id="collapsible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="#a/reviews">Reviews</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#/comments">Leave a Message</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#/contact-us">Contact Us</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="#/report-a-problem">Report a problem</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="#deets">About</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                    Buy Star
                </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}
export default Navbar