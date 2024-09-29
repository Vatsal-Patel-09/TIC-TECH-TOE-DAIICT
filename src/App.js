import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Chat } from './chatbot';
import './App.css';
import { Navbar } from './navbar';
import { Contact } from './contact';
import { Hero } from './hero';
import { Footer } from './footer';
import { FAQ } from './faq';

function App() {
  return (
    <Router>
      <div className='dark:bg-gray-100'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/chatbot' element={<Chat />} />
        </Routes>
        <br/><br/><br/><br/>
        {/* Add the correct id to the sections */}
        <div id="Contact">
          <Contact />
        </div>
        
        <br/><br/><br/><br/>
        <div id="FAQ">
          <FAQ />
        </div>
        
        <br/><br/><br/><br/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
