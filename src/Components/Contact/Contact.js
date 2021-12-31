import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    const contact = {
        email: 'habibor144369@gmail.com',
        palce: 'Mohammodpur, dhaka-1207',
        phone: ['+8801768280237', '+8801311606870']
    }

    return (
        <div className='main container'>
            <h3>Contact From</h3>
            <div className='contact_from'>
                <div className='form'>
                    <h4>Get in touch</h4>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom">Name</label>
                    </Form.Floating>

                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>

                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating> <br />

                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel> <br />

                    <Button>Send Message</Button>

                </div>

                <div className='address'>
                    <h4>Contact us</h4>
                    <p>Email: {contact.email}</p>
                    <p>Address: {contact.palce}</p>
                    <p>Phone: {contact.phone.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;