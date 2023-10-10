import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2023, 9, 6),
      title: 'New book',
      price: 39.99
    },
    {
      date: new Date(2023, 9, 6),
      title: 'New bag',
      price: 59.99
    }
  ]

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
