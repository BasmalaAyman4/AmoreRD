import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Contact.css'
import Form from 'react-bootstrap/Form';
export default function Contact() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        subject: '',
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {

        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))

    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        let err = {}

        if (formData.username === '') {
            err.username = 'Please Fill Out This Field'
        }
        if (formData.email === '') {
            err.email = 'Please Fill Out This Field'
        }
        if (formData.subject === '') {
            err.subject = 'Please Fill Out This Field'
        }
        if (formData.username === '' || formData.email === '' || formData.subject === '') {
            err.all = ' يوجد خطأ في حقل واحد او اكثرز يرجي مراجعه و حاول مره اخري'
        }
        setFormError({ ...err })
    }
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/" className='shop'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Shop</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <section className='contact container'>
                <div className='contact__form'>
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Your Name</label>
                            <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
                            <span className='msError'>{formError.username}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
                            <span className='msError'>{formError.email}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Your Phone</label>
                            <input className="form-control" name="phone" onChange={onChangeHandler} value={formData.phone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Your subject</label>
                            <input className="form-control" name="subject" onChange={onChangeHandler} value={formData.subject} />
                            <span className='msError'>{formError.subject}</span>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message (optional)</Form.Label>
                            <Form.Control as="textarea" rows={6} />
                        </Form.Group>
                        <div className="form-group">
                            <button className="btn" type="submit" >Submit</button>
                        </div>
                        <span className='msErrorAll'>{formError.all}</span>
                    </form>
                    <h5 className='free'>Feel free to contact us at any time by emailing us on
                        <span className='free__para'> stayzahi.ae@gmail.com</span></h5>
                </div>
            </section>


        </>
    )
}
