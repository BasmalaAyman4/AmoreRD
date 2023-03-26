import React, { useState } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './../../assets/logo.png'
import { BsFillCartCheckFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import ShopCartProduct from './../../ShopCart-Product/ShopCart-Product'
export default function NavbarMenu() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark-mode");
        localStorage.setItem("selectedTheme", "dark-mode");
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light-mode");
        localStorage.setItem("selectedTheme", "light-mode");
    }
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        }
        else {
            setLightMode();
        }
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark-mode") {
        setDarkMode();
    }
    return (
        <>
            {['sm'].map((expand) => (

                <Navbar key={expand} expand={expand} className="nav" >
                    <Container >

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 p-2">
                                    <Nav.Link href="/" className='px-4 '>HOME</Nav.Link>
                                    <Nav.Link href="/product" className='px-4'>PRODUCT</Nav.Link>
                                    <Nav.Link href="/contact" className='px-4'>CONTACT</Nav.Link>
                                    <Nav.Link href="/aboutUs" className='px-4'>ABOUT</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Navbar.Brand href="#" className='navbrand'>
                            <label className='switch' >
                                <input type='checkbox' onChange={toggleTheme} defaultChecked={selectedTheme === "dark-mode"} />
                                <span className='slider'></span>
                            </label>
                            {values.map((v, idx) => (
                                <a href='#' key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                                    <BsFillCartCheckFill className='shopCart' />
                                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                                </a>
                            ))}




                            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                <Modal.Header closeButton />
                                <Modal.Body>
                                    <a href='/shop-cart' className='shop-cart__link'>SHOPPING CART</a>
                                    <ShopCartProduct />
                                    <ShopCartProduct />
                                    <ShopCartProduct />
                                    <ShopCartProduct />
                                    <div className='subTotal'>
                                        <p>Subtotal</p>
                                        <p>840 AED</p>
                                    </div>
                                    <a href='#' className='check-out__link'> PROCEED TO CHECKOUT</a>
                                </Modal.Body>
                            </Modal>
                            <a href="/login" className='px-4 login' >LOGIN</a>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            ))
            }

            <div className='logo'><img src={Logo} className='logoImg' alt='' />
            </div>
        </>
    )
}
