import React from 'react'
import { Container } from 'react-bootstrap';
import { FcBusinesswoman } from "react-icons/fc";
import './Login.css'

export default function Login() {
    return (
        <>
            <div className='account'>
                <p className='account__para'><FcBusinesswoman /> My Account</p>
            </div>
            <Container>
                <section className='acc'>
                    <div className='login__body'>
                        <h3 className='login__title'>Login</h3>
                        <div class="input-groupp">
                            <input required="" type="text" name="text" autocomplete="off" class="inputt" />
                            <label class="user-labell">Username or email address*</label>
                        </div>
                        <div class="input-groupp">
                            <input required="" type="text" name="text" autocomplete="off" class="inputt" />
                            <label class="user-labell">Password*</label>
                        </div>
                        <div className='rememberOrLost'>
                            <div className='remember'>
                                <input type="checkbox" className='rememberCheck' id="rememberMe" />
                                <label for="rememberMe" className='remember__label'>Remember me</label>
                            </div>
                            <div className='lostPass'>
                                <a href='/lost' className='lost__link'>Lost your password?</a>
                            </div>
                        </div>
                        <button className='log__btn'>Login</button>
                    </div>
                    <div className='register__body'>
                        <h3 className='register__title'>Register</h3>
                        <div class="input-groupp">
                            <input required="" type="text" name="text" autocomplete="off" class="inputt" />
                            <label class="user-labell">Email address*</label>
                        </div>
                        <p>A password will be sent to your email address.</p>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        <button className='reg__btn'>Register</button>
                    </div>
                </section>
            </Container>
        </>
    )
}
