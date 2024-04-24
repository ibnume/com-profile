/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from "react";

import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleState = () => {
    setIsActive(!isActive);
  };

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu__active");
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Si Doel Agency</h2>
          </div>

          {/* Navigation ==================== */}
          <div
            className="navigation"
            style={{
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? "all" : "none",
            }}
            onClick={() => setIsActive(false)}
          >
            <ul
              className="menu"
              style={{
                transform: !isActive ? "translateX(100%)" : "translateX(0)",
              }}
            >
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    // onClick={handleClick}
                    className="menu__link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex-center">
            {nav__links.map((l, idx) => {
              const { display, path } = l;

              return (
                <li key={idx} className="menu__item">
                  <a className="menu__item" href={path}>
                    {display}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* light mode ==================== */}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i>Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>

          <span className="mobile__menu" onClick={handleState}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
