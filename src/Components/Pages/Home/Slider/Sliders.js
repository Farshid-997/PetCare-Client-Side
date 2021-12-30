import React from 'react';
 import img1 from './3848413_1102x400.jpg'
  import img2 from './3858438_1102x400.jpg'
  import img3 from './animals-g97d6e11e9_1920_1102x400.jpg'

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
      <Carousel.Caption>
        <h3 style={{color:'blue'}}>You can buy Different Animals from us</h3>
        <p style={{color:'white'}}>We Have Different types of cats.You can buy them.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3 style={{color:'black'}}>You can also Buy their Foods from us and  also their neccessary things</h3>
        <p style={{color:'black'}}>We have different brands of foods and tools</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 >You can also book an appointment to a doctor </h3>
        <p>Can book an appointment and treat them with carefully</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
    
  );
};

export default Sliders;