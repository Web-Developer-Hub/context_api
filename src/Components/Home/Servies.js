import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Servies = (props) => {
    console.log(props)
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={props?.item?.img} />
                <Card.Body>
                    <Card.Title>{props?.item?.title}</Card.Title>
                    <Card.Text>
                        {props?.item?.des.slice(0, 100)}...
                    </Card.Text>
                    <h6><p>Tutor by: {props?.item?.tutor}</p></h6>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h5>Price: {props?.item?.price}</h5>
                        <p>Rating: {props?.item?.rating}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Button>Enrolled</Button>
                        <p>{props?.item?.enrolled} student</p>
                    </div>
                    <p className='position'>{props?.item?.position}</p>
                </Card.Body>
            </Card>
        </div>
    );
}


export default Servies;