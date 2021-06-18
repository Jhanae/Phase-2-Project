import React from 'react'
import Logo from './Pictures/spacebackground.jpeg';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navigation(){
    return (
        <div className="App" >
            <Navbar bg="dark" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                <img src={Logo} width="40px" height="40px" alt="navLogo"/>{' '}
                FlatIron Planetarium
                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                <Nav>
                    <NavDropdown.Item href="/home">Home</NavDropdown.Item>   
                    <NavDropdown title="Planets">
                    <NavDropdown.Item href="#planets/">Mercury</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/coffee">Venus</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/chocolate">Earth</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/chocolate">Mars</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/chocolate">Jupiter</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/chocolate">Saturn</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/chocolate">Uranus</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/chocolate">Neptune</NavDropdown.Item>
                    <NavDropdown.Item href="#planets/chocolate">Pluto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#planets/shopping">Buy a Star</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#blog">Reviews</Nav.Link>
                    <Nav.Link href="#about-us">About Us</Nav.Link>
                    <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar>
            <div className="content">
                <small>Lets take a look among the stars.</small>
            </div>
        </div>
    )
}
export default Navigation