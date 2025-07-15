import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='outfit'>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App