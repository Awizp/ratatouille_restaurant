import React from 'react'

import { Header, About, SpecialMenu, Chef, Video, Laurels, Gallery, FindUs, Footer } from './sections'
import { Navbar } from './components'
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Video />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App

