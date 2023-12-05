import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Company from './Pages/Company'
import About from './Pages/About'
import Contact from './Pages/Contact' 
import Resources from './Pages/Resources'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
      <Route path='' element={<Home/>} />
      <Route path='/company' element={<Company/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/resources' element={<Resources/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
   
  //  <Navbar/>
  //  <Hero/>
  //  <Analytics/>
  //  <Newsletter/>
  //  <Plans/>
  //  <Footer/>
)
