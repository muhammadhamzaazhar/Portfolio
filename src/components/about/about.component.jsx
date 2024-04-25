import React from "react";
import { motion } from "framer-motion";

import { bios } from "../../utils/data";
import portfolio from "../../assets/portfolio.jpeg";
import resumePDF from "../../assets/CV.pdf";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={portfolio}
            whileHover={{ y: -20, x: -26 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            I'm a developer with a zest for creating seamless online
            experiences. From front-end design to back-end development, I
            immerse myself in the world of coding to build websites that not
            only look great but also perform seamlessly. Whether you need a
            landing page, a blog, an e-commerce site, or a web app, I can help
            you turn your ideas into reality. Check out my portfolio to see some
            of the projects I’ve worked on, and feel free to contact me if you
            have any questions or inquiries.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}

          <motion.a
            href={resumePDF}
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
