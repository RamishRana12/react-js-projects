import { useState } from 'react'
import './App.css'
import Navigation from './navigation/navigation'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Memberproject from './components/member project/Memberproject'
import Blog from './components/blog/blog'
import Gui from './navigation/dropdown components/Gui'
import Template from './navigation/dropdown components/template page/Template'
import Three from './navigation/dropdown components/template page/3d'
import Animator from './navigation/dropdown components/template page/animation'
import { AnimatePresence } from 'framer-motion'
const router=createBrowserRouter([
  {
    path:'/',
    element:
    <div>
       <Navigation/>
      <Home/>
      
    </div>,
  },
  {
    path:'/about',
    element: <div>
     <Navigation/>
    <About/>
  </div>,
  },
  {
    path:'/gui',
    element: <div>
     <Navigation/>
    <Gui/>
  </div>,
  },
  {
    path:'/template',
    element: <div>
     <Navigation/>
     <Template/>
  </div>,
  },
  {
    path:'/animation',
    element: <div>
     <Navigation/>
     <Animator/>
  </div>,
  },
  {
    path:'/3d',
    element: <div>
     <Navigation/>
     <Three/>
  </div>,
  },
  {
    path:'/memberproject',
    element: <div>
     <Navigation/>
    <Memberproject/>
  </div>,
  },
  {
    path:'/blog',
    element: <div>
     <Navigation/>
    <Blog/>
  </div>,
  },
 
])

function App() {
 
  return (
    <>
     <AnimatePresence mode='wait'>
     <RouterProvider router={router}/>
     </AnimatePresence>
   
    </>
  )
}

export default App
