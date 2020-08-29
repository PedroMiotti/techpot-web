import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
<<<<<<< HEAD
import GroupList from './components/GroupList/index';
import BottomNavbar from './components/BottomNavbar/index'
=======
>>>>>>> 3c9098d7c44cdb5c0381e72a507cff94844a9362



// Pages
  import FeedGrupo from './pages/FeedGrupo/index';
  import Login from './pages/Login';
  import Main from './pages/Main';

const App = () => {
  return (
<<<<<<< HEAD
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
        
=======

    <div className="App">
        {/* <FeedGrupo /> */}
        <div id="div-navbar">
          <Navbar/>
        </div>

        <Main />
>>>>>>> 3c9098d7c44cdb5c0381e72a507cff94844a9362
    </div>

  );
}

export default App;
