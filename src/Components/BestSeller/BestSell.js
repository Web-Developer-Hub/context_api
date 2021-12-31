import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BestSell = (props) => {
    const { title, img, des, price, rating, enrolled, position, tutor } = props.data;
    return (
        <div className=''>
            <div>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {des.slice(0, 100)}...
                        </Card.Text>
                        <h6><p>Tutor by: {tutor}</p></h6>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h5>Price: {price}</h5>
                            <p>Rating: {rating}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button>Enrolled</Button>
                            <p>{enrolled} student</p>
                        </div>
                        <p className='position'>{position}</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default BestSell;