const data = [
    {
        id: 1,
        title: 'Django with React | An Ecommerce Website',
        img: 'https://img-c.udemycdn.com/course/240x135/3792332_8a51_2.jpg',
        des: `Build an eCommerce platform from the ground up with React, Redux, Django & Postgres
        Build an Ecommerce website using Django with React.`,
        tutor: 'Dennis Ivy, Brad Traversy',
        price: '69.99',
        enrolled: '67892',
        rating: 4.5,
        position: 'Bestseller'
    },
    {
        id: 2,
        title: 'The Complete 2022 Web Development Bootcamp',
        img: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_14.jpg',
        des: `Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, build real projects.`,
        tutor: 'Dr. Angela Yu',
        price: '169.99',
        enrolled: '167892',
        rating: 4.8,
        position: 'Bestseller'
    },
    {
        id: 3,
        title: 'Next.js & React - The Complete Guide (incl. Two Paths!)',
        img: 'https://img-c.udemycdn.com/course/240x135/3873464_403c.jpg',
        des: `Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!`,
        tutor: 'Maximilian Schwarzmüller',
        price: '129.99',
        enrolled: '57892',
        rating: 4.6,
        position: 'Bestseller'
    },
    {
        id: 4,
        title: 'Beginning C++ Programming - From Beginner to Beyond',
        img: 'https://img-c.udemycdn.com/course/240x135/1576854_9aeb_2.jpg',
        des: `Beginning C++ Programming - From Beginner to Beyond`,
        tutor: 'Dr. Frank Mitropoulos',
        price: '109.99',
        enrolled: '97892',
        rating: 4.8,
        position: 'Bestseller'
    },
    {
        id: 5,
        title: 'Angular - The Complete Guide (2022 Edition)',
        img: 'https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg',
        des: `Master Angular 13 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js`,
        tutor: 'Maximilian Schwarzmüller',
        price: '139.99',
        enrolled: '68392',
        rating: 4.8,
        position: 'Bestseller'
    },
    {
        id: 6,
        title: 'Node, Express, Vue JS and Mongo DB full stack development',
        img: 'https://img-c.udemycdn.com/course/240x135/4256960_af69.jpg',
        des: `Build an eCommerce platform from the ground up with React, Redux, Django & Postgres
        Build an Ecommerce website using Django with React
        Full featured shopping cart with PayPal & credit/debit payments
        Product rating & review system`,
        tutor: 'Vinay Kumar',
        price: '19.99',
        enrolled: '1892',
        rating: 4.2,
        position: 'New'
    },
    {
        id: 7,
        title: 'Express.js Node.js & MongoDB',
        img: 'https://img-b.udemycdn.com/course/240x135/1676008_8f6c_5.jpg?secure=ocg7LSNzr-KebofBYxcgZw%3D%3D%2C1640064904',
        des: `Fast development never been easy. Connect to MongoDB | HTTP verbs | Serve static content from server`,
        tutor: 'Nelson Jamal',
        price: '69.99',
        enrolled: '17892',
        rating: 4.6,
        position: 'Bestseller'
    },
    {
        id: 8,
        title: 'Advanced REST APIs with Flask and Python',
        img: 'https://img-c.udemycdn.com/course/240x135/1954018_dcd3_4.jpg',
        des: `Take your REST APIs to a whole new level with this advanced Flask and Python course!`,
        tutor: 'Jose Salvatierra',
        price: '124.99',
        enrolled: '37892',
        rating: 4.7,
        position: 'Highest rated'
    },
    {
        id: 9,
        title: 'Python REST APIs with Flask, Docker, MongoDB, and AWS DevOps',
        img: 'https://img-c.udemycdn.com/course/240x135/1747522_f7f0.jpg',
        des: `Learn Python coding with RESTful API's using the Flask framework. Understand how to use MongoDB, Docker and Tensor flow.`,
        tutor: 'Dr. Frank Mitropoulos',
        price: '74.99',
        enrolled: '97892',
        rating: 4.3,
        position: 'Bestseller'
    },
    {
        id: 10,
        title: 'Docker & Kubernetes: The Practical Guide [2022 Edition]',
        img: 'https://img-c.udemycdn.com/course/240x135/3490000_d298_2.jpg',
        des: `Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up!`,
        tutor: 'Maximilian Schwarzmüller',
        price: '149.99',
        enrolled: '67892',
        rating: 4.8,
        position: 'Highest rated'
    },
    {
        id: 11,
        title: 'C Programming For Beginners - Master the C Language',
        img: 'https://img-c.udemycdn.com/course/240x135/1467808_f8c0.jpg',
        des: `C Programming will increase career options. Become a better dev in other languages by learning C. Pointers explained `,
        tutor: 'Jason Fedin',
        price: '98.99',
        enrolled: '43892',
        rating: 4.4,
        position: 'Bestseller'
    },
    {
        id: 12,
        title: ' Complete C Programming Course - C Language for Student',
        img: 'https://img-c.udemycdn.com/course/240x135/3173974_b870_4.jpg',
        des: `C Programming 2021: Master the Fundamentals of C Programming Language for Beginner Students in College/University `,
        tutor: 'Vlad Budnitski',
        price: '79.99',
        enrolled: '77892',
        rating: 4.5,
        position: 'Bestseller'
    },
    {
        id: 13,
        title: 'Advanced C Programming Course ',
        img: 'https://img-c.udemycdn.com/course/240x135/2800976_98e5.jpg',
        des: `Become a True Master of the C Programming Language - Confidently Apply for Real Time or Embedded C Jobs or contracts! `,
        tutor: 'Jason Fedin',
        price: '169.99',
        enrolled: '57892',
        rating: 4.5,
        position: 'Bestseller'
    },
    {
        id: 14,
        title: 'Build Reactive MicroServices using Spring WebFlux/SpringBoot',
        img: 'https://img-c.udemycdn.com/course/240x135/1565240_7548_2.jpg',
        des: `Learn to write Reactive programming and build Reactive MicroServices using Spring WebFlux and project Reactor.`,
        tutor: 'Pragmatic Code School',
        price: '69.99',
        enrolled: '34592',
        rating: 4.6,
        position: 'Bestseller'
    },
    {
        id: 15,
        title: 'Build Reactive MicroServices using Spring WebFlux/SpringBoot',
        img: 'https://img-b.udemycdn.com/course/240x135/3471842_fe31_5.jpg?secure=e1e8teWDuDeokL8W4xMNpA%3D%3D%2C1640095465',
        des: `Master the concept of microservices API development using the Hexagonal Architecture in Go`,
        tutor: 'Ashish Juyal',
        price: '69.99',
        enrolled: '7892',
        rating: 4.6,
        position: 'Highest rated'
    },
    {
        id: 16,
        title: 'Build REST APIs with Django REST Framework and Python',
        img: 'https://img-c.udemycdn.com/course/240x135/3856080_6aff_7.jpg',
        des: `Master the concept of microservices API development using the Hexagonal Architecture in Go`,
        tutor: 'Shubham Sarda',
        price: '149.99',
        enrolled: '1292',
        rating: 4.5,
        position: 'New'
    },
    {
        id: 17,
        title: 'How to design & develop REST microservices in Golang (Go)',
        img: 'https://img-c.udemycdn.com/course/240x135/3579383_3c67_2.jpg',
        des: `Learn to program in Go from an award winning university professor`,
        tutor: 'Trevor Sawler',
        price: '149.99',
        enrolled: '56892',
        rating: 4.8,
        position: 'Highest rated'
    },
    {
        id: 18,
        title: 'C# 8.0 - OOP - Ultimate Guide - Beginner to Advanced',
        img: 'https://img-c.udemycdn.com/course/240x135/3237889_1bcc_2.jpg',
        des: `BLearn C# by doing | C# projects | Object Oriented Programming | Advanced C# | Interfaces | Collections | LINQ`,
        tutor: 'Web University by Harsha Vardhan',
        price: '69.99',
        enrolled: '27892',
        rating: 4.5,
        position: 'Bestseller'
    },
    {
        id: 19,
        title: '2022 Complete Python Bootcamp From Zero to Hero in Python',
        img: 'https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg',
        des: `Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games`,
        tutor: 'Jose Portilla',
        price: '149.99',
        enrolled: '67892',
        rating: 4.8,
        position: 'Highest rated'
    },
    {
        id: 20,
        title: 'Python & Django REST API Bootcamp - Build A Python Web API',
        img: 'https://img-c.udemycdn.com/course/240x135/3769792_3990_4.jpg',
        des: `Create a stable, secure and production-grade RESTful API with Python, Django REST Framework, Google Cloud and Heroku`,
        tutor: 'Hussain Mustafa',
        price: '149.99',
        enrolled: '12892',
        rating: 4.5,
        position: 'Bestseller'
    },
    {
        id: 21,
        title: 'Hussain Mustafa',
        img: 'https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg',
        des: `Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)`,
        tutor: 'Jonas Schmedtmann',
        price: '149.99',
        enrolled: '77892',
        rating: 4.8,
        position: 'Highest rated'
    }
]