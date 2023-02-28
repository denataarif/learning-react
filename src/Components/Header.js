import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='border-b p-3 flex justify-between items-center'>
        <Link to='/' className='font-bold'>AppHeaders</Link>
        <Navigation/>
    </div>
  )
}

export default Header