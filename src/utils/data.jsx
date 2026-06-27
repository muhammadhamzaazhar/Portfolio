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
import {
  SiPostman,
  SiExpress,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiN8N,
  SiHuggingface,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiJupyter,
  SiFastapi,
  SiStreamlit,
  SiTwilio,
  SiMake,
} from "react-icons/si";
import { BsSoundwave, BsHeadset, BsDiagram3 } from "react-icons/bs";

import work0Dev from "../assets/campaign-manager.png";
import work0bDev from "../assets/ring-recep.png";
import work0cDev from "../assets/quote-m8.png";
import work1Dev from "../assets/crwn-clothing.png";
import work3Dev from "../assets/blog-website.png";
import work5Dev from "../assets/netflix-clone.png";
import work6Dev from "../assets/admin-dashboard.png";
import work7Dev from "../assets/music-website.png";
import work1AI from "../assets/langbot.png";
import work2AI from "../assets/deepfake-video-detection.png";
import work3AI from "../assets/social-profile-analyzer.png";
import work4AI from "../assets/food-classification.png";
import work5AI from "../assets/ai-persona.png";
import work1AutomationCard from "../assets/in-green-polska-lead-capture-agent-card.png";
import work1AutomationPic from "../assets/in-green-polska-lead-capture-agent.png";
import work1AutomationDoc from "../assets/In_Green_Polska_Voice_AI_Agent.pdf";
import work2AutomationCard from "../assets/knight-frank-voice-ai-pipeline-card.png";
import work2AutomationPic from "../assets/knight-frank-voice-ai-pipeline.png";
import work2AutomationDoc from "../assets/Knight_Frank_Voice_AI_Pipeline.pdf";
import work3AutomationCard from "../assets/abu-taxi-ai-voice-agent-card.png";
import work3AutomationPic from "../assets/abu-taxi-ai-voice-agent.png";
import work3AutomationDoc from "../assets/evernect-abu-taxi.pdf";
import work4AutomationCard from "../assets/local-booster-ai-voice-assistant-card.png";
import work4AutomationPic from "../assets/local-booster-ai-voice-assistant.png";
import work4AutomationDoc from "../assets/Evernect-local-booster.pdf";

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

