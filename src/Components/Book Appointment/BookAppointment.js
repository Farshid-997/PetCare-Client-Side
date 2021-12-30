import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Header from '../Pages/Header/Header';
import './BookAppointment.css'
const BookAppointment = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{

       axios.post('https://salty-reef-53570.herokuapp.com/bookings',data)
       .then(res=>{
        console.log(res)
        if(res.data.insertedId){
alert('appointment added successfully')
reset()
        }
    })
    };
    return (
        <div className='book-doctor'>
            <Header></Header>
            <h1>Appoint a doctor</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("doctorName")} placeholder="Doctor's Name"/>
           
    <input {...register("yourName")} placeholder="Your Name"/>
    <select {...register("gender")}  placeholder="select Pet Gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        
      </select>
    <input {...register("yourtime")} placeholder="your Availabe time"/>
    <input {...register("age")} placeholder="Pet Age"/>
    <input {...register("animal")}  placeholder="Your Animal"/>
    <input {...register("animalcolor")}  placeholder="Your Animal Color"/>
    <input {...register("problem")}  placeholder="Your Problem"/>
    <input {...register("paymentmethod")}  placeholder="Your Payment Method"/>
    <input type="submit" />
  </form>
        </div>
    );
};

export default BookAppointment;