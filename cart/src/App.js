import React from 'react';
// import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
// import About from './components/About'
import Shopping  from './components/shoppingApplication'

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Shopping/>
    </div>
    </BrowserRouter>
  );
}

export default App;
