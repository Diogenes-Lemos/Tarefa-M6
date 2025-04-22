import { Routes, Route } from 'react-router-dom'

import Home from './Home/Index'
import Profile1 from './Profile/Profile'

export const Paths = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile1 />} />
  </Routes>
)
