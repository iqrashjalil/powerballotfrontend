import react from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Navbar } from './components/Navbar'
import { Candidates } from './pages/Candidates'
import { Cast_Vote } from './pages/Cast_Vote'
import { Footer } from './components/Footer'
import { Logout } from './pages/Logout'
import { Protected } from './components/Protected'
import { Result } from './pages/Result'
import { Admin_Home } from './pages/admin/Admin_Home'
import { Admin_Candidates } from './pages/admin/Admin_Candidates'
import { Add_Candidates } from './pages/admin/Add_Candidates'

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/candidates' element={<Protected Component = {Candidates} />}/>
        <Route path='/castvote' element={<Protected Component = {Cast_Vote} />}/>
        <Route path='/logout' element ={<Logout />}/>
        <Route path='/result' element={<Result />} />
        <Route path='/admin/home' element={<Admin_Home />} />
        <Route path='/admin/candidates' element={<Admin_Candidates />} />
        <Route path='/admin/add_candidate' element={<Add_Candidates />} />

      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </>
  )
}

export default App
