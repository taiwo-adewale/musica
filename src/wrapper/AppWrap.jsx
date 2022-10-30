import React, { useState } from "react";
import { motion } from "framer-motion";

import { Header, Navbar } from "../components";

const AppWrap = (Component, page) =>
  function HOC() {
    const [isToggled, setIsToggled] = useState(false);

    return (
      <>
        <Header
          setIsToggled={setIsToggled}
          isSongDetails={page === "songdetails" ? true : false}
        />
        <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />

        {page !== "songdetails" ? (
          <motion.main
            className="px-4 lg:pl-24 lg:pr-[60px] pt-[70px] pb-[130px] md:pb-[150px] w-full min-h-screen z-[2]"
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: [0.3, 1], transition: { duration: 0.2 } }}
            exit={{ opacity: 0.3, transition: { duration: 0.1 } }}
          >
            <Component />
          </motion.main>
        ) : (
          <motion.div
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: [0.3, 1], transition: { duration: 0.2 } }}
            exit={{ opacity: 0.3, transition: { duration: 0.1 } }}
          >
            <Component />
          </motion.div>
        )}
      </>
    );
  };

export default AppWrap;
