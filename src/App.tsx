import React, { useState } from 'react';
//import './App.css';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsTable } from './components/TransactionsTable/TransactionsTable';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

function App() {
  
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal } /> 
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose= {handleCloseNewTransactionModal}
      />
      <GlobalStyle/> 
    </>
  );
}

export default App;
