import {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import classes from './Expenses.module.css';

import ExpenseFilter from './ExpensesFilter';

function Expenses(props){
    
    const [filteredYear, setFilteredYear]=useState('2019')
    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear)
        console.log(selectedYear)
    }
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear
    })
    let expensesContent=<p>there is no item for you....</p>
    if(filteredExpenses.length>0){
        expensesContent=filteredExpenses.map((expense)=>(
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            price={expense.price} 
            date={expense.date} 
            />
        ))
    }

    return(
        <div className={classes.cover}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expensesContent}
        </div>
    )
}
export default Expenses;