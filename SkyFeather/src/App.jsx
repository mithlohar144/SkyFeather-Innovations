import { RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { router } from './app.route'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  )
}

export default App