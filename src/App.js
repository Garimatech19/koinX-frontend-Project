import logo from './logo.svg';
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Diffinfo from './components/Diffinfo';
import MayLike from './components/MayLike';
import Getstarted from './components/Getstarted';



function App() {
  return (
        <div className='w-screen h-screen'>
        <Navbar/>  
        <Main />
        <Diffinfo />
        <MayLike/>
        <div className='hidden sm:block md:block'>
          <Getstarted/>
        </div>
        {/* <Footer /> */}
        </div>
  );
}

export default App;
