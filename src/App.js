import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
//import Home from './src/Home.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home/>} />
        <Route element={<About/>} />
      </Route>
    )
  )
  
  return (
    <div className='flex flex-col justify-between h-screen' >
      <h1>Hello</h1>
      <h2>Start your journey</h2>
    </div>
  )
}

const Root = () => {
  return (
    <>
    <div>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </div>

    <div>
      <Outlet />
    </div>
  </>
  )
  
}


export default App
