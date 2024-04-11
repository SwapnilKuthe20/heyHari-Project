import React from 'react'
import LogIn from "./Components/LogIn";
import { Routes, Route } from 'react-router-dom';
import DashboardRoutes from './AdminSide/DashboardRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>

      <DashboardRoutes />
      
    </>
  )
}

export default App
