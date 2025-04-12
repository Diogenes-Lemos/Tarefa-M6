import { MainStyles } from './mainStyles'
import { RouterProvider } from 'react-router-dom'
import { routes } from './paths'

function App() {
  return (
    <div>
      <MainStyles />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
