// import React from "react";
// import { HiArrowUpRight } from "react-icons/hi2";
// import { motion } from "framer-motion";
// import { FiGithub, FiEye } from "react-icons/fi";

// import { workImagesDev } from "../../utils/data";
// import { workImagesAI } from "../../utils/data";
// import "./portfolio.styles.scss";

// const Portfolio = () => {
//   return (
//     <div className="container" id="portfolio">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ y: [-50, 0], opacity: 1 }}
//         className="title"
//       >
//         <span>My Work</span>
//         <h1>Awesome Projects</h1>
//       </motion.div>
//       <motion.div
//         initial={{ x: 0, opacity: 0 }}
//         whileInView={{ x: [-250, 0], opacity: 1 }}
//         transition={{ duration: 1 }}
//         exit={{ opacity: 0, y: -50 }}
//         className="workImages"
//       >
//         {workImagesDev.map((work) => {
//           return (
//             <div className="workImage" key={work.id}>
//               <img src={work.img} alt="workImg" />
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="hoverLayer"
//               >
//                 <p>
//                   {work.projectName} <HiArrowUpRight size={20} />
//                 </p>
//                 <motion.a
//                   href={work.sourceCode}
//                   target="_blank"
//                   whileInView={{ scale: [0, 1] }}
//                   whileHover={{ scale: [1, 1.1] }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <FiGithub />
//                 </motion.a>

//                 <motion.a
//                   href={work.deploy}
//                   target="_blank"
//                   whileInView={{ scale: [0, 1] }}
//                   whileHover={{ scale: [1, 1.1] }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <FiEye />
//                 </motion.a>
//               </motion.div>
//             </div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { FiGithub, FiEye } from "react-icons/fi";

import { workImagesDev, workImagesAI } from "../../utils/data";
import "./portfolio.styles.scss";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Dev");
  const currentWorkImages =
    selectedCategory === "Dev" ? workImagesDev : workImagesAI;

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
            <img src={work.img} alt="workImg" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hoverLayer"
            >
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
              <motion.a
                href={work.deploy}
                target="_blank"
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <FiEye />
              </motion.a>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
