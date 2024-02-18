import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from './context/appContext'
import Home from "../src/pages/Home";

export default function App() {
  return (
    <AppContext>
        <BrowserRouter>
          <div className='flex flex-col h-full'>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/:id" exact element = {<Home/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </AppContext>
  )
}
