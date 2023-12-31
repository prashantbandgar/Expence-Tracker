import './Expenses.css';
import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import React from 'react';


const Expenses=(props)=>{
    return(
        <Card className='expenses'>
            <ExpenseItems 
      
      date={props.item[0].date} 
      title={props.item[0].title} 
      amount={props.item[0].amount}/>

    
    <ExpenseItems 
       
       date={props.item[1].date} 
       title={props.item[1].title} 
       amount={props.item[1].amount}/>

    
    <ExpenseItems 
    
    date={props.item[2].date} 
    title={props.item[2].title} 
    amount={props.item[2].amount}/>
      </Card>

    );


}

export default Expenses;