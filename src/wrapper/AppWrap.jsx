import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Header, Navbar, Player } from '../components'

const AppWrap = (Component, page) => function HOC() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <>
      <Header setIsToggled={setIsToggled} isAlbum={page === 'album' ? true : false} />
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />

      <motion.main
        className={`px-4 lg:pl-24 lg:pr-[60px] pt-[70px] pb-[130px] md:pb-[150px] w-full min-h-screen z-[2] ${ page === 'album' ? 'app__album-underlay' : '' }`}
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: [0.3, 1], transition: {duration: 0.4} }}
        exit={{ opacity: 0.3, transition: {duration: 0.2} }}
      >
        <Component />
      </motion.main>

      <Player />
    </>
  )
}

export default AppWrap