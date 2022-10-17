import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <About/>
        <Services />
        <Portfolio />

    </div>
  );
}

export default App;
