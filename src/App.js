import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Purchase from './Purchase';
import Community from './Community';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
   <>
    <Navbar/>
       

   
      <div >
      
            <Header scrollPosition={scrollPosition} />
            <About scrollPosition={scrollPosition} />
        
           
        </div>
   

<div className="purchase">
 <Purchase/>
 <Community/>
 </div>
</>
  );
}

export default App;
