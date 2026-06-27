import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import portfolio from "../../assets/portfolio.jpeg";
import { fadeIn } from "../../utils/variants";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="container" id="home">
      <div className="home_left">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Hi, I'm Hamza <span>Azhar</span>
        </motion.h1>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="animation"
        >
          <TypeAnimation
            sequence={["Web Developer", 3000, "AI Engineer", 3000]}
            speed={1}
            className="dev"
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          I'm a Web Developer and AI Engineer specializing in Deep Learning,
          covering NLP and Computer Vision, alongside AI-driven Automation.
          I build full-stack web applications and design, train, and deploy
          intelligent solutions that bridge development and innovation. I
          love turning complex ideas into scalable, real-world solutions.
        </motion.p>

        <motion.div
          className="btn"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <motion.button
            animate={{ y: [0, -5, 0, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          >
            <a href="#contact">Contact Me</a>
          </motion.button>
          <a href="#portfolio">Portfolio</a>
        </motion.div>
      </div>

      <motion.div
        className="home_rigth"
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <span className="blob blob_one"></span>
        <span className="blob blob_two"></span>
        <div className="ring"></div>
        <div className="photo">
          <img src={portfolio} alt="Hamza Azhar" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
