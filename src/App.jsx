import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Services from './Services'  // Add this import
import Contact from './Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'services',    // Add this route
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}