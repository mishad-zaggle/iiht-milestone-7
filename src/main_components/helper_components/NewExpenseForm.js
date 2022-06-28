import {useRef} from 'react'

function NewExpenseForm(props){
    const expenseIdRef = useRef()
    const expenseDateRef = useRef()
    const expenseDescriptionRef= useRef()
    const expenseLocationRef = useRef()
    const expenseCategoryRef = useRef()

    function onSubmitHandler(event){
        event.preventDefault()
        const enteredID = expenseIdRef.current.value
        const enteredDate = expenseDateRef.current.value
        const enteredDescription = expenseDescriptionRef.current.value
        const enteredLocation = expenseLocationRef.current.value
        const enteredCategory  = expenseCategoryRef.current.value

        const expenseInfo = {
            id: enteredID,
            date: enteredDate,
            description: enteredDescription,
            location: enteredLocation,
            category_id: enteredCategory,
            user_id: props.userId
        }
        console.log(expenseInfo)
        props.onAddExpense(expenseInfo)
    }

    return(
        <section>
            <form onSubmit = {onSubmitHandler}>
                <div>
                        <label htmlFor = 'id'>Expense ID  </label>
                        <input type='text' required id='id' ref={expenseIdRef}></input> <br></br>
                    </div>

                    <div>
                        <label htmlFor = 'date'>Espense Date  </label>
                        <input type='date' required id='date' ref={expenseDateRef}></input> <br></br>
                    </div>

                    <div>
                        <label htmlFor = 'description'>Description  </label>
                        <textarea required id='description' ref={expenseDescriptionRef}/> <br></br>
                    </div>

                    <div>
                        <label htmlFor = 'location'>Location</label>
                        <input type='text' required id='location' ref={expenseLocationRef}></input> <br></br>
                    </div>

                    <div>
                        <label htmlFor = 'category'>Category  </label>
                        <input type='text' required id='category' ref={expenseCategoryRef}></input> <br></br>
                    </div>
                    <div>
                        <button>
                            Create
                        </button>  <br></br>
                    </div>
            </form>
        </section>
    )
}

export default NewExpenseForm;