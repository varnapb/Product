import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import User from './components/User'
import Admin from './components/Admin'
import AdminProfile from './components/AdminProfile'
import UserProfile from './components/UserProfile'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"));

  

       // Hide main navbar on dashboard routes or when user is logged in
      //  const showMainNavbar = !user && !['/user', '/admin'].includes(location.pathname)

  return (
    <>
      {/* {showMainNavbar && <Navbar/>}
      {user && <UserNavBar user={user} />} */}
      
      {/* {user ? (
        user.userType === "admin" ? <AdminNavBar/> : <UserNavBar />
      ) : (
        <Navbar /> 
      )}*/}
      <Navbar /> 
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/add' element={<Add />} />
        <Route path='/log' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
        <Route path='/user' element={<User />} />
        <Route path='/admin' element={<Admin />} /> 
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path='/adminprofile' element={<AdminProfile />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App