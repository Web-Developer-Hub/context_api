import React from 'react';
import { useContext } from 'react';
import { MyCoustomContext } from '../../ContextAPI/ContextAPI';
import Course from './Course';
import './Courses.css'



const Courses = () => {
    const courses = useContext(MyCoustomContext);

    return (
        <div className='main'>
            <h3 className='cards'>All courses: {courses.length}</h3>
            <div className='cards'>
                {
                    courses.map((item) => <Course item={item}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;