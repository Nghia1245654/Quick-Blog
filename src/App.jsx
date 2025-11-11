import React from 'react'
import Login from "@/pages/Login"
import Registration from "@/pages/Registration"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import Layout from './components/Layout'
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
        <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog/:id" element={<BlogDetail />} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App