import './App.css';
import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES=[
  {id: 'e1', title: 'a book', price: '234.23', date: new Date(2021, 4, 12)},
  {id: 'e2', title: 'a shirt', price: '322.12', date: new Date(2011, 3, 22)},
  
]

function App(){
  const [expenses, setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=expense=>{
    console.log(expense)
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }
  return(
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}
export default App;