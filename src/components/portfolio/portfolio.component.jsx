import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { FiGithub, FiEye } from "react-icons/fi";

import {
  workImagesDev,
  workImagesAI,
  workImagesAutomation,
} from "../../utils/data";
import ProjectModal from "../projectModal/projectModal.component";
import "./portfolio.styles.scss";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dev");
  const [selectedProject, setSelectedProject] = useState(null);
  const currentWorkImages =
    selectedCategory === "Dev"
      ? workImagesDev
      : selectedCategory === "AI"
      ? workImagesAI
      : workImagesAutomation;

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
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
          Artifical Intelligence
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={selectedCategory === "Automation" ? "active" : ""}
          onClick={() => setSelectedCategory("Automation")}
        >
          Automation
        </motion.button>
      </div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {currentWorkImages.map((work) => (
          <div className="workImage" key={work.id}>
            <img
              src={work.img}
              alt="workImg"
              className={
                selectedCategory === "Automation" ? "zoomedImg" : ""
              }
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hoverLayer"
            >
              {selectedCategory === "Automation" ? (
                <>
                  <p>
                    View Details <HiArrowUpRight size={20} />
                  </p>
                  <motion.button
                    type="button"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(work)}
                  >
                    <FiEye />
                  </motion.button>
                </>
              ) : (
                <>
                  <p>
                    {work.projectName} <HiArrowUpRight size={20} />
                  </p>
                  <motion.a
                    href={work.sourceCode}
                    target="_blank"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiGithub />
                  </motion.a>
                  {work.deploy && (
                    <motion.a
                      href={work.deploy}
                      target="_blank"
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiEye />
                    </motion.a>
                  )}
                </>
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Portfolio;
