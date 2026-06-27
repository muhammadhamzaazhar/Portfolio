import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";

import "./projectModal.styles.scss";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modalOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="modalContent"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="modalImage"
              src={project.descPic}
              alt={project.projectName}
            />

            <div className="modalBody">
              <h2>{project.projectName}</h2>
              <p className="description">{project.description}</p>

              {project.documentation && (
                <a
                  className="docLink"
                  href={project.documentation}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFileText /> View Documentation
                </a>
              )}

              {project.feedback && (
                <div className="testimonial">
                  <p className="quote">&ldquo;{project.feedback}&rdquo;</p>
                  <p className="clientName">{project.clientName}</p>
                  <p className="designation">{project.designation}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
