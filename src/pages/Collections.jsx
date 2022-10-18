import React from 'react'

import { AppWrap } from '../wrapper'
import { images } from '../constants'
import { collections } from '../data'

const Collections = () => {
  return (
    <>
      <div className='flex w-full gap-x-2.5 py-5'>
        <a href="#" className='flex-grow sm:flex-grow-0 text-center py-2 px-[18px] rounded-full text-sm text-black border border-primary bg-primary'>My collection</a>
        <a href="#" className='flex-grow sm:flex-grow-0 text-center py-2 px-7 rounded-full text-sm border border-[rgba(239,238,234,0.1)] bg-transparent text-[rgba(217,217,217,0.4)]'>Likes</a>
      </div>

      <div className="grid collections-grid gap-x-6 gap-y-5">
        { collections.map((collection, index) => (
          <div key={`collection-${index}`} className='group w-full h-[234px] rounded-[20px] overflow-hidden relative'>
            <img src={collection.coverImg} alt="" className='object-cover h-full w-full sm:group-hover:scale-125 transition-all duration-300' />

            <div className="absolute left-5 right-6 bottom-[22px]">
              <div className='flex flex-col overflow-hidden '>
                <h3 className='text-2xl text-light'>Limits</h3>
                <span className='text-[12px] text-light mb-4'>John watts</span>
                <span className='text-[12px] text-light sm:-mb-[34px] group-hover:mb-0 transition-all duration-300'>2.3m likes</span>
              </div>
            </div>

            <div className="absolute sm:opacity-0 right-6 bottom-[30px] sm:group-hover:opacity-100 transition-all duration-300">
              {images.playCollectionIcon}
            </div>
          </div>
        )) }
      </div>
    </>
  )
}

export default AppWrap(Collections)