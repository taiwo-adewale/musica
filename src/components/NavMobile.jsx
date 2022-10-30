import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../constants";

const NavMobile = ({ isToggled, setIsToggled }) => {
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isToggled &&
        ref.current &&
        e.target.id !== "app__hamburger" &&
        !ref.current.contains(e.target)
      ) {
        setIsToggled(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <motion.nav
        ref={ref}
        initial={{ x: 300 }}
        id="app__nav-mobile"
        className="app__nav-offcanvas fixed bg-altDark right-0 top-0 bottom-0 w-[300px] sm:w-[350px] lg:hidden z-[29]"
        animate={{ x: [300, 0], transition: { duration: 0.3 } }}
      >
        <div className="relative overflow-auto h-full py-[100px] px-9">
          <div className="flex flex-col gap-y-[50px]">
            <NavLink
              to="/"
              onClick={() => setIsToggled(false)}
              className={({ isActive }) =>
                isActive
                  ? "app__nav-icon-active app__nav-mobile"
                  : "app__nav-mobile"
              }
              end
            >
              <AiFillHome className="app__nav-icon" /> <span>Home</span>
            </NavLink>
            <NavLink
              to="/collections"
              onClick={() => setIsToggled(false)}
              className={({ isActive }) =>
                isActive
                  ? "app__nav-icon-active app__nav-mobile"
                  : "app__nav-mobile"
              }
            >
              {images.playlistIcon} <span>My collections</span>
            </NavLink>
            <NavLink
              to="/radio"
              onClick={() => setIsToggled(false)}
              className={({ isActive }) =>
                isActive
                  ? "app__nav-icon-active app__nav-mobile"
                  : "app__nav-mobile"
              }
            >
              {images.radioIcon} <span>Radio</span>
            </NavLink>
            <NavLink
              to="/videos"
              onClick={() => setIsToggled(false)}
              className={({ isActive }) =>
                isActive
                  ? "app__nav-icon-active app__nav-mobile"
                  : "app__nav-mobile"
              }
            >
              {images.videosIcon} <span>Music videos</span>
            </NavLink>
            <NavLink
              to="/profile"
              onClick={() => setIsToggled(false)}
              className={({ isActive }) =>
                isActive
                  ? "app__nav-icon-active app__nav-mobile"
                  : "app__nav-mobile"
              }
            >
              {images.profileIcon} <span>Profile</span>
            </NavLink>
            <NavLink
              to="/logout"
              onClick={() => setIsToggled(false)}
              className={({ isActive }) =>
                isActive
                  ? "app__nav-icon-active app__nav-mobile"
                  : "app__nav-mobile"
              }
            >
              {images.logoutIcon} <span>Log out</span>
            </NavLink>
          </div>

          <div
            className="absolute top-4 right-4 p-1 cursor-pointer flex-center"
            onClick={() => setIsToggled(false)}
          >
            <HiX className="w-8 h-8" />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavMobile;
