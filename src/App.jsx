import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'


const App = () => {
  return (
    <div className='outfit'>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App