import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <p className='font-bold text-2xl'>Contact Us</p>
        <ul>
            <li>Instagram : <Link to="https://www.instagram.com/denataarifnurm/" className='text-blue-500'>denataarifnurm</Link></li>
            <li>Linked In : <Link to="https://www.linkedin.com/in/denata-arif-nur-muhamad/" className='text-blue-500'>denata arif nur muhamad</Link></li>
        </ul>
    </div>
  )
}

export default Contact