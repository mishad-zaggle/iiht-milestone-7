import {Link, useParams} from  "react-router-dom"

function ExpensesList(props){
    const expenses =  props.expenses
    const {userId} = useParams()
    
    function getTableBodyAsReactElement(){

        const createTable = []
        createTable.push(<tr>
            <th>Expense ID</th>
            <th>Expense Date</th>
            <th>Description</th>
            <th>Location</th>
            <th>Category ID</th>
            <th>User ID</th>
        </tr>)


        expenses.map((expense) =>{

            createTable.push(
                <tr>
                    <td>{expense.id}</td>
                    <td>{expense.date}</td>
                    <td>{expense.description}</td>
                    <td>{expense.location}</td>
                    <td>{expense.category_id}</td>
                    <td>{expense.user_id}</td>
                </tr>
            )
        }
        )
        console.log(createTable)
        return(
            <tbody>
            {createTable}
            </tbody>
        )
    }

    return(
        <div align="center">
            <table border="2">
                {getTableBodyAsReactElement()}
            </table>
            <br></br>
        </div>
    )

}
export default ExpensesList;