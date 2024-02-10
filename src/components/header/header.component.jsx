import React, { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { navLinks } from "../../utils/data";
import { socialIcons } from "../../utils/data";
import "./header.styles.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={scroll ? "header active" : "header"}
    >
      <div className="nav_container">
        <div className="logo">
          <h3>H</h3>
        </div>

        <ul className="nav_links">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            );
          })}
        </ul>

        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index}>
                <a
                  href={socialIcon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcon.icon}
                </a>
              </div>
            );
          })}
        </div>

        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>

        <motion.div
          className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>

        <motion.div
          className="menuX"
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {navLinks.map((navLink, index) => {
            return (
              <li key={index} onClick={() => setToggle(false)}>
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
