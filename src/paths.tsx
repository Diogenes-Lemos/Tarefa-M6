import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Index'
import Profile1 from './pages/Profile/Profile'
import Cart from './components/Cart'

export const Paths = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile1 />} />
  </Routes>
)
