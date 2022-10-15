import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <About/>
        <Services />

    </div>
  );
}

export default App;
