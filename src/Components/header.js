import React,{useContext, useState} from 'react'
import './design.css'
import TransContext from './TransContext'
import TransactionReducer from './TransReducer'
// import TransactionContext from './transactionContext';
// import TransactionReducer from './TransReducer';

const Headerr = () => {

    let {transaction, addToTransaction}=useContext(TransContext);
    let [newDesc, setDesc]=useState('');
    let [newAmount, setAmount]=useState(0);

    const getIncome=()=>{
        let income=0;
        for(var i=0;i<transaction.length;i++){
            if(transaction[i].amount>0){
                income +=transaction[i].amount
            }
        }
        return income;
    }
    const getExpense=()=>{
        let expense =0;
        for(var i=0;i<transaction.length;i++){
            if(transaction[i].amount<0){
                expense +=transaction[i].amount;
            }
        }
        return expense;
    }
    const handleDefault=(e)=>{ 
        e.preventDefault();
        console.log(newAmount,newDesc);
        addToTransaction({
            amount:Number(newAmount),
            description:newDesc
        })
        setDesc('');
        setAmount(0);
    }
    return (
        <div className='app'>   
            <h2 className='header'>Expense Tracker</h2>
            <h3>Your Balance <br /><span>{getIncome()+getExpense()}</span></h3>
            <div className='box'>
                <h2 className='income'>
                    INCOME <br /> ${getIncome()}
                </h2>
                <hr />
                <h2 className='expense'>
                    EXPENSE <br /> ${getExpense()}
                </h2>
            </div>
            <h2>History <hr />
            </h2>
            <ul className='transaction-list'>
                {transaction.map((transObj, ind)=>{
                    return (<li key={ind}>
                    <span>{transObj.description}</span>
                     <span>{transObj.amount}</span>
                </li>);
                })
            }
{/*                 
                <li>
                    <span>cash </span>
                    <span>+500</span>
                </li>
                <li>
                    <span>cash </span>
                    <span>+500</span>
                </li> */}
            </ul>
            <h3>
                Add New Transaction
            </h3>
            <hr />
            <form className='transaction-form' onSubmit={handleDefault}>
                <label>Enter Description
                <br />
                <input className='input' value={newDesc} onChange={(e)=>{
                    setDesc(e.target.value)}} type='text' placeholder='Description...' required></input>
                </label>
                <br />
                <label>Enter Amount
                <br />
                <input className='input' value={newAmount} onChange={(e)=>{
                    setAmount(e.target.value)}} type='number' placeholder='Amount....' required ></input>
                </label>
                <br />
                <input className='submit' type='submit' value='Add Transaction' required></input>                
                
            </form>



        </div>
    )
    }

export default Headerr;
