import React from 'react'
import FooterImg from './../../assets/footerImg.jpeg'
import { Container } from 'react-bootstrap'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <Container>
                <footer>

                    <div className='more'>
                        <ul>
                            <h4 className='more__title'>MORE</h4>
                            <li className='more__item'><a href='{}' className='more__link'>Home</a></li>
                            <li className='more__item'><a href='{}' className='more__link'>Products</a></li>
                            <li className='more__item'><a href='{}' className='more__link'>Contact</a></li>
                            <li className='more__item'><a href='{}' className='more__link'>About</a></li>
                            <li className='more__item'><a href='{}' className='more__link'>Privacy Policy</a></li>
                            <li className='more__item'><a href='{}' className='more__link'>Terms And Conditions</a></li>
                        </ul>
                    </div>
                    <div className='about'>
                        <h2 className='about__title'>About Us</h2>
                        <p className='about__para'>There is nothing more refreshing than walking into a blooming space that lifts your spirit and transports you into a peaceful and zen space. ZAHI wants you to spend more time indoors than ever before.</p>
                        <p className='about__para'>Relax, unwind, and enjoy the ZAHI scent.</p>
                    </div>
                </footer>
                <div>
                    <img src={FooterImg} alt='' className='footerImg' />
                </div>
            </Container>
        </>
    )
}
