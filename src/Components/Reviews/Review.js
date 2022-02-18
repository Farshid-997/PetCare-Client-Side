import React from 'react';

import './Review.css';
import img1 from './user1.jpg'
import img2 from './user2.jpg'
import img3 from './user3.jpeg'
const Review = () => {
    return (
        <>
      
      <h1 style={{marginTop:'105px'}}> <span  style={{color:'blue',fontSize:'2rem',fontWeight:'bold'}}>Users</span> <span  style={{color:'red',fontSize:'2rem',fontWeight:'bold'}}>Reviews!!</span> </h1>
        <hr className='w-50 mx-auto mb-2 mt-0'  style={{color:'blue'}}/>
       
       
          <div className='mainContent'>
   
      <div className='containers'>
    <div className='cards'>
      <div className = 'image'>
        <img href="#" src={img1} alt=""/>
      </div>
      <div className='contents'>
        <h3>John</h3>
        <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
      </div>
    </div>    
  </div> 

      

      <div className='containers'>
    <div className='cards'>
      <div className = 'image'>
        <img href="#" src={img2} alt=""/>
      </div>
      <div className='contents'>
        <h3>Shaun</h3>
        <p style={{ overflowWrap: 'break-word'}}>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying on meaningful content.</p>
      </div>
    </div>    
  </div> 

    
          <div className='containers'>
    <div className='cards'>
      <div className = 'image'>
        <img href="#" src={img3} alt=""/>
      </div>
      <div className='contents'>
        <h3>Sara</h3>
        <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
      </div>
    </div>    
  </div> 
  

 
        </div>

       
        </>
      
    );
};

export default Review;