import React from 'react'
import Helloworld from '../Components/Helloworld'
const Home = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl mb-3'>This is home page</h1>
        <Helloworld name={'Denata'}/>
    </div>
  )
}

export default Home