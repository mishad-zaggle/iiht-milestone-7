import {useRef} from 'react'
// For taking inputs from Forms - Concept of References - useRef
// References are sed to read the inputs given by the users

function UserRegistrationForm(props){
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();

    function onSubmitHandler(event){
        event.preventDefault(); // to prevent the browser from reloading
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword =  passwordInputRef.current.value;
        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName =  lastNameInputRef.current.value;
        
        const userRegistrationInfo = {
            email: enteredEmail,
            password: enteredPassword,
            first_name: enteredFirstName,
            last_name: enteredLastName
        }

        console.log(userRegistrationInfo)
        props.onAddUser(userRegistrationInfo) // Passing the information to The function onAddUser through Props
    }

    return(
        <div>
            <form onSubmit = {onSubmitHandler}>
                
                <div>
                    <label htmlFor = 'email'>E-mail  </label>
                    <input type='text' required id='eamil' ref={emailInputRef}></input> <br></br>
                </div>

                <div>
                    <label htmlFor = 'password'>Password  </label>
                    <input type='text' required id='password' ref={passwordInputRef}></input> <br></br>
                </div>

                <div>
                    <label htmlFor = 'firstName'>First Name  </label>
                    <input type='text' required id='firstName' ref={firstNameInputRef}></input> <br></br>
                </div>

                <div>
                    <label htmlFor = 'lastname'>Last Name  </label>
                    <input type='text' required id='lastName' ref={lastNameInputRef}></input> <br></br>
                </div>
                <div>
                    <button>
                        Sign Up
                    </button>  <br></br>
                </div>
            </form>
        </div>
    );
    
}

export default UserRegistrationForm; 