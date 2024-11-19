import React, { useState } from 'react'
import Search from '../components/Search'

import WeatherPage from './WeatherPage'

const Home = () => {

    const handleSearch=(value)=>{
        console.log('value in parent',value)
    }
  return (
    <div className='bg-blue-400 min-h-screen'>
        <div className='w-full md:w-1/3'>
            <Search handleSearch={handleSearch}/>
        </div>
        <div>
            <WeatherPage />
        </div>
    </div>
  )
}

export default Home
