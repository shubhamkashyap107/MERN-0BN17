import React, { lazy, Suspense } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'
// import Profile from './Components/Profile'

const LazyLoadedHome = lazy(() => import("./Components/Home"))
const LazyLoadedProfile = lazy(() => import("./Components/Profile"))
const LazyLoadedAbout = lazy(() => import("./Components/About"))

const App = () => {
  return (
    <div>
      <Navbar />




      <Routes>
        <Route path='/' element={<LazyLoadedHome />} />
        <Route path='/home' element={<LazyLoadedHome />} />
        <Route path='/about' element={<LazyLoadedAbout />} />
        <Route path='/profile' 
          element={
            <Suspense fallback={<h1>Loading profile component...</h1>}>
              <LazyLoadedProfile />
            </Suspense>
         } />
      </Routes>
    </div>
  )
}

export default App