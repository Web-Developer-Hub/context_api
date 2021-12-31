import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './About.css'

const About = () => {
    const history = useHistory()
    const clickHandler = () => {
        history.push('/our/courses')
    }

    return (
        <div className='main container'>
            <h3>This is my about page</h3>
            <div className='about'>
                <div className='about_image'>
                    <img src="https://image.freepik.com/free-vector/business-people-working-laptop-development_1262-18907.jpg" alt="about" />
                </div>

                <div className='about-details'>
                    <h2>About Us</h2>
                    <h4>We are a professional agency</h4>
                    <p>we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                    <Button onClick={clickHandler}>Get Started With Us</Button>
                </div>

            </div>
        </div>
    );
};

export default About;