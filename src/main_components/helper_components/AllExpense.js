import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import ExpensesList from './ExpensesList'
import {Link} from  "react-router-dom"
import styled from "styled-components"
import UserService from '../../services/UserService'
import ExpenseService from '../../services/ExpenseService'
 

function AllExpense(props){
    const {userId} = useParams()
    const [isLoading, setIsLoading] =  useState(true)
    const [loadedExpenses, setLoadedExpenses] =  useState([])
    const navigate = useNavigate()

    useEffect( () => {
    //     fetch(
    //         'https://weath-management-app-by-misha-default-rtdb.firebaseio.com/expenses/'+userId+'.json',
    //     ).then((response)=>{
    //         return response.json()
    //     }).then(
    //         (data)=>{
    //             const expenses_list = []
    //             for(const key in data){
    //                 const expense_info = {
    //                     ...data[key]
    //                 }
    //             expenses_list.push(expense_info)
    //             }
    //             setIsLoading(false)
    //             setLoadedExpenses(expenses_list)
    //         }
    //     )
    // 
    const fetchData = async () => {
        try{
            const response = await ExpenseService.getExpenses(userId)
            setLoadedExpenses(response.data)
        }
        catch(error){
            console.log(error)
        }
        setIsLoading(false);
    };
    fetchData();
    },[]);

    if(isLoading){
        return(
            <div>
                LOADING...
            </div>
        )
    }

    return (
        <section align="center">
            <h1>ALL EXPENSES</h1>
            <ExpensesList expenses= {loadedExpenses} />
            <button onClick={()=> navigate(-1)}> Back </button>
            <br></br>
            <Link to="/">Home</Link> <br></br>
            <Link to={"/user/"+userId+"/new-expenses"}>New Expense</Link>
        </section>
    )
}
export default AllExpense;