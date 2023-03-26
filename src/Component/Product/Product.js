import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Product.css'
import Slider from './../assets/slider.jpeg'
import { BiGridAlt } from "react-icons/bi";
import { RxActivityLog } from "react-icons/rx";
import FeatureProd from './../featureProd/FeatureProd'

export default function Product() {
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='shop'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Shop</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
            <img src={Slider} alt='' className='sliderShopImg' />
            <div className='all-sort'>
                <div>
                    <select class="prod__select">
                        <option>Default Sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by latest</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: hight to low</option>
                    </select>
                    <BiGridAlt className='alt' />
                    <RxActivityLog className='log' />
                </div>
                <div className='show__select'>
                    <span>Show: </span>
                    <select class="prod__show">
                        <option>12</option>
                        <option>14</option>
                        <option>34</option>
                        <option>36</option>
                    </select>
                </div>
            </div>
            <div className='prodCategory'>
                <a href='/productDetails'><FeatureProd title="Protuct Title1" para="100ml/500ml" /></a>
                <FeatureProd title="Protuct Title2" para="200ml/400ml" />
                <FeatureProd title="Protuct Title3" para="300ml/300ml" />
                <FeatureProd title="Protuct Title4" para="400ml/400ml" />
                <FeatureProd title="Protuct Title5" para="500ml/300ml" />
                <FeatureProd title="Protuct Title6" para="600ml/200ml" />
            </div>
        </>
    )
}
