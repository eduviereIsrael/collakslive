import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div style={{width: '100vw', overflowX: 'hidden', boxSizing: 'border-box'}} className="layout">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout