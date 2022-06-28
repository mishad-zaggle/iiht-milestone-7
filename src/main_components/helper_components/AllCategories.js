import {useEffect, useState} from 'react'
import {useParams,useNavigate, Link} from 'react-router-dom'
import CategoriesList from './CategoriesList.js'
import CategoryService from '../../services/CategoryService.js'


function AllCategories(){
    const [isLoading, setIsLoading]= useState(true)
    const [loadedCategories, setLoadedCategories] = useState()
    const navigate = useNavigate()
    const userId =  useParams()

    useEffect(
        () => {
        const fetchCategories= async ()=>{
            try{
                const response = await CategoryService.getCategoryList();
                setLoadedCategories(response.data)
            }
            catch(error){
                console.log(error)
            }
            setIsLoading(false);
        };
        fetchCategories();
        }
        , []);

    if(isLoading){
        return<div>
           <h1> LOADING...</h1>
        </div>
    }

    return(
        <div align = "center">
            <h1>ALL CATEGORIES </h1>
            <CategoriesList categories = {loadedCategories}/>
            <button onClick = {()=> navigate(-1)}> Back </button>
            <br></br>
            <Link to="/">Home</Link> <br></br>
            {/* <Link to={"/user/"+userId+"/new-category"}>New Category</Link> */}
        </div>
    )
}
export default AllCategories;