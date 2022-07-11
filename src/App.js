import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import { movies } from './data';
import { Typography } from '@mui/material';
import axios from "axios";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Home';
import Card from './Card';





function App() {
  
  return (
    <div className="App">
         <Card/>
         <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home/>}></Route>

            </Routes>

         </BrowserRouter>

        
      
      
    </div>
  );
}

export default App;
