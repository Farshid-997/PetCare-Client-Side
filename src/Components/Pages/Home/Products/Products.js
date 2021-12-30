import React from 'react';
import { useState,useEffect } from 'react';
import './products.css'
import Product from '../../../Product/Product';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
const [products,setProducts]=useState([])
    useEffect(()=>{

        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    
    },[])
   
    return (
        <div >
            <h1> <span style={{'color':'blue'}}>Pet</span> For Sell!!</h1>
           
           <Container className='cnt' >
           <Row xs={1} md={3} className="g-5">
                {
 products.map(product=><Product
    product={product}
    >
   </Product>)
                }
            </Row>
           </Container>       
        </div>
    );
};

export default Products;