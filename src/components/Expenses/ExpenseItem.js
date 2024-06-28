
import ExpenseDate from './ExpenseDate';
import classes from './ExpenseItem.module.css';

function ExpenseItem(props){
    return(
        <div className={classes.parent}>
            <ExpenseDate date={props.date} />
            <div className={classes.child_parent}>
                <h1>{props.title}</h1>
                <div>
                    <div className={classes.price}>{props.price}</div>
                </div>
            </div>
        </div>
    )
}
export default ExpenseItem;