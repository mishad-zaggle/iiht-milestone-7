import {Link} from 'react-router-dom'
function SignedUp(props){
    return(
        <div>
        <h1>You have Signed Up Successfully!</h1> <br></br>
        <Link to="/">Home</Link> <br></br>
        <h2><Link to ="/login"> Click here to Login</Link></h2>
        </div>
    )
}

export default SignedUp; 
