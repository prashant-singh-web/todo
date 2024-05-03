import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './component/HomePage'
import LoginPage from './component/LoginPage'

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}  />
          <Route path="/login" element={<LoginPage/>}  />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
