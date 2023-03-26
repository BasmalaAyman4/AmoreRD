import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Uplifts from './../assets/Uplifts.jpeg'
import './AboutUs.css'
export default function AboutUs() {
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='shop'>Home  </Breadcrumb.Item>
                    <Breadcrumb.Item active> About Us</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <img src={Uplifts} alt='' className='aboutImg' />
            <div className='about__body'>
                <p className='aboutUs__para'>A specialized scented diffusers and candles concept. Founded by a group of individuals passionate about art, design, and home.</p>
                <p className='aboutUs__para'>There is nothing more refreshing than walking into a blooming space that lifts your spirit and transports you into a peaceful and zen space. ZAHI wants you to spend more time indoors than ever before.</p>
                <p className='aboutUs__para'>Relax, unwind, and enjoy the ZAHI scent.</p>
            </div>
        </>
    )
}
