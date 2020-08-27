import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';



// Pages
  import FeedGrupo from './pages/FeedGrupo/index'
  import Login from './pages/Login'

const App = () => {
  return (

    <div className="App">
        {/* <FeedGrupo /> */}
        <Navbar/>
        <FeedGrupo />
    </div>

  );
}

export default App;
