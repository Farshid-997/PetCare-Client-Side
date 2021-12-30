import { Alert, Button, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {
  
    const [loginData,setLoginData]=useState({})
    const {user,loginUser,isLoading,authError}=useFirebase()
    const location=useLocation()
    const history=useHistory()
    const handleOnChange=(e)=>{
        const field=e.target.name;
        const  value=e.target.value;
        const newloginData={...loginData}
        newloginData[field]=value
        console.log(newloginData)
        setLoginData(newloginData)
    }
    const handleLoginSubmit=(e)=>{
       
      
        loginUser(loginData.email,loginData.password,location,history)
        e.preventDefault()
}
 return (
        <div>
            <h1>Please Login!!</h1>
            { !isLoading &&
 <form onSubmit={handleLoginSubmit}>


 <input style={{width:'60%',marginBottom:'15px'}} onChange={handleOnChange}  type="email" name="email" placeholder='email'  /> <br />
 <input style={{width:'60%',marginBottom:'15px'}} onChange={handleOnChange}  type="password"  name="password" placeholder='password' /> <br />
 
 
 <Button style={{width:'60%',marginBottom:'15px'}} variant="success" type="submit">Login</Button> <br />


<NavLink to="/register">
<Button style={{width:'60%'}} type="submit">New User?Register</Button>
</NavLink>


 
           </form>
}

{isLoading &&  <Spinner animation="grow" variant="danger" />}
 {user?.email&&  <Alert  variant="success"></Alert>}
{authError && <Alert  variant="danger">{authError}</Alert>}

        </div>
       
    );
};

export default Login;