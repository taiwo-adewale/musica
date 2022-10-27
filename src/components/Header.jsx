import React from "react";

import { FiSearch } from "react-icons/fi";
import { images } from "../constants";

const Header = ({ setIsToggled, isSongDetails }) => {
  return (
    <header
      id="header"
      className={`fixed left-0 right-0 top-0 z-[4] transition-all duration-150 ${
        isSongDetails ? "" : "bg-bgDark"
      }`}
    >
      <div className="flex items-center h-[70px] px-[28px] gap-x-9">
        <img src={images.logo} alt="logo" className="w-[34px] h-[34px]" />

        <div
          className={`hidden sm:flex items-center gap-x-2 px-3 py-1 rounded-lg ${
            isSongDetails ? "" : "bg-altDark"
          }`}
        >
          <FiSearch className="w-5 h-5 stroke-[rgba(255,255,255,0.25)]" />

          <input
            type="text"
            placeholder="Search"
            className="w-[300px] bg-transparent text-sm p-2 focus:outline-none placeholder:text-[rgba(255,255,255,0.25)] "
          />
        </div>

        <div
          id="app__hamburger"
          className="w-8 -mr-2 h-8 flex-center lg:!hidden flex-col gap-y-2 ml-auto cursor-pointer"
          onClick={() => setIsToggled(true)}
        >
          <span className="w-4 h-0.5 pointer-events-none rounded-full bg-light"></span>
          <span className="w-4 h-0.5 pointer-events-none rounded-full bg-light"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
