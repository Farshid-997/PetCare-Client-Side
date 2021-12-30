import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Pages/Header/Header';
import './AddDoctors.css'
const AddDoctors = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{

       axios.post('http://localhost:5000/doctors',data)
       .then(res=>{
        console.log(res)
        if(res.data.insertedId){
alert('doctors addedd successfully')
reset()
        }
    })
    };
    return (
        <div className='add-doctors'>
            <Header></Header>
            <h1>Add A Doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First Name"/>
            <input {...register("lastName")} placeholder="Last Name"/>
    <input {...register("Image")} placeholder="Image"/>
    <select {...register("doctortype")}  placeholder="select type">
        <option value="surgery">Surgery</option>
        <option value="medicine">Medicine</option>
        
      </select>
    <input {...register("availableTime")} placeholder="Availabe time"/>
    <input {...register("age")} placeholder="Age"/>
    <input {...register("visitpay")}  placeholder="visitPay"/>

    <input type="submit" />
  </form>
        </div>
    );
};

export default AddDoctors;