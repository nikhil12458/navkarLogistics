import { RouterProvider } from 'react-router'
import './App.css'
import { routes } from './app.routes.jsx'

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
