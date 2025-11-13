import React from 'react'
import Login from "@/pages/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import Layout from './components/Layout'
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "@/contexts/authContext";
import SignUp from '@/pages/SignUp'
const App = () => {
  return (
    <BrowserRouter>
        <AuthContextProvider>
        <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog/:id" element={<BlogDetail />} />
        </Route>
          <Route path="login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            {/* compatibility route: some links or bookmarks may use /registration */}
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App