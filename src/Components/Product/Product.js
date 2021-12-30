import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const{_id,AnimalType,Price,color,Image}=props.product
    return (
        <div className='product'>

         <Card style={{ width: '20rem',height:'25rem',backgroundColor:'#84cfac'  }}>
  <Card.Img variant="top" src={Image} style={{ width: '15rem',height:'12rem'}}  />
  <Card.Body>
    <Card.Title style={{ color:'black'  }}>{AnimalType}</Card.Title>
    <Card.Text style={{ color:'black',fontWeight:'bold'  }}>
     Price is {Price}Tk and Color is {color}.
    </Card.Text>

    <Link to={`/singleproduct/${_id}`}>
    <Button variant="success">Want to buy?Click Here.</Button>
    </Link>
  
  </Card.Body>
</Card>   
        </div>
    );
};

export default Product;