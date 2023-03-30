import React from 'react'
import Home from './page/Home'
import People from './page/People'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} >Home</Route>
          <Route exact path="/people" element={<People />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App