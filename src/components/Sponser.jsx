import React from 'react'
import { Sponsers } from '../constants/Sponsers'

const Sponser = () => {
  return (
      <div className='w-[75%] mx-auto my-32'>
        <div className='flex max-h-[400px] overflow-hidden justify-center flex-wrap items-center gap-10 md:gap-12'>

        {
          Sponsers && Sponsers.map((sponser) => {
            return <img src={sponser.imgurl} key={sponser.id} alt={sponser.alt} />
          })
        }

        </div>
          <h3 className='font-medium text-gray-300 mt-14 md:mt-28 text-center'>Trusted by the world’s most ambitious teams.</h3>

      </div>
  
  )
}

export default Sponser
