import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoGit,
} from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { SiPostman, SiExpress, SiTailwindcss } from "react-icons/si";

import work1Dev from "../assets/crwn-clothing.png";
import work2Dev from "../assets/chat-app.png";
import work3Dev from "../assets/blog-website.png";
import work4Dev from "../assets/monsters-rolodex.png";
import work5Dev from "../assets/netflix-clone.png";
import work6Dev from "../assets/admin-dashboard.png";
import work7Dev from "../assets/music-website.png";
import work1AI from "../assets/langbot.png";
import work2AI from "../assets/deepfake-video-detection.png";
import work3AI from "../assets/social-profile-analyzer.png";
import work4AI from "../assets/food-classification.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=923305857415",
    name: "WhatsApp",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/hamza._.002/",
    name: "Instagram",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/muhammad-hamza-azhar-996289314/",
    name: "LinkedIn",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/hamza.azhar.3517/",
    name: "Facebook",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/muhammadhamzaazhar",
    name: "Github",
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Muhammad Hamza Azhar",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+923305857415",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "hamzaazharmuhammad@gmail.com",
  },
];

export const icons = [
  { icon1: <FaHtml5 />, name: "HTML" },
  { icon1: <FaCss3 style={{ marginLeft: "13px" }} />, name: "CSS-3" },
  { icon1: <SiTailwindcss />, name: "Tailwind" },
  { icon1: <DiJavascript />, name: "Javascript" },
  { icon1: <FaNodeJs />, name: "Node-js" },
  { icon1: <FaReact />, name: "React" },
  { icon1: <BiLogoRedux />, name: "Redux" },
  { icon1: <BiLogoMongodb />, name: "Mongo-Db" },
  { icon1: <SiExpress />, name: "Express-Js" },
  { icon1: <BiLogoFirebase />, name: "Firebase" },
  { icon1: <FaSass />, name: "Sass" },
  { icon1: <AiFillGithub />, name: "Github" },
  { icon1: <BiLogoGit />, name: "Git" },
  { icon1: <SiPostman />, name: "Postman" },
];

export const workImagesDev = [
  {
    id: 1,
    img: work1Dev,
    name: "project 1",
    projectName: "E-commerce App",
    deploy: "https://react-crwn-clothing-app.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/e-commerce-app",
  },
  {
    id: 2,
    img: work2Dev,
    name: "project 2",
    projectName: "Chat App",
    deploy: "https://node-chat-room-8079e4634229.herokuapp.com/",
    sourceCode: "https://github.com/muhammadhamzaazhar/Chat-App",
  },
  {
    id: 3,
    img: work3Dev,
    name: "project 3",
    projectName: "Blog Website",
    sourceCode: "https://github.com/muhammadhamzaazhar/blog-website",
  },
  {
    id: 4,
    img: work4Dev,
    name: "project 4",
    projectName: "Monsters Rolodex",
    deploy: "https://muhammadhamzaazhar.github.io/monsters-rolodex/",
    sourceCode: "https://github.com/muhammadhamzaazhar/monsters-rolodex",
  },
  {
    id: 5,
    img: work5Dev,
    name: "project 5",
    projectName: "Netflix Clone",
    deploy: "https://react-netflix-2023.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/Netflix-Clone",
  },
  {
    id: 6,
    img: work6Dev,
    name: "project 6",
    projectName: "Admin Dashboard",
    deploy: "https://admin-dashboard-2024.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/React-Admin-Dashboard",
  },
  {
    id: 7,
    img: work7Dev,
    name: "project 7",
    projectName: "Music Website",
    deploy: "https://beatboxify.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/Music-Website",
  },
];

export const workImagesAI = [
  {
    id: 1,
    img: work1AI,
    name: "project 1",
    projectName: "LangChat Docs Helper",
    deploy: "https://langchain-docs-guide.streamlit.app/",
    sourceCode:
      "https://github.com/muhammadhamzaazhar/LangBot-Your-LangChain-Guide",
  },
  {
    id: 2,
    img: work2AI,
    name: "project 2",
    projectName: "Deepfake Video Detection",
    deploy: "https://skintegrity-deepfake-detection.vercel.app/",
    sourceCode:
      "https://github.com/muhammadhamzaazhar/DeepFake-Video-Detection",
  },
  {
    id: 3,
    img: work3AI,
    name: "project 3",
    projectName: "Social Profile Analyzer",
    deploy: "https://huggingface.co/spaces/mhamza-007/Social-Profile-Analyzer",
    sourceCode:
      "https://huggingface.co/spaces/mhamza-007/Social-Profile-Analyzer/tree/main",
  },
  {
    id: 4,
    img: work4AI,
    name: "project 4",
    projectName: "Food Classification",
    deploy: "https://food-classification-101.netlify.app/",
    sourceCode:
      "https://github.com/muhammadhamzaazhar/Food-Classification-using-Deep-Learning",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Islamabad, Pakistan",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "hamzaazharmuhammad@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+923305857415",
  },
];
