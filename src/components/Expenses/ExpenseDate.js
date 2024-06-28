
import classes from './ExpenseDate.module.css';

function ExpenseDate(props){
    const day=props.date.toLocaleString('en-US', {day: '2-digit'})
    const month=props.date.toLocaleString('en-US', {month: 'long'})
    const year=props.date.getFullYear();
    return(
        <div className={classes.date}>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
    )
}
export default ExpenseDate;
