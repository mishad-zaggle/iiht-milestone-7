import {useRef} from 'react';

function NewCategoryForm(props){
    const categoryIdRef = useRef();
    const categoryNameRef = useRef();

    function onSaveCategory(event){
        event.preventDefault();
        const categoryInfo = {
            id: categoryIdRef.current.value,
            name: categoryNameRef.current.value
        }
        console.log(categoryInfo)
        props.onSaveCategory(categoryInfo);
    }

    return(
        <div>
            <form onSubmit = {onSaveCategory}>
            <div>
                <label htmlFor = 'category_id'> Category ID </label>
                <input type="text" required id='category_id' ref={categoryIdRef}/> <br></br>
            </div>

            <div>
                <label htmlFor = 'category_name'> Category Name </label>
                <input type="text" required id='category_name' ref={categoryNameRef}/> <br></br>
            </div>

            <div>
            <br></br>
                <button>
                    Save
                </button>  <br></br>
            </div>
            </form>
        </div>
    )
}
export default NewCategoryForm;