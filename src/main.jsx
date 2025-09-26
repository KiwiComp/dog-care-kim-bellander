import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import StartPage from './PAGES/StartPage.jsx'
import AllDogsPage from './PAGES/AllDogsPage.jsx'
import CurrentDogsPage from './PAGES/CurrentDogsPage.jsx'
import ContactPage from './PAGES/ContactPage.jsx'


const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: StartPage},
      {path: "/all-dogs", Component: AllDogsPage},
      {path: "current-dogs", Component: CurrentDogsPage},
      {path: "/contact", Component: ContactPage}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <RouterProvider router={router} />
  //</StrictMode>,
)
