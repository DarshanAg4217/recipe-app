import React from 'react'
import MainRoutes from './assets/routes/MainRoutes'
import Nav from './assets/components/Nav'

const App = () => {
  return (
    <div className='w-screen h-full text-white  font-thin py-10 px-50 text-2xl bg-gray-800'>
    <Nav />
      <MainRoutes /> 
    </div>
  )
}

export default App
