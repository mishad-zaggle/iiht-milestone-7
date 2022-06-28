import SignInForm from "./helper_components/SignInForm";
import UserInfoContext from "../contexts/user-info-context";
import {useState, useContext} from 'react'
import {Link,useNavigate, Navigate} from "react-router-dom";

// Only thing Left -- how to show Error in Login Promp

function SignIn(){
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userInfoCxt = useContext(UserInfoContext);
    const [isWrongCredential, setIsWrongCredential] = useState(false);
    const [currentUserInfo, setCurrentUserInfo] = useState({})
    const navigate = useNavigate()

    function signInHandler(userLoginInfo){
        const enteredEmail = userLoginInfo['email']
        const enteredPassword = userLoginInfo['password']
        const userInfoList = userInfoCxt.users

        console.log(userInfoList)
        for(const index in userInfoList){
            const user_info = userInfoList[index]
            console.log(user_info.email)
            if (user_info.email  === enteredEmail){
                if(user_info.password === enteredPassword){
                    setIsLoggedIn(true)
                    setCurrentUserInfo(user_info)
                    console.log(user_info)
                    //navigate({pathname: "/user/"+user_info.user_id, state: { id: 1, name: "sabaoon" } })
                    //navigate({pathname: "/user/misha_dey", state:{ id: 1, name: "sabaoon" } });
                    break
                }
                else{
                    setIsWrongCredential(true)
                }

            }
            if(index===userInfoList.length-1){
                setIsWrongCredential(true)
            }
        }

    }
    const userId=currentUserInfo['id']
    console.log(currentUserInfo)
    
    if(isLoggedIn){
        console.log("Logged In")
        return(
            <div>
                <Navigate to={'/user/'+userId} state={currentUserInfo}></Navigate>
            </div>
        )
    }
    else{
        return(
            <div align="center">
                <h2>Log in to your account</h2>
                <SignInForm onLoginUser={signInHandler}/>
                <br></br>
                <button onClick={()=>navigate(-1)}>Back</button><br></br>
                <Link to="/">Home</Link><br></br>
                <Link to="/register">Register</Link> <br></br>
            </div>
        )
        
    }


}
export default SignIn;