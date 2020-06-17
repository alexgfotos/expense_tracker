import React, { useContext } from 'react'
import { GlobalContext } from "../Context/GlobalState"

// const history = localStorage.getItem("transactions");
// const parsedHistory = JSON.parse(history);
// console.log(...parsedHistory)

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);


    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>

            <li className={transaction.amount < 0 ? "minus" : "plus"}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}
