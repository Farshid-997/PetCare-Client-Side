import React from 'react';
 import img1 from './bird.jpg'
  import img2 from './cat.png'
  import img3 from './animals.jpg'
import './Slider.css'
import { Carousel} from 'react-bootstrap';


const Sliders = () => {

  return (
    <div className='mt-10'>
    
<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption className="header">
        <div className='header1'>
        <h3 className='fw-bold letter'>You can buy Different Animals from us</h3>
        <p className='fw-bold para'>We Have Different types of cats.You can buy them.</p>
        </div>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <div className='header1'>
        <h3 className='fw-bold letter1'>You can also Buy their Foods from us and  also their neccessary things</h3>
        <p className='fw-bold'>We have different brands of foods and tools</p>
        </div>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <div className='header1'>
        <h3 className='fw-bold letter2'>You can also book an appointment to a doctor </h3>
        <p className='fw-bold'>Can book an appointment and treat them with carefully</p>
        </div>
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
    
  );
};

export default Sliders;