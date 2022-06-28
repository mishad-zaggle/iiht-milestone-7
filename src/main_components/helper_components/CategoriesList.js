import {Link, useParams} from "react-router-dom"

function CategoriesList(props){
    const categories =  props.categories
    
    function getTableBodyAsReactElement(){

        const createTable = []
        createTable.push(<tr>
            <th>Category ID</th>
            <th>Category</th>
        </tr>)

        categories.map((category) =>{

            createTable.push(
                <tr>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
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
export default CategoriesList;