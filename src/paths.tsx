import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Index'
import Profile1 from './Profile1/Profile'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile1',
    element: <Profile1 />
  }
])
