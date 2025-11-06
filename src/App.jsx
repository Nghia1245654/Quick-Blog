import React from 'react'
import Login from "@/Page/Login"
import Registration from "@/Page/registration"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import BlogDetail from './Page/BlogDetail'
import Layout from './components/Layout'
const App = () => {
  return (
    <BrowserRouter>
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