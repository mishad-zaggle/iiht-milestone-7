import {Link} from 'react-router-dom';

function WelcomeScreen(){
    return (
        <section align = "center">
            <h1>Welcome to Misha's Wealth Management App</h1>
            <ol><h2> <Link to="/">Home</Link> </h2></ol>
            <ol><h2> <Link to="/register">Register</Link> </h2></ol>
            <ol><h2> <Link to="/login">Login</Link> </h2></ol>
      </section>
    )
}

export default WelcomeScreen;