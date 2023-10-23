import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = () => {
	let expensesContent = <p>No expenses found.</p>
	if(filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => {
			return <ExpenseItem
				id={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			><ExpenseItem>
		})
	}

	return (
		<ul className="expenses-list">
			{
				props.filteredExpenses.map((expense) => {
					return <ExpenseItem
						id={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					></ExpenseItem>
				})
			}
		</ul>
	)

}
export default ExpensesList