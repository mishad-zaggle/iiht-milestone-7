import {Routes, Route, Navigate} from 'react-router-dom';
import WelcomeScreen from './main_components/WelcomeScreen'
import UserRegistration from './main_components/UserRegistration';
import SignIn from './main_components/SignIn.js'
import LoggedIn from './main_components/helper_components/LoggedIn';
import UserInfoContext from './contexts/user-info-context';
import { useContext } from 'react';
import NewExpense from './main_components/helper_components/NewExpense';
import AllExpenses from './main_components/helper_components/AllExpense';
import NewCategory from './main_components/helper_components/NewCategory';
import AllCategories from './main_components/helper_components/AllCategories';

function AppRoutes(){
  // Routes and Route is used to to set up teh Routes, display abything
  const userInfoCtxt = useContext(UserInfoContext) 
  const userInfoList = userInfoCtxt.users
  let userRoutesList = []

  userInfoList.forEach((user_info,index)=>{
    var tempPath = "/login/user/" + user_info['id'] 
    console.log(tempPath+"/all-expenses")
    userRoutesList.push(<Route key= {index} exact path = {tempPath} element = {<LoggedIn/>}/>)
    userRoutesList.push(<Route key={index} exact path = {tempPath+"/new-expenses"} element = {<NewExpense/>}/>)
    userRoutesList.push(<Route key={index} exact path = {tempPath+"/all-expenses"} element = {<AllExpenses/>}/>)
  });

    return(
        <Routes>
        <Route exact path = "/" element = {<WelcomeScreen/>}/>
        <Route exact path = "/register" element = {<UserRegistration/>}/>
        <Route exact path = "/login/" element = {<SignIn/>}/>
        {/* {userRoutesList} */}
        {/* {console.log(userRoutesList)} */}
        <Route path="/user/:userId" element = {<LoggedIn/>} />
        <Route path="/user/:userId/new-expenses" element = {<NewExpense/>} />
        <Route path="/user/:userId/all-expenses" element = {<AllExpenses/>} />
        <Route path="/user/:userId/new-category" element = {<NewCategory/>} />
        <Route path="/user/:userId/all-categories" element = {<AllCategories/>} /> 
      </Routes>
    )
}
export default AppRoutes;