import './ExpenseItems.css';
import Card from '../UI/Card' ;

import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';


const ExpenseItems=(props)=>{

    const[newTitle,setNewTitle]=useState();
    
   const[title,setTitle]=useState(props.title);
   
    const clickhandler=()=>{
        setTitle(newTitle);
       
    }
    const changeHandler=(event)=>{
        setNewTitle(event.target.value);
    }
    
   return(
    
    <Card className='exp'>
        <ExpenseDate date={props.date}/>
    
    <div className='exp1'>
       <h2>{title}</h2>
       <div className='exp2'>${props.amount}</div>
        
        </div>
        <div>
            <input type="text" value={newTitle} onChange={changeHandler}/>
        <button onClick={clickhandler}>change title</button>
        </div>
    </Card>
   )
   
}
export default ExpenseItems;