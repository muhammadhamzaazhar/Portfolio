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
            I’m an AI engineer with a passion for building intelligent and
            impactful solutions. Whether it’s designing and training models,
            automating workflows, deploying LLMs, or bringing AI applications
            into production, I love turning complex ideas into scalable
            solutions. Check out my portfolio to see some of the projects I’ve
            worked on, and feel free to contact me if you have any questions or
            inquiries.
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
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
            className="radial-gradient"
            style={{
              color: "#1e293b",
              padding: "1rem 1.5rem",
              borderRadius: "0.375rem",
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
              width: "220px",
            }}
          >
            <span
              className="linear-mask"
              style={{
                color: "#f5f5f5",
                letterSpacing: "0.05em",
                fontWeight: 300,
                display: "block",
                position: "relative",
                textAlign: "center",
              }}
            >
              Download Resume
            </span>
            <span
              className="linear-overlay"
              style={{
                display: "block",
                position: "absolute",
                inset: 0,
                borderRadius: "0.375rem",
                padding: "1px",
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
