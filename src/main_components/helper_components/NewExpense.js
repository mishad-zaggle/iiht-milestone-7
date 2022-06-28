import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link,useParams} from 'react-router-dom'
import ExpenseService from '../../services/ExpenseService';
import NewExpenseForm from './NewExpenseForm';
// useEffect is used during the getRequest, not 

function NewExpense(props){
    const {userId} = useParams();
    console.log(userId)
    const navigate = useNavigate()

    const [expenseIsUpdated, setExpenseIsUpdated] = useState(false);

    function addExpenseHandler(expenseInfo){
        // fetch('https://weath-management-app-by-misha-default-rtdb.firebaseio.com/expenses/'+userId+'.json',
        // {
        //     expenseInfo,
        //     method: 'POST',
        //     body: JSON.stringify(expenseInfo),
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // }
        // )
        ExpenseService.addExpense(expenseInfo).then( ()=>{
            setExpenseIsUpdated(true)
        }
        )
    }

    if(expenseIsUpdated){

        return(
            <section align ="center" >
                <h1>Expense added! </h1>
                <button onClick={()=>navigate(-1)}>Back</button> <br></br>
                <Link to={"/user/"+userId+"/all-expenses"}>All Expenses</Link>
            </section>
        )
        
    }

    return(
        <section align= "center">
            <h1>Create New Expense</h1>
            <NewExpenseForm onAddExpense={addExpenseHandler} userId={userId}/> <br></br>
            <button onClick={()=>navigate(-1)}>Back</button> <br></br> <br></br>
            <Link to="/">Home</Link> <br></br>
            <Link to={"/user/"+userId+"/all-expenses"}>All Expenses</Link>
        </section>
    )

}
export default NewExpense;