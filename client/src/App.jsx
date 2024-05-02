import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactUs from './pages/ContactUs/ContactUs'
import ContactManagement from './components/ContactManagement/ContactManagement'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<ContactUs/>}/>
      <Route path='/dashboard' element={<ContactManagement/>}/>
      <Route path='/contact-management' element={<ContactManagement/>}/>
    </Routes>
    </>
  )
}

export default App
