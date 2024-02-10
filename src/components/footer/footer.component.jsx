import React from "react";
import { motion } from "framer-motion";

import { socialIcons } from "../../utils/data";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved. Made
          by <span>Muhammad Hamza Azhar</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
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
      </div>
    </motion.div>
  );
};

export default Footer;
