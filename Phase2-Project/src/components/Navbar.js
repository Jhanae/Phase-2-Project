import React from 'react'
import Logo from './Pictures/spacebackground.jpeg';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navigation(){
    return (
        <div className="Nav" >
            <Navbar bg="transparent" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                <img src={Logo} width="40px" height="40px" alt="navLogo"/>{' '}
                FlatIron Planetarium
                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>   
                    <NavDropdown title="Planets">
                    <NavDropdown.Item href="/planets">All Planets</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Mercury">Mercury</NavDropdown.Item>
                    <NavDropdown.Item href="planets/venus">Venus</NavDropdown.Item>
                    <NavDropdown.Item href="planets/earth">Earth</NavDropdown.Item>
                    <NavDropdown.Item href="planets/mars">Mars</NavDropdown.Item>
                    <NavDropdown.Item href="planets/jupiter">Jupiter</NavDropdown.Item>
                    <NavDropdown.Item href="planets/saturn">Saturn</NavDropdown.Item>
                    <NavDropdown.Item href="planets/uranus">Uranus</NavDropdown.Item>
                    <NavDropdown.Item href="planets/neptune">Neptune</NavDropdown.Item>
                    <NavDropdown.Item href="planets/pluto">Pluto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/planets/shop">Buy a Star</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/reviews">Reviews</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>

                    <Nav.Link href="/newplanet">Register a New Planet</Nav.Link>
                </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
export default Navigation