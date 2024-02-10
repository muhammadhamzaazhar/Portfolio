import React from "react";
import { motion } from "framer-motion";

import { contacts, socialIcons } from "../../utils/data";
import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>

      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            Feel free to reach out! Your thoughts matter, and I'm eager to
            connect. Drop me a message or inquiry, and let's start a
            conversation. I look forward to hearing from you and working with
            you on your next project.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}

          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
                <div key={index}>
                  <a
                    href={socialIcon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcon.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right_container"
        >
          <h3>Get In Touch</h3>
          <form
            action="https://getform.io/f/b9512338-e05e-4792-a384-52cfd371a0fc"
            method="POST"
          >
            <div className="row">
              <input type="text" placeholder="First Name" name="first_name" />
              <input type="text" placeholder="Last name" name="last_name" />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" name="phone" />
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="row">
              <textarea placeholder="Message" name="message"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
              type="submit"
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
