import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <span className="text-xl">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>
        {showMenu === true && (
          <>
            <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(!showMenu) }></div>
            <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50">
              this is menu
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navigation;
