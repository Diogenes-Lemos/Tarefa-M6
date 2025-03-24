import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainStyles } from './mainStyles'
import Home from './Home/Index'
import Profile1 from './Profile1/Profile'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile1',
    element: <Profile1 />
  }
])

function App() {
  return (
    <div>
      <MainStyles />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
