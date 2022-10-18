import React from 'react'

import { AppWrap } from '../wrapper'
import { images } from '../constants'

const Error = () => {
  return (
    <div className='p-4 flex flex-col gap-y-8'>
      <h2 className='text-4xl font-bold text-[#A4C7C6]'>Sorry, nothing to display</h2>

      <img src={images.construction} alt="construction" className='rounded-[20px] w-full md:w-[80%]' />
    </div>
  )
}

export default AppWrap(Error)