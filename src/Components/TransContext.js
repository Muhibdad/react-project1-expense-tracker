import React, { createContext, useReducer } from 'react'
import TransactionReducer from './TransReducer';
// import TransactionReducer from "./TransReducer";
// import React, {createContext, useReducer} from "react";
// import { Children } from "react/cjs/react.production.min";
// let initialTransaction=[
//         {amount: 500,description: "cash"},
//         {amount: 600,description: "cash"},
//         {amount: 120,description: "cash"}
// ]

// let {TransactionContext}=createContext(initialTransaction);

// export default TransactionContext;


// export const TransactionProvider =({children})=>{
// let [state, dispatch] = useReducer(TransactionReducer, initialTransaction); 

//         function addTransaction(transObj){
//                 dispatch({
//                         type:"ADD TRANSACTION",
//                         payload:{
//                                 amount: transObj.amount, description:transObj.description
//                         }
//                 })
//         }
//         return (
//                 <TransactionContext.Provider value={
//                        { transactions:state,
//                         addTransaction:addTransaction}
//                 }>
//                         {children}
//                 </TransactionContext.Provider>
//         )
// }

const initialTransaction=[
];

const TransContext = createContext(initialTransaction);

export default TransContext;

export const TransactionProvider=({children})=>{

 let [state, dispatch]=useReducer(TransactionReducer,initialTransaction);

 function addToTransaction(transactionObj){ 
        dispatch({ 
                type:"ADD",
                payload: {
                        amount:transactionObj.amount,
                        description:transactionObj.description
                }
        })
 }
 
 return(
         <TransContext.Provider value={
                { transaction: state,
                addToTransaction }
         }>
                 {children}
         </TransContext.Provider>
 )

}


