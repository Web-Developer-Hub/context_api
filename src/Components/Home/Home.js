import './Home.css'
import { Button } from 'react-bootstrap';
import Servies from './Servies';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { MyCoustomContext } from '../../ContextAPI/ContextAPI';


const Home = () => {
    const history = useHistory();
    const courses = useContext(MyCoustomContext);

    const service = [];
    for (let i = 0; i < 8; i++) {
        const course = courses[i];
        if (courses === undefined) {
            return;
        }
        else {
            service.push(course)
        }
    }


    const clickHandler = () => {
        history.push('/our/courses')
    }

    return (
        <section className='main'>
            <div className='first-postion container'>
                <div className='first-left'>
                    <h2>E-courses are always by your side!</h2>
                    <p>Welcome to “MERN Stack with Blog Project”. In this course, we will be building an in-depth full-stack Blog project application using Node.js, Express, React, and MongoDB along with ES6+. We will start with a blank text editor and end with a deployed full-stack application. </p>
                    <Button onClick={clickHandler}>See More</Button>
                </div>
                <div className='first-right'>
                    <img src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" alt="header" />
                </div>
            </div>

            <div className='cards'>
                {
                    service.map((data) => <Servies item={data}></Servies>)
                }
            </div>
        </section>
    );
};

export default Home;