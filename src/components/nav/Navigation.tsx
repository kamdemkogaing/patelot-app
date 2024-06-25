import classNames from "classnames";
import { useEffect, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";
import ImageLogo from "../form/ImageLogo";

const Navigation = () => {
  // state
  const [scrolled, isScrolled] = useState(false);
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // comportements
  const handleScroll = () => {
    isScrolled(window.scrollY > 120);
  };

  const handleClick = () => {
    setHamburgerOpened(!hamburgerOpened);
  };

  const handleResize = () => {
    if (window.innerWidth <= 480) {
      setIsMobileDevice(true);
    } else {
      setIsMobileDevice(false);
    }
  };

  // render
  return (
    <div
      className={classNames(
        "bg-slate-200 sticky top-0 z-[1000]",
        `${scrolled ? "Scrolling bg-white" : "NotScrolling"}`
      )}
    >
      {!isMobileDevice && (
        <div className={classNames("flex flex-wrap container mx-auto p-5")}>
          <ImageLogo altName="patelot.de logo" width={35} height={35} />
          <ul className={classNames("flex flex-wrap justify-end w-4/6 kamdem")}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              <li className="me-2">accueil</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              <li className="me-2">á propos</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/tutorial"
              className={({ isActive }) =>
                isActive
                  ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              Tutorial
            </NavLink>
            <NavLink
              to="/country"
              className={({ isActive }) =>
                isActive
                  ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
            >
              Countries
            </NavLink>
          </ul>
        </div>
      )}

      {isMobileDevice && (
        <div className={classNames("flex flex-col container mx-auto p-5")}>
          <div className={classNames("flex flex-wrap")}>
            <ImageLogo altName="patelot.de logo" width={35} height={35} />
            <div
              className={classNames("flex justify-end items-center pr-3 w-4/6")}
            >
              <span className={classNames("cursor-pointer")}>
                <HamburgerMenu
                  isOpen={hamburgerOpened}
                  menuClicked={handleClick}
                  width={36}
                  height={30}
                  strokeWidth={4}
                  rotate={1}
                  color="black"
                  borderRadius={0}
                  animationDuration={0.5}
                />
              </span>
            </div>
          </div>

          {hamburgerOpened && (
            <ul
              className={classNames(
                "flex flex-col justify-center items-center border-t-8 mt-3 border-y-stone-50"
              )}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                <li className="me-2">accueil</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                <li className="me-2">á propos</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/tutorial"
                className={({ isActive }) =>
                  isActive
                    ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Tutorial
              </NavLink>
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  isActive
                    ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
              >
                Countries
              </NavLink>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;
