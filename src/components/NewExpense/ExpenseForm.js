import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')

const [userInput, setUserInput] = useState({
	enteredTitle: '',
	enteredAmount: '',
	enteredDate: ''
})

	const titleChangeHandler = (event) => {
		setUserInput({
			...userInput,
			enteredTitle: event.target.value
		})
	}

	const amountChangeHandler = (event) => {
		setUserInput({
			...userInput,
			enteredAmount: event.target.value
		})
	}

	const dateChangeHandler = (event) => {
		setUserInput({
			...userInput,
			enteredDate: event.target.value
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		}
		props.onSaveExpenseData(expenseData)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}

	return(
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} value={enteredTitle} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="1" step="1" onChange={amountChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}/>
				</div>
			</div>
			<div>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)	
}
export default ExpenseForm