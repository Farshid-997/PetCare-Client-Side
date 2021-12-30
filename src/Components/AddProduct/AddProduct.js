import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Pages/Header/Header';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{

        axios.post('https://salty-reef-53570.herokuapp.com/products',data)
        .then(res=>{
            console.log(res)
            if(res.data.insertedId){
alert('product added successfully')
reset()
            }
        })
    };

    return (
        <div className='add-product' >
            <Header></Header>
           <h1>
               Add A Product
           </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("Image")} placeholder="Image"/>
      <select {...register("gender")}  placeholder="select Gender">
        <option value="female">female</option>
        <option value="male">male</option>
        
      </select>
      <input {...register("AnimalType")} placeholder="Animal Type"/>
      <input {...register("color")} placeholder="Color"/>
      <input {...register("Price")}  placeholder="Price"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;