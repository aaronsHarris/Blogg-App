import React from 'react'
import { Nav } from '../Nav/Nav'

export const Layout = () => {
  return (
    <div className='layout'>
        <Nav />
        <div className="layout-children">
            {props.children}
        </div>
        <Footer />
    </div>
  )
}
