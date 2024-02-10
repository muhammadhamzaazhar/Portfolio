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

import work1 from "../assets/crwn-clothing.png";
import work2 from "../assets/chat-app.png";
import work3 from "../assets/blog-website.png";
import work4 from "../assets/monsters-rolodex.png";
import work5 from "../assets/netflix-clone.png";
import work6 from "../assets/admin-dashboard.png";

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
    link: "https://www.linkedin.com/in/hamza-azhar-0b7815242/",
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

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    projectName: "E-commerce App",
    deploy: "https://react-crwn-clothing-app.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/e-commerce-app",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    projectName: "Chat App",
    deploy: "https://node-chat-room-8079e4634229.herokuapp.com/",
    sourceCode: "https://github.com/muhammadhamzaazhar/Chat-App",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    projectName: "Blog Website",
    sourceCode: "https://github.com/muhammadhamzaazhar/blog-website",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    projectName: "Monsters Rolodex",
    deploy: "https://muhammadhamzaazhar.github.io/monsters-rolodex/",
    sourceCode: "https://github.com/muhammadhamzaazhar/monsters-rolodex",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    projectName: "Netflix Clone",
    deploy: "https://react-netflix-2023.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/Netflix-Clone",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    projectName: "Admin Dashboard",
    deploy: "https://admin-dashboard-2024.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/React-Admin-Dashboard",
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
