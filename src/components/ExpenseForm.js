import React, { useState } from "react";




const ExpenseForm = (props) => {

    const [description, setDescription] = useState('')
    const [note, setNote] = useState('')
    const [amount, setAmount] = useState(0)

    const onDescriptionChange = (e) => {
        const description = e.target.value
        setDescription(description)
    }

    const onNoteChange = (e) => {
        const note = e.target.value
        setNote(note)
    }

    const onAmountChange = (e) => {
        const amount  = e.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            setAmount(amount)
        }
    }

    return (
        <div>
            <form>
                <input placeholder="Description" type="text" autoFocus value={description} onChange={onDescriptionChange}/>
                <input type="text" placeholder="Amount" value={amount} onChange={onAmountChange}/>
                <textarea placeholder="Add a note for your expense." value={note} onChange={onNoteChange}></textarea>
                <button>Add Expense</button>
            </form>
        </div>
    )

}

export default ExpenseForm