import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

import { images } from '../constants'
import NavMobile from './NavMobile'

const Navbar = ({isToggled, setIsToggled}) => {
  return (
    <>
      <nav className='hidden lg:block fixed left-5 top-[86px]'>
        <div className='flex flex-col w-[52px] gap-y-5'>
          <div className="w-full bg-altDark rounded-[32px] px-[15px] py-6 flex-center">
            <div className="flex flex-col gap-y-8">
              <NavLink to="/" className={({isActive}) => isActive ? 'app__nav-icon-active' : ''} end><AiFillHome className='app__nav-icon' /></NavLink>
              <NavLink to="/collections" className={({isActive}) => isActive ? 'app__nav-icon-active' : ''}>{images.playlistIcon}</NavLink>
              <NavLink to="/radio" className={({isActive}) => isActive ? 'app__nav-icon-active' : ''}>{images.radioIcon}</NavLink>
              <NavLink to="/videos" className={({isActive}) => isActive ? 'app__nav-icon-active' : ''}>{images.videosIcon}</NavLink>
            </div>
          </div>

          <div className="w-full bg-altDark rounded-[32px] px-[15px] py-6 flex-center">
            <div className="flex flex-col gap-y-8">           
              <NavLink to="/profile" className={({isActive}) => isActive ? 'app__nav-icon-active' : ''}>{images.profileIcon}</NavLink>
              <NavLink to="/logout" className={({isActive}) => isActive ? 'app__nav-icon-active' : ''}>{images.logoutIcon}</NavLink>            
            </div>
          </div>
        </div>
      </nav>

      { isToggled && <NavMobile setIsToggled={setIsToggled} isToggled={isToggled} /> }
    </>
  )
}

export default Navbar