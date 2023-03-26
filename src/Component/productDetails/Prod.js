import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import './prod.css'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Prod1 from './../assets/prod1.jpg'
import Prod2 from './../assets/prod2.jpg'
import Prod3 from './../assets/prod3.jpg'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <>
            <input
                type="checkbox"
                onClick={decoratedOnClick}
                className='product-checkbox'
            >
                {children}
            </input>
            <label className='product__label'> Wrap it as a gift 10 AED</label>
        </>
    );
}


export default function Prod() {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(300);


    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
            setPrice(prevPrice => prevPrice - 300);
        }
    }
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);
            setPrice(prevPrice => prevPrice + 300);
        }
    }
    return (
        <>
            <div className='my'>
                <div className='mystique'>
                    <div className='beforeProd'>
                        <div className='beforeProd__body'>
                            <h3 className='beforeProd__title'>Product Title</h3>
                            <p className='beforeProd__para'>280.00 AED</p>
                        </div>


                        <img src={Prod1} alt='' className='beforeProd__img' />
                    </div>
                </div>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/" className='shop'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>THE MYSTIQUE</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
                <Container>
                    <section className=' product-detail'>
                        <div className='row mt-5'>
                            <div className='col-lg-5 col-md-12 col-12'>
                                <Carousel infiniteLoop autoPlay>
                                    <div className='image'>
                                        <img src={Prod1} alt='' />
                                    </div>
                                    <div className='image'>
                                        <img src={Prod2} alt='' />
                                    </div>
                                    <div className='image'>
                                        <img src={Prod3} alt='' />
                                    </div>
                                    <div className='image'>
                                        <img src={Prod1} alt='' />
                                    </div>
                                    <div className='image'>
                                        <img src={Prod2} alt='' />
                                    </div>

                                </Carousel>
                            </div>
                            <div className='col-lg-6 col-md-12 col-12'>
                                <h2 className='product-detail__title'>THE MYSTIQUE</h2>
                                <p className='product-detail__para'>THE MYSTIQUE DIFFUSER</p>
                                <p className='product-detail__price'>{price} AED</p>
                                <hr />
                                <p className='product-detail__size'>Size</p>
                                <select class="prod__size">
                                    <option>500ML</option>
                                    <option>100ML</option>
                                </select>

                                <Accordion defaultActiveKey="0">
                                    <Card className='card'>
                                        <Card.Header>
                                            <CustomToggle eventKey="1"></CustomToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <div>
                                                    <input type="checkbox" className='product-checkbox' />
                                                    <label className='product__label'> Don't send a receipt</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" className='product-checkbox' />
                                                    <label className='product__label'> Send a personalized greeting card</label>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <div className='inputt-groupp'>
                                    <button className='input-group-textt' type='button' onClick={handleDecrement}>-</button>
                                    <div className='form-controll text-center' >{quantity}</div>
                                    <button className='input-group-textt' type='button' onClick={handleIncrement}>+</button>
                                    <button className='textt' type='button'>Add to card</button>
                                </div>

                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </>
    )
}
