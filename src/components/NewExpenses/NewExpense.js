import ExpenseForm from "./ExpenseForm";
import classes from './NewExpense.module.css'

function NewExpense(props){
    const saveExpenseDataHandler=enteredExpenseData=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return(
        <div className={classes.parent_component}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
export default NewExpense;