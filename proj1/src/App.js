// import ExpenseItems from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
import React from 'react';
const App=()=> {
  let expenses=[
    {
      
      title:'school fees',
      amount:250,
      date:new Date(2024,5,12)
    },
    {
      
      title:'books',
      amount:400,
      date:new Date(2024,5,14)
    },
    {
     
      title:'tution fees',
      amount:2500,
      date:new Date(2024,5,19)
    }
  ];
  return (
    <div>
    <h2>Monthly Expense Tracker</h2>
    <Expenses item={expenses}/>
   
   </div>
   
  );
}

export default App;
