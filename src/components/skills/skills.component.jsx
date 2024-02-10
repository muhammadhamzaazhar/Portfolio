import React from "react";
import { motion } from "framer-motion";

import { icons } from "../../utils/data";
import "./skills.styles.scss";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>What I Expert?</span>
        <h1>Skills And Experience</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="select"
      >
        <motion.button
          animate={{ y: [0, -8, 0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="active"
        >
          Skills
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="skills"
      >
        {icons.map((icon, index) => {
          return (
            <div key={index} className="tools">
              {icon.icon1}
              <p>{icon.name.toUpperCase()}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
