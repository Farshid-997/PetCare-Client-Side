import React, { useState } from 'react';
//import useAuth from '../../Hooks/useAuth';
import { NavLink,useHistory } from 'react-router-dom';
import { Alert, Button, Spinner } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import Header from '../Pages/Header/Header';

const Register = () => {
        const [loginData,setLoginData]=useState({})
        const history=useHistory();
        const {user,registerUser,googleSignIn,isLoading,authError}=useFirebase()
        const handleOnChange=(e)=>{
            const field=e.target.name;
            const  value=e.target.value;
            const newloginData={...loginData}
            newloginData[field]=value
            console.log(newloginData)
            setLoginData(newloginData)
        }
        const handleLoginSubmit=(e)=>{
           
          
            registerUser(loginData.email,loginData.password,loginData.name,history)
            e.preventDefault()
    }
       return (
 <div>
          <Header></Header>
{ !isLoading &&
 <form onSubmit={handleLoginSubmit}>

 <input style={{width:'60%',marginBottom:'15px'}} onChange={handleOnChange} type="text"  name="name" />
 <input style={{width:'60%',marginBottom:'15px'}} onChange={handleOnChange}  type="email" name="email"   />
 <input style={{width:'60%',marginBottom:'15px'}} onChange={handleOnChange}  type="password"  name="password" />
 
 
 <Button type="submit">Register</Button>

<NavLink to="/login">
<Button type="submit">Already sing up?Login</Button>
</NavLink>

<NavLink>
<Button onClick={googleSignIn} type="submit">Sign in with google</Button>
</NavLink>
 
           </form>
}
         
{isLoading &&  <Spinner animation="grow" variant="danger" />}
 {user?.email&&  <Alert  variant="success"></Alert>}
{authError && <Alert  variant="danger">{authError}</Alert>}
      </div>     
    );
};

export default Register;