import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Review from '../../Reviews/Review';



import Header from '../Header/Header'
import Products from './Products/Products';
import Slider from './Slider/Sliders'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
          
            <Products></Products>
            <Appointment></Appointment>
           <Review></Review>
        </div>
    );
};

export default Home;