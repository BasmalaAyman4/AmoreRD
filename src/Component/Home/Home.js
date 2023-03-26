import React from 'react'
import Slider from './../assets/slider.jpeg'
import './Home.css'
import FeatureProd from '../featureProd/FeatureProd'
import { Container } from 'react-bootstrap'
import Uplifts from './../assets/Uplifts.jpeg'


export default function Home() {
    return (
        <>
            <img src={Slider} alt='' className='sliderImg' />
            <div className='home__body'>
                <h2 className='home__title'>BRIGHT AND GLOWING.</h2>
                <h2 className='home__title'>A SPECIALIZED SCENTED DIFFUSERS AND CANDLES CONCEPT BASED IN KUWAIT.</h2>
            </div>

            <section className='featuredProducts'>
                <p className='feature__para'>FEATURED PRODUCTS</p>
                <Container>
                    <div className='prod__body'>

                        <FeatureProd title="Protuct Title1" para="100ml/500ml" />
                        <FeatureProd title="Protuct Title2" para="200ml/400ml" />
                        <FeatureProd title="Protuct Title3" para="300ml/300ml" />
                        <FeatureProd title="Protuct Title4" para="400ml/400ml" />
                        <FeatureProd title="Protuct Title5" para="500ml/300ml" />
                        <FeatureProd title="Protuct Title6" para="600ml/200ml" />
                    </div>
                </Container>
            </section>
            <section className='uplifts'>
                <Container>
                    <h3 className='uplifts__title'>Nothing uplifts your home interior as a stylish and iconic bottle with an inspirational fragrances..</h3>
                    <img src={Uplifts} alt='' className='upliftsImg' />
                </Container>
            </section>

        </>
    )
}
