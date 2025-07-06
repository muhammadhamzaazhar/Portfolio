import React, { useState } from "react";
import { motion } from "framer-motion";

import { iconsDev, iconsAi } from "../../utils/data";
import "./skills.styles.scss";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dev");
  const currentIcons = selectedCategory === "Dev" ? iconsDev : iconsAi;

  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Technologies I Specialize In</span>
        <h1>Skills And Technologies</h1>
      </motion.div>

      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={selectedCategory === "Dev" ? "active" : ""}
          onClick={() => setSelectedCategory("Dev")}
        >
          Web Development
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={selectedCategory === "AI" ? "active" : ""}
          onClick={() => setSelectedCategory("AI")}
        >
          Artificial Intelligence
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="skills"
      >
        {currentIcons.map((icon, index) => (
          <div key={index} className="tools">
            {icon.icon1}
            <p>{icon.name.toUpperCase()}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
