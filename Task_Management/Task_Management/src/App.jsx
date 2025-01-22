import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTask from './Pages/AddTask';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddTask />} /> 
        </Routes>
      </Router>

    </>
  )
}

export default App;
