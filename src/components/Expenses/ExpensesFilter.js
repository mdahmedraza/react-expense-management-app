import React from 'react';
import classes from './ExpensesFilter.module.css';

const ExpensesFilter=(props)=>{
    const dropdownChangeHandler=event=>{
        props.onChangeFilter(event.target.value);
    }
    return(
        <div className={classes.parentFilter}>
            <label>selected by year...</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}
export default ExpensesFilter;

/*import React from 'react';
import classes from './ExpensesFilter.module.css';

const ExpensesFilter=props=>{
    const dropdownChangeHandler=event=>{
        props.onChangeFilter(event.target.value);
    }
    return(
        <div >
            <div className={classes.parentFilter}>
                <label>filtered by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter;*/