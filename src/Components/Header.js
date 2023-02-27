import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='border-b p-3 flex justify-between items-center'>
        <span className='font-bold'>AppHeaders</span>
        <Navigation/>
    </div>
  )
}

export default Header