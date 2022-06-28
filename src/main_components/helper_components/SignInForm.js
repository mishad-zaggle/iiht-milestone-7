import {useRef} from 'react';

function SignInForm(props){
    const emailIdRef = useRef();
    const passwordRef = useRef();
    
    function onSubmitHandler(event){
        event.preventDefault();
        const enteredEmail = emailIdRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const userLoginInfo = {
            email: enteredEmail,
            password: enteredPassword
        }
        props.onLoginUser(userLoginInfo)
    }
    return(
        <div>
            <form onSubmit = {onSubmitHandler}>
                <div>
                    <label htmlFor="email">Email ID  </label>
                    <input type="text" required id="email" ref={emailIdRef}/>
                </div>
                <div>
                    <label htmlFor="password">Password  </label>
                    <input type="text" required id="password" ref={passwordRef}/>
                </div>
                <div>
                    <button>
                        Log in
                    </button>  <br></br>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;