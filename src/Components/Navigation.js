import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const variants = {
    open: { opacity: 1, transform: "translateX(0)" },
    closed: { opacity: 0, transform: "translateX(-100%)" },
  };
  const maskVarians = {
    open: { opacity: 1 , transform: "translateX(0)"},
    closed: { opacity: 0 , transform: "translateX(-100%)"},
  };
  return (
    <>
      <nav>
        <span className="text-xl">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>
          <motion.nav
            className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50"
            animate={showMenu ? 'open' : 'closed'}
            variants={maskVarians}
            onClick={() => setShowMenu(!showMenu)}
          ></motion.nav>
          <motion.div
            animate={showMenu ? 'open' : 'closed'}
            variants={variants}
            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 p-3"
          >
            <span className="font-bold">the menu</span>
            <ul>
              <li>Home</li>
            </ul>
          </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
