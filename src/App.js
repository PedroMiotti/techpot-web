import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import GroupList from './components/GroupList/index';
import BottomNavbar from './components/BottomNavbar/index'

function App() {
  return (
    <div>
        <div id="div-navbar">
        <Navbar />
        </div>

        <div id="page">
          <div className="spaced">
          <GroupList titulo="Grupos"/>
          <GroupList titulo="Eventos"/>
          </div>
        </div>
        
        <div id="div-bottomnavbar">
        <BottomNavbar />
        </div>
        
    </div>
  );
}

export default App;
