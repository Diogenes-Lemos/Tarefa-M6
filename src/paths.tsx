import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home/Index'
import Profile1 from './pages/Profile/Profile'
import Checkout from './pages/Checkout'

export const Paths = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location } | null
  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile1 />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      )}
    </>
  )
}
