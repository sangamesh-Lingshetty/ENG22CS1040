import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homes from './components/Homes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardDetailes from './components/CardDetailes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homes />} />
          <Route path='/details/:id' element={<CardDetailes />} /> {/* Corrected path */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
