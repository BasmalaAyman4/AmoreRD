import React from 'react'
import Prod1 from './../assets/prod1.jpg'
import { AiFillDelete } from "react-icons/ai";
export default function ShopCartProduct() {
    return (
        <>
            <div className='shop-cart-product'>
                <img src={Prod1} alt='' className='shop-cart-product__img' />
                <div className='shop-cart-product__body'>
                    <h4 className='shop-cart-product__title'>Walk Of Fame</h4>
                    <p className='shop-cart-product__para'>Size: 100ML</p>
                    <p className='shop-cart-product__para'>1 x 210.00AED</p>
                </div>
                <AiFillDelete className='del' />
            </div>
            <hr />
        </>
    )
}
