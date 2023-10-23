import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1'
    date: new Date(2023, 10, 23),
    title: 'New book',
    price: 30.99
  },
  {
    id: 'e2'
    date: new Date(2023, 10, 23),
    title: 'New jeans',
    price: 99.99
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses) => {
      return [expense, ...expenses]
    })
  }

  console.log(expenses)

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
