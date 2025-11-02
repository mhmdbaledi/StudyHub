import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from '../src/components/Navbar.jsx'
import Home from '../src/pages/Home.jsx'
import Resources from '../src/pages/Resources.jsx'
import Login from '../src/pages/Login.jsx'
import Profile from '../src/pages/Profile.jsx'

function App() {
  return (
     <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      fontFamily: 'Vazir, Arial, sans-serif'
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Box>
  )
}

export default App