import React from 'react'
import './../Home/Home.css'
import Prod1 from './../assets/prod1.jpg'
import Prod2 from './../assets/prod2.jpg'
import Prod3 from './../assets/prod3.jpg'
import Carousel from 'react-bootstrap/Carousel';


export default function FeatureProd(props) {
    return (
        <>


            <Carousel slide={false}>
                <Carousel.Item>
                    <img src={Prod1} alt='' className='swiperImg' />
                    <div className='prodSwiper__body'>
                        <h4 className='prodSwiper__title'>{props.title}</h4>
                        <p className='prodSwiper__para'>Available {props.para}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Prod2} alt='' className='swiperImg' />
                    <div className='prodSwiper__body'>
                        <h4 className='prodSwiper__title'>{props.title}</h4>
                        <p className='prodSwiper__para'>Available {props.para}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Prod3} alt='' className='swiperImg' />
                    <div className='prodSwiper__body'>
                        <h4 className='prodSwiper__title'>{props.title}</h4>
                        <p className='prodSwiper__para'>Available {props.para}</p>
                    </div>
                </Carousel.Item>
            </Carousel>

        </>
    )
}
