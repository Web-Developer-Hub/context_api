import React, { createContext, useEffect, useState } from 'react';

export const MyCoustomContext = createContext();

const ContextAPI = ({ children }) => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const API = 'https://raw.githubusercontent.com/Web-Developer-Hub/courses-website/master/public/Data/data.JSON';
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data === null) {
                    return null
                }
                else {
                    setCourses(data)
                }
            });
    }, []);


    return (
        <MyCoustomContext.Provider value={courses}>
            {children}
        </MyCoustomContext.Provider>
    );
};

export default ContextAPI;