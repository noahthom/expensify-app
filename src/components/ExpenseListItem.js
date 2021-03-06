import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = (props) => (
    <div>
        <h3>Description: {props.description}</h3>
        <p>{props.amount} - {props.createdAt}</p>
        <button onClick={() => props.dispatch(removeExpense({id: props.id}))}>Remove</button>
    </div>
)



export default connect()(ExpenseListItem)

