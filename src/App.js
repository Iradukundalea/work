import React from 'react';
import './App.css';
import Nav from './com/nav/Nav';
import Navbar from './com/navbar/Navbar';
import Navi from './com/navi/Navi';
import Home from './com/Home/Home';
import Pa from './com/paragraph/Pa';
import Card from './com/card/Card';
import Cardim from './com/Cardpic/Cardim';
import Footer from './com/footer/Footer';


const App = ()=> {
  return (
    <div className="App">
      <Nav />
      <Navbar />
      <Navi />
      <Home />
      <Pa />
      <Card />
      <Cardim />
      
      <Footer/>
     </div>
  );
}

export default App;
