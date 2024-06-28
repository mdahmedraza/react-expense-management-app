import classes from './ExpenseForm.module.css';
import {useState} from 'react';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredPrice, setEnteredPrice]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
    const titleChangeHandler=event=>{
        setEnteredTitle(event.target.value)
    }
    const priceChangeHandler=event=>{
        setEnteredPrice(event.target.value)
    }
    const dateChangeHandler=event=>{
        setEnteredDate(event.target.value)
    }
    const submitHandler=event=>{
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }
    
    return(
            <form onSubmit={submitHandler} className={classes.form_parent}>
                <div className={classes.child_parent}>
                    <div className={classes.sub_child_parent}>
                        <label>title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} placeholder="name...." />
                    </div>
                    <div className={classes.sub_child_parent}>
                        <label>price</label>
                        <input type='number' value={enteredPrice} onChange={priceChangeHandler}  min="0.01" step="0.01" placeholder='price....' />
                    </div>
                </div>
                <div className={classes.child_parent}>
                    <div className={classes.sub_child_parent}>
                        <label>date</label>
                        <input type='date' value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31" />
                    </div>
                    <div className={classes.sub_child_parent}>
                        <button type='submit'>addig-expenses</button>
                    </div>
                </div>
            </form>
    )
}
export default ExpenseForm;