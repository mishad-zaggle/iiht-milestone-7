import {useState} from 'react';
import {useNavigate, Link, useParams} from 'react-router-dom';
import CategoryService from '../../services/CategoryService.js'
import NewCategoryForm from './NewCategoryForm.js'

function NewCategory(){
    const [categoryIsSaved, setCategoryIsSaved] =  useState(false);
    const userId = useParams()
    const navigate = useNavigate()

    function addNewCategoryHandler(categoryInfo){
        console.log(categoryInfo)
        CategoryService.addCategory(categoryInfo).then(
            () =>{
                //console.log(response.data);
                setCategoryIsSaved(true);}
        )
    }

    if(categoryIsSaved){
        navigate(-1);
    }

    else{

    return(
        <div align = "center">
            <h1>Create New Category </h1>
            <NewCategoryForm onSaveCategory= {addNewCategoryHandler}/>
            <br></br>
            <button onClick={()=>navigate(-1)}>Back</button><br></br>
            <br></br>
            <Link to="/">Home</Link><br></br>
            {/* <Link to={"/user/"+userId+"/all-categories"}>All Categories</Link> */}
        </div>
    )
    }

}
export default NewCategory;