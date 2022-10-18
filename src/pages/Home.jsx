import React from 'react'
import { Link } from 'react-router-dom'

import { AppWrap } from '../wrapper'
import { images } from '../constants'
import { SongSlider, ChartsSlider } from '../components'
import { topCharts, likes, newReleases, popular } from '../data'

const Home = () => {
  return (
    <>
      <div className='flex flex-wrap midMd:flex-nowrap w-full gap-x-6 gap-y-6 py-4'>
        <div className='w-full relative midMd:w-[65%] xl:w-3/5'>
          <div className='relative w-full h-[500px] sm:h-[400px] bg-[#609EAF] rounded-[20px] sm:rounded-[40px] z-[2] overflow-hidden'>

            <img src={images.heroVector} alt="" className="absolute -top-[180px] left-[10%] sm:left-auto sm:-top-[280px] sm:!-right-[200px] rotate-90 sm:rotate-0"></img>
            <img src={images.heroPerson} alt="" className='absolute -right-[20px] hidden sm:block h-full w-[60%] md:w-[55%]' />

            <div className="absolute py-10 px-[30px] sm:px-10 left-0 top-0 bottom-0 flex flex-col sm:justify-between">
              <p className='text-[12px] flex-grow sm:flex-grow-0'>Curated playlist</p>

              <div className='mb-[46px] sm:mb-0'>
                <h2 className='font-bold text-4xl mb-1 sm:mb-0'>R & B Hits</h2>
                <p className='text-sm'>All mine, Lie again, Petty call me everyday, <br />Out of time, No love, Bad habit, <br />and so much more</p>
              </div>

              <div className="flex items-center gap-x-3 flex-wrap sm:flex-nowrap gap-y-2">
                <div className='flex'>
                  { likes.map((like, index) => (
                    <img key={`like-0${index}`} src={like} alt="likes" className='w-[34px] h-[34px] sm:w-5 sm:h-5 first:ml-0 -ml-[9px] rounded-full' />
                  )) }
                </div>

                <div className='flex gap-x-2 items-center'>
                  {images.heartIconWhite}
                  <span className='text-2xl sm:text-sm'>33k Likes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="app__color-dodge absolute left-[10%] w-[80%] -bottom-[20px] h-[20px] z-[1]"></div>
        </div>
        <div className='flex flex-col gap-y-3.5 w-full midMd:w-[35%] xl:w-2/5'>
          <h3 className="head-text">Top charts</h3>

          { topCharts.map((chart, index) => (
            <div key={`chart-${index}`} className='hidden midMd:flex flex-col gap-y-3'>
              <div className="bg-altDark flex rounded-[20px] p-4 gap-x-3 xl:gap-x-3.5 items-start justify-start">
                <img src={chart.coverImg} alt="top chart" className='w-16 h-16 rounded-[10px]' />

                <div className='flex flex-col flex-1 justify-start min-w-0'>
                  <Link to='/albums' className='truncate'>{chart.title}</Link>
                  <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-1">{chart.artiste}</p>
                  <span className='text-[12px]'>{chart.duration}</span>
                </div>

                <div className='flex-center flex-shrink-0 h-full'>
                  <div className='group hover:bg-primary mx-1 w-9 h-9 flex-center rounded-full border border-[rgba(255,255,255,0.11)] cursor-pointer transition-all duration-300'>
                    {images.heartIcon}
                  </div>
                </div>
              </div>
            </div>
          )) }

          <div className="flex midMd:hidden">
            <ChartsSlider topCharts={topCharts} />
          </div>
        </div>
      </div>

      <section className='pt-8 space-y-3'>
        <h3 className="head-text">New releases.</h3>

        <SongSlider data={newReleases} keyName="newRelease" />
      </section>

      <section className='pt-8 space-y-3'>
        <h3 className="head-text">Popular in your area</h3>

        <SongSlider data={popular} keyName="popular" />
      </section>
    </>
  )
}

export default AppWrap(Home)