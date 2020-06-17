import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Borger', amount: -20 },
        { id: 2, text: 'Sold Plasma', amount: 300 },
        { id: 3, text: '3 Costco Dogs', amount: -10 },
        { id: 4, text: 'Cactus', amount: -15 }]
}

localStorage.setItem("transactions", JSON.stringify(initialState.transactions))
// Create context

export const GlobalContext = createContext(initialState)

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })

    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}