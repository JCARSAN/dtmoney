import React from 'react';
//import './App.css';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionsTable } from './components/TransactionsTable/TransactionsTable';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header/> 
      <Dashboard/>
      <GlobalStyle/> 
    </>
  );
}

export default App;
