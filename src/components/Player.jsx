import React, { useState } from 'react'
import { Slider } from '@mui/material'

import {images} from '../constants'

const Player = () => {
  const [playerValue, setPlayerValue] = useState(30)
  const [volumeValue, setVolumeValue] = useState(80)

  const changePlayerValue = (event, value) => {
    setPlayerValue(value)
  }
  const changeVolumeValue = (event, value) => {
    setVolumeValue(value)
  }

  return (
    <div className='app__player z-[19] fixed left-0 bottom-0 right-0 h-[90px] md:h-[110px] bg-[rgba(29,33,35,0.3)] border-t border-t-[rgba(255,255,255,0.1)] xs:px-4 px-8 lg:pl-24 lg:pr-[60px] py-6'>
      <div className='flex gap-x-6 w-full h-full items-center'>
        <div className='w-1/2 flex-grow md:w-1/5 xl:w-[15%] flex gap-x-3'>
          <img src={images.release01} alt="seasons in" className='w-[50px] h-[50px] rounded-[16px] md:rounded-full' />

          <div className="flex flex-col mt-1 min-w-0">
            <h4 className="text-sm truncate">Seasons in</h4>
            <span className="text-[12px] text-[rgba(255,255,255,0.44)]">James</span>
          </div>
        </div>

        <div className='md:w-[65%] xl:w-[70%] h-full hidden md:flex flex-col justify-between items-center'>
          <div className='flex gap-x-[42px] items-center'>
            {images.shuffleIcon}
            {images.previousIcon}
            <div className='bg-primary cursor-pointer rounded-full flex-center w-[25px] h-[25px] shadow-[0_0_18px_rgba(255,255,255,0.3)]'>
              {images.playIcon}
            </div>
            {images.nextIcon}
            {images.repeatOneIcon}
          </div>

          <Slider
            value={playerValue}
            max={200}
            onChange={changePlayerValue}
            className="app__player-slider"
          />
        </div>

        <div className='md:w-[15%] hidden md:block'>
          <div className="flex items-center gap-x-1.5">
            {images.volumeIcon}

            <Slider
              value={volumeValue}
              onChange={changeVolumeValue}
              className="app__player-volume"
            />
          </div>
        </div>

        <div className="flex gap-x-5 xs:gap-x-3 mr-1.5 items-center md:hidden">
          <div className='bg-primary cursor-pointer rounded-full flex-center w-[34px] h-[34px] shadow-[0_0_18px_rgba(255,255,255,0.3)]'>
            {images.playIcon}
          </div>
          {images.nextIcon}
        </div>
      </div>
    </div>
  )
}

export default Player