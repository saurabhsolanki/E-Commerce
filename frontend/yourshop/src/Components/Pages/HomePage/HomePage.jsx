import React from 'react'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loaders'
import FirstCarousel from './FirstCrosual'
import MidSection from './MidSection'
import SecodCarousel from './SecondCarousel'

const HomePage = () => {

  const [spin, setspin] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setspin(false)
    }, 1000);
  }, [])
  return (
    <div >
    {
      spin ? <Loader/> :  <>
         <FirstCarousel/>
      <MidSection/>
      <SecodCarousel/>
      </>
    }
    </div>
  )
}

export default HomePage
