  
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const navStyle={
    padding:"10px",
    margin:"20px",
    backgroundColor:"grey",
    color:"black"
}

export default function NavBar() {
    return (
        <Navbar variant="dark" fixed="top">
            <Nav bg="dark">
                <Nav.Item style={navStyle}>
                    <Nav.Link href="/" style={navStyle}>Google Books</Nav.Link>
                    <Nav.Link href="/search" style={navStyle}>Search</Nav.Link>
                    <Nav.Link href="/saved" style={navStyle}>Saved</Nav.Link>
                </Nav.Item>

            </Nav>
        </Navbar>
    )
}



