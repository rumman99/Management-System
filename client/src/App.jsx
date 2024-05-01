import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactUs from './pages/ContactUs/ContactUs'
import Dashboard from './pages/ContactUs/Dashboard/Dashboard'
import ContactManagement from './components/ContactManagement/ContactManagement'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<ContactUs/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/contact-management' element={<ContactManagement/>}/>
    </Routes>
    </>
  )
}

export default App
