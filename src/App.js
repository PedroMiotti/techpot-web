import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';



// Pages
  import FeedGrupo from './pages/FeedGrupo/index';
  import Login from './pages/Login';
  import Main from './pages/Main';

const App = () => {
  return (
    <div className="App">
        {/* <FeedGrupo /> */}
        <div id="div-navbar">
          <Navbar/>
        </div>

        <Main />
    </div>

    
  );
};

export default App;
