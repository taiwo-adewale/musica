import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Home, Collections, Error, SongDetails } from "../pages";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/songs/:songid" element={<SongDetails />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
