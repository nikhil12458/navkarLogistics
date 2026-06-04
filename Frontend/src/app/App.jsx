import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { routes } from './app.routes.jsx'

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
