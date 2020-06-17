import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { GlobalContext } from "../Context/GlobalState"


export const ExpenseChart = () => {

  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


  // const text = transactions.map(transaction => transaction.text);


  const state = {

    labels: ["Earned", "Spent"],
    datasets: [
      {
        label: 'Spending Ratio',
      backgroundColor: [
        '#46ABA7',
        '#9E313E',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [income, expense]
      }
    ]
  }


  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: 'Spending Ratio',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  );

}

export default ExpenseChart