import React,{ useContext, useState } from 'react';
import './App.css';
import Headerr from './Components/header';
// import Expense from './Components/header';
import { TransactionProvider } from './Components/TransContext';
import TransactionReducer from './Components/TransReducer'


// import TransactionContext from './Components/transactionContext';
// import {TransactionProvider} from './Components/transactionContext';

// import TransContext from './Components/TransContext';
// import TransactionReducer from './Components/TransReducer';


function App() {

  // const value = useContext(TransContext);
  // let val =useContext(TransContext);
  return (
    <TransactionProvider>
      <Headerr></Headerr> 
   </TransactionProvider>

    
   
  );
}

export default App;
