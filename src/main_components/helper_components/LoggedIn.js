import {Link,useLocation, useNavigate} from 'react-router-dom'

function LoggedIn(props){
    const {state} = useLocation()
    const navigate = useNavigate()

    var userId

    console.log(state==null)
    console.log(props)

    if(state!=null){
        userId = state.id
    }
    else if(props!=null){
        userId = props.id
    }
    else{
        userId = null
    }

    // new link  creation
    const newTo = {
        pathname: "/user/"+userId+"/new-expenses",
        //param1: {userId : userId } 
    }

    const allTo = {
        pathname: "/user/"+userId+"/all-expenses"
    }

    const newCatto = {
        pathname: "/user/"+userId+"/new-category"
    }

    const allCatTo = {
        pathname: "/user/"+userId+"/all-categories"
    }

    return(
        <div align="center">
            <h1>Welcome {state.first_name + " "+state.last_name}</h1>
            <ol><button onClick={()=>navigate(-1)}>Sign Out</button></ol>
            <ol><Link to={newTo}>Add New Expense</Link> </ol>
            <ol><Link to={newCatto}>Add New Category</Link></ol>
            <ol><Link to={allTo}>Show all Expenses</Link></ol>  
            <ol><Link to={allCatTo}>Show all Categories</Link></ol>
        </div>
    )
    
}

export default LoggedIn;