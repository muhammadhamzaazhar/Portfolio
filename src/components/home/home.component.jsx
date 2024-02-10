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
            sequence={["Web Developer", 1000]}
            speed={5}
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
          Welcome to my digital space! I'm a passionate web developer dedicated
          to crafting engaging and user-friendly websites. With a keen eye for
          design and a love for coding, I strive to bring ideas to life in the
          virtual world. Explore the various facets of my portfolio, and let's
          embark on a journey where creativity meets functionality.
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

      <div className="home_rigth">
        <img
          src={portfolio}
          alt=""
          style={{ width: "360px", height: "360px" }}
        />
      </div>
    </div>
  );
};

export default Home;
