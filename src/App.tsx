import { BrowserRouter } from 'react-router-dom'
import { Paths } from './paths'

import { MainStyles } from './mainStyles'

function App() {
  return (
    <div>
      <MainStyles />
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </div>
  )
}

export default App
