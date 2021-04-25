import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/download.png';

function NavMenu() {
    return (
        <div className="container"> 
            <Navbar expand="lg" fixed="top" className="nav_bg">
                <Navbar.Brand href="#home"><a class="navbar-brand" href="index.html"><img src={logo} alt="" class="img-fluid"/></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end nav_menu1">
                    <Nav>
                        <Nav.Link href="#home" className="nav__link"><Link className="link active-link" to="/home">Home</Link></Nav.Link>
                        <Nav.Link href="#home" className="nav__link"><Link className="link" to="/about">About</Link></Nav.Link>
                        <Nav.Link href="#home" className="nav__link"><Link className="link" to="/growers">Growers</Link></Nav.Link>
                        <Nav.Link href="#home" className="nav__link"><Link className="link" to="/buyers">Buyers</Link></Nav.Link>
                        <Nav.Link href="#home" className="nav__link"><Link className="link" to="/service">Services</Link></Nav.Link>
                        <Nav.Link href="#home" className="nav__link"><Link className="link" to="/team">Team</Link></Nav.Link>
                        <Nav.Link href="#home" className="nav__link"><Link className="link" to="/contact">Contact</Link></Nav.Link>
                        <Nav.Link href="#home" className="nav__link"><Link className="link" to="/blog">Blog</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavMenu
