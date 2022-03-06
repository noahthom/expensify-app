import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key = {expense.id} description = {expense.description} amount = {expense.amount} createdAt = {expense.createdAt} id = {expense.id} />
        })}
    </div>
)


const mapStatetoProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filter)
    }
}

export default connect(mapStatetoProps)(ExpenseList)
