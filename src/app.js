import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import { addExpense } from './actions/expenses'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss'
import 'normalize.css/normalize.css'



const store = configureStore()

store.dispatch(addExpense({description: 'Water bill', amount: 3000, createdAt: 23000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 4000, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 3433000, createdAt: 900}))



const jsx = (
<Provider store = {store}>
    <AppRouter />
</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))