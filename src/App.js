import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-screen border p-2 border-black h-screen box-border'>
  <Header/>
  <Body/>
  <Footer/>
    </div>
  )
}

export default App