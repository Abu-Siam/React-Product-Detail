import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";
import "jquery"
import "popper.js/dist/umd/popper"
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import Content from "./Content";

function App() {

    return (
        <div className="App">
            <Navbar bg="white" variant="dark"
                    sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand style={{marginLeft:"10%",color:"black"}} >
                    <img src={logo} width="40px" height="40px" />{' '}
                    Logo
                </Navbar.Brand>

                <Navbar.Toggle className="coloring" style={{backgroundColor:"grey", marginRight:"5%"}}/>
                <Navbar.Collapse  style={{marginRight:"10%"}}>
                    <Nav className={"ms-auto"}>
                        <Nav.Link href="#home " className={"ml-20 font-style"} s> Home</Nav.Link>
                        <Nav.Link href="#products" className={"ml-20 font-style active-color"} >Products</Nav.Link>
                        <Nav.Link href="#blog" className={"ml-20 font-style"}>Blogs</Nav.Link>
                        <Nav.Link href="#contact-us" className={"ml-20 font-style"}>Contact Us</Nav.Link>
                        <button className = "button-orange ml-20 font-style" > Login</button>
                        <button className = "button-green ml-20 font-style"> Signup</button>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <Content></Content>
        </div>
    );
}

export default App;
