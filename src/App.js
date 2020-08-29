import React from 'react';
import './App.css';

// Componentes
  import Navbar from './components/Navbar/index';


// Pages
  import FeedGrupo from './pages/FeedGrupo/index';
  import Login from './pages/Login';
  import FeedPrincipal from './pages/FeedPrincipal';

const App = () => {
  return (
    <div className="App">

        <Navbar/>

        <FeedGrupo />
        {/* <Login /> */}
        {/* <FeedPrincipal /> */}
        
    </div>

    
  );
};

export default App;