export const iconsDev = [
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

export const iconsAi = [
  { icon1: <SiPytorch />, name: "PyTorch" },
  { icon1: <SiTensorflow />, name: "TensorFlow" },
  { icon1: <SiNumpy />, name: "Numpy" },
  { icon1: <SiPandas />, name: "Pandas" },
  { icon1: <SiScikitlearn />, name: "Scikit-Learn" },
  { icon1: <SiPlotly />, name: "Plotly" },
  { icon1: <SiKeras />, name: "Keras" },
  { icon1: <SiLangchain />, name: "Langchain" },
  { icon1: <SiN8N />, name: "n8n" },
  { icon1: <SiHuggingface />, name: "Huggingface" },
  { icon1: <SiJupyter />, name: "Jupyter" },
  { icon1: <SiFastapi />, name: "Fastapi" },
  { icon1: <SiStreamlit />, name: "Streamlit" },
];

export const iconsAutomation = [
  { icon1: <BsSoundwave />, name: "Vapi" },
  { icon1: <BsHeadset />, name: "Retell" },
  { icon1: <SiN8N />, name: "n8n" },
  { icon1: <SiTwilio />, name: "Twilio" },
  { icon1: <BsDiagram3 />, name: "RAG" },
  { icon1: <SiMake />, name: "Make" },
];

export const workImagesDev = [
  {
    id: 0,
    img: work0Dev,
    name: "project 0",
    projectName: "Campaign Manager",
    deploy: "https://campaign-manager-frontend-3fqp.onrender.com/",
    sourceCode: "https://github.com/Evernect/campaign-manager",
  },
  {
    id: 0.5,
    img: work0bDev,
    name: "project 0.5",
    projectName: "Restaurant AI",
    deploy: "https://restaurant-ai-frontend-2cy7.onrender.com/",
    sourceCode: "https://github.com/Evernect/restaurant-ai",
  },
  {
    id: 0.7,
    img: work0cDev,
    name: "project 0.7",
    projectName: "Quote-M8",
    deploy: "https://quotem8.ai/",
    sourceCode: "https://github.com/Evernect/quote-m8",
  },
  {
    id: 1,
    img: work1Dev,
    name: "project 1",
    projectName: "E-commerce App",
    deploy: "https://react-crwn-clothing-app.netlify.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/e-commerce-app",
  },
  {
    id: 3,
    img: work3Dev,
    name: "project 3",
    projectName: "Blog Website",
    sourceCode: "https://github.com/muhammadhamzaazhar/blog-website",
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
  {
    id: 5,
    img: work5AI,
    name: "project 5",
    projectName: "AI Persona",
    deploy: "https://anam-ai-persona.vercel.app/",
    sourceCode: "https://github.com/muhammadhamzaazhar/Anam-AI-Persona",
  },
];

export const workImagesAutomation = [
  {
    id: 1,
    img: work1AutomationCard,
    descPic: work1AutomationPic,
    documentation: work1AutomationDoc,
    name: "project 1",
    projectName: "B2B Cold-Calling Data Agent",
    description:
      "In Green Polska manufactures and services wooden pallets – sales, repair, and buy-back – for businesses that move goods at scale. Their bottleneck wasn't closing deals; it was getting past reception to the one person who actually decides on pallet purchasing, and capturing usable contact details for them. We built a single-purpose outbound voice AI agent, presented to callers as a named company representative, with one non-negotiable goal: obtain the decision-maker's name, phone, email, and preferred callback time on every call. Every branch of the script serves that outcome rather than trying to sell. The agent navigates gatekeepers to identify the right contact, handles the common objections – \"we already have a supplier,\" \"not interested,\" \"no time\" – with a consistent, correct response each time, and reframes dead-ends around In Green's real differentiators like pallet buy-back and collection. It never quotes prices or makes commitments; the moment a real opportunity appears, it's handed to a human Manager for the sales conversation. The result is clean, standardized lead data captured at high call volume, gatekeeper calls converted into a path to the buyer, and no contact lost cold on a single attempt – every \"no\" degrades into a buy-back angle or a scheduled callback.",
    clientName: "Marek Wiśniewski",
    designation: "Dyrektor Sprzedaży, In-Green Polska",
    feedback:
      "The hard part for us was never the sale - it was reaching the right person and walking away with details we could actually use. Now the calls get worked through at a volume we could never manage by hand, the common objections get the same solid answer every time, and what lands on my desk is a clean contact: name, phone, email, and when to call back. My team only picks up the phone when there's a genuine opportunity already waiting for them, so they spend their time preparing offers instead of chasing receptionists.",
  },
  {
    id: 2,
    img: work2AutomationCard,
    descPic: work2AutomationPic,
    documentation: work2AutomationDoc,
    name: "project 2",
    projectName: "Real-Estate Lead Lifecycle System",
    description:
      "Knight Frank's commercial property desk was running three separate outbound jobs by hand: refreshing the owner database to surface live requirements, alerting every contact the moment a new listing went live, and chasing interested leads until they converted or went cold. Each is repetitive, time-sensitive, and exactly the kind of process that degrades when it depends on individual rep memory. We built a sequenced three-agent voice AI pipeline, with each agent owning one stage of the lifecycle. Jacqui runs continuously, qualifying the database on a disciplined eight-week cycle and surfacing any buy, sell, or lease requirement. Gabbi fires on every new listing, promoting it to the full eligible database, capturing interest, and sending the information memorandum – and if a contact isn't interested in that property, she pivots straight into Jacqui's requirement check. Becky then takes Gabbi's interested contacts through a fixed three-week follow-up, classifying every outcome as hot, warm, or cold. Each agent hands off to a human only at the moment real intent appears, and all three respect a shared opt-out list. The result is a database kept permanently warm, every listing promoted instantly, structured hot/warm/cold reporting per listing, and human time spent only on deals actually forming.",
    clientName: "James Whitfield",
    designation: "Head of Commercial Sales, Knight Frank Australia",
    feedback:
      "Keeping our database warm and chasing every bit of interest on a new listing was always the first thing to slip when the desk got busy. Now it just runs. The database gets worked through on a steady cycle, every new listing goes out to the whole list the moment it's live, and the follow-up actually happens on schedule instead of depending on who remembered. What I value most is that my agents only get pulled in when there's genuine intent - by then it's already sorted into hot, warm, or cold, so they're spending their time on real conversations, not cold dials.",
  },
  {
    id: 3,
    img: work3AutomationCard,
    descPic: work3AutomationPic,
    documentation: work3AutomationDoc,
    name: "project 3",
    projectName: "Automated Multilingual Driver Notifications",
    description:
      "Abu Taxi, a taxi company in Poland with a multilingual driver workforce, needed a way to stop manually phoning drivers every time documents like invoices, wage statements, and residency permits were ready for pickup. We built an automated outbound calling system powered by a VAPI voice agent and orchestrated in n8n, driven entirely from a Google Sheets backend. A single AI agent named Elliot handles four separate document workflows in Polish, Ukrainian, and English – verifying the driver's identity before sharing anything, delivering the notification, capturing whether they'll come in, and logging every outcome back to the right spreadsheet row. Drivers who don't show up within seven days are automatically re-queued for the next round, and inbound callbacks are handled by the same agent with the correct context already loaded. The result: zero manual dialing, full multilingual coverage, and complete call-outcome tracking across every contact attempt.",
    clientName: "David",
    designation: "Fiverr",
    feedback:
      "Our team used to spend hours every week calling drivers about documents. Now it happens on its own - the system calls them in their own language, tracks who's coming in, and chases up anyone who doesn't show. We just tick a box in the spreadsheet. It's saved us an enormous amount of time.",
  },
  {
    id: 4,
    img: work4AutomationCard,
    descPic: work4AutomationPic,
    documentation: work4AutomationDoc,
    name: "project 4",
    projectName: "Agent for Marketing and Lead Management",
    description:
      "Local Booster, an AI-powered advertising platform in Poland, was handling every inbound call manually – losing after-hours leads and tying up sales reps with repetitive questions. We built a 24/7 voice AI assistant named Alex, powered by a VAPI voice agent and an n8n automation backend wired into GoHighLevel. Alex answers support questions across all three of their products from dedicated knowledge bases, qualifies new leads with product-specific questions, and books demos live during the call with real-time availability across three separate calendars. Every caller is profiled in the CRM from the first second of the call, so no lead is ever lost – even if the call drops. Slot filtering and lead routing run in-memory to keep the conversation fast and natural, and every API path has full error handling so callers never hit silence. The result: round-the-clock call coverage, consistent lead capture, and demos booked without a human picking up the phone.",
    clientName: "Kamil Nowak",
    designation: "Head of Sales, Local Booster",
    feedback:
      "Before this, every call that came in after hours was a lead we simply lost. Now our assistant answers around the clock, knows which of our three products the caller is asking about, and books the demo right there on the call. Our reps walk in each morning to a calendar that's already filling itself. It's been one of the best operational decisions we've made.",
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
