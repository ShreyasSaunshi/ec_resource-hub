import React from "react";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './Components/home/Home';
import Subject from './Components/subject/Subject';
import GetInTouch from './Components/getintouch/Getintouch';
import Aboutus from './Components/aboutus/Aboutus'
import Footer from './Components/footer/Footer'


function App() {
  return (
    <>
    <Homepage/>
    <Subject/>
    <GetInTouch/>
    <Aboutus/>    
    <Footer/>
    </>
  );
}

export default App;
