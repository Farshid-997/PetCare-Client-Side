import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import AddProduct from './Components/AddProduct/AddProduct';
import Home from './Components/Pages/Home/Home';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import BookAppointment from './Components/Book Appointment/BookAppointment';
import AddDoctors from './Components/AddDoctors/AddDoctors';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Doctors from './Components/Doctors/Doctors'
function App() {
  return (
  
    <div className="App">
<Router>
  <Switch>

  <Route exact path="/">
<Home></Home>
    </Route>
    
  <Route path="/home">
<Home></Home>
    </Route>

    
    <Route path="/addproducts">
<AddProduct></AddProduct>
    </Route>

    <Route path="/singleproduct/:id">
<SingleProduct></SingleProduct>
    </Route>

    <Route path="/bookings">
<BookAppointment></BookAppointment>
    </Route>

    <Route path="/adddoctors">
<AddDoctors></AddDoctors>
    </Route>


    <Route path="/seedoctors">
<Doctors></Doctors>
    </Route>

    <Route path="/login">
<Login></Login>
    </Route>


    <Route path="/register">
<Register></Register>
    </Route>


  </Switch>



</Router>
     
 
    </div>
  );
}

export default App;
