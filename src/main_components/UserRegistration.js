import {useState} from 'react';
//import {useNavigate} from 'react-router-dom'
import UserRegistrationForm from './helper_components/UserRegistrationForm';
import SignedUp from './helper_components/SignedUp';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import UserService from '../services/UserService';

/*
Execute the UserRegistrationForm Component
Store teh Extracted details in teh Firebase Database
When the user Registration is done, we will navigate away from the form, and go to the SignedUp Page.
*/

function UserRegistration(){
    // useNavigate object allowes us to navigate to some web page
    //const navigate = useNavigate();
    const [isRegistered, setIsRegistered] = useState(false);
    const navigate = useNavigate()

    console.log(isRegistered)

    function addUserHandler(userInformation){

        // fetch(
        //     'http://localhost:8080/misha-wealth-management-api/v1/add-user',
        //     //'https://weath-management-app-by-misha-default-rtdb.firebaseio.com/registratons.json',
        //     { 
        //         userInformation,
        //         method: 'POST',
        //         body: JSON.stringify(userInformation),
        //         headers:{
        //             'Content-Type': 'application/json'
        //         }
        //     }
        // ).then(
        //     () => {
        //         setIsRegistered(true);
        //     }
        // )
        
        // We will uses Axios Framework to hit the backent API to post and get the Data
        UserService.addUser(userInformation).then(
            (response) => {
                console.log(response);
                setIsRegistered(true);
            }

        )

        /*
        When the FrontEnd/UI Application cannot hit the backend application, becausse od the CORS Policy
        then we need to add the CrossOrigin to our backend Application
        */

    }
    if(isRegistered){
        return(
            <div>
                <SignedUp/>
            </div>
        )
    }
    else{
        return(
            <section align="center">
                <h1>USER REGISTRATION - SIGN UP</h1>
                <UserRegistrationForm onAddUser= {addUserHandler}/>
                <br></br>
                <button onClick={()=>navigate(-1)}>Back</button><br></br>
                <Link to="/">Home</Link><br></br>
                <Link to="/login">Login</Link> <br></br>
            </section>
        )
    }
}

export default UserRegistration;