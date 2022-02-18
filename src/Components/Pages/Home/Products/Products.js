import React from 'react';
import { useState,useEffect } from 'react';
import './products.css'
import Product from '../../../Product/Product';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
const [products,setProducts]=useState([])
    useEffect(()=>{

        fetch('https://salty-reef-53570.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    
    },[])
   
    return (
        <div >
            <h1> <span className="span1" style={{color:'blue',fontSize:'2rem',fontWeight:'bold'}}>Pet</span> <span className="span2" style={{color:'red',fontSize:'2rem',fontWeight:'bold'}}>For Sell!!</span> </h1>
            <hr className='w-50 mx-auto mb-2 mt-0' />
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