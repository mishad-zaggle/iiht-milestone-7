import axios from "axios";

const EXPENSE_API_POST_URL = "http://localhost:8080/misha-wealth-management-api/v1/expenses/new-expense"
var EXPENSE_API_GET_URL = "http://localhost:8080/misha-wealth-management-api/v1/expenses/all-expenses/"

class ExpenseService{
    addExpense(expense){
        return axios.post(EXPENSE_API_POST_URL,expense);
    }

    getExpenses(user_id){
        console.log(EXPENSE_API_GET_URL+String(user_id))
        return axios.get( EXPENSE_API_GET_URL+String(user_id))
    }


}
export default new ExpenseService;