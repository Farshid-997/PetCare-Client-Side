import React from 'react';

import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const[singleproduct,setSingleProduct]=useState({})
    const {id}=useParams()
    useEffect(()=>{

        fetch(`http://localhost:5000/singleproduct/${id}`)
        .then(res=>res.json())
        .then(data=>setSingleProduct(data))
    },[id])
    return (
        <div>
          

<h1>Animal:{singleproduct.AnimalType}</h1>
<p variant="success">Color:{singleproduct.color}</p>

<img src={singleproduct.Image} alt=""  style={{'width':'500px'}}/>
        </div>
    );
};

export default SingleProduct;