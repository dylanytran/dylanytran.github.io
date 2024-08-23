import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import image from "../images/contact-img3.jpg";
import Email from "@mui/icons-material/Email";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields. Thank you!");
      return;
    }

    emailjs
      .sendForm("service_v9v6tge", "template_v3phfl6", form.current, {
        publicKey: "UVPxv0qe3EnR1tUco",
      })
      .then(
        () => {
          alert("Message sent!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="page-wrapper">
      <div>
      <div className="row justify-content-start head">
        <h1>[ Contact Me ]</h1>
      </div>
      <div className="row justify-content-center align-items-center contact-background">
        <div className="col-lg-6">
          <img className="contact-img" src={image}></img>
        </div>
        <div className="col-lg-6 justify-content-left">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="contact-header">Let's Chat </h2>
            <div className="row justify-content-start align-items-center">
              <div className="col-lg-5 col-md-6 col-sm-6 name-form">
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Your name"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6 email-form">
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="row justify-content-start align-items-center">
              <div className="col-lg-10">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Your message here..."
                />
              </div>
            </div>

            <div className="row justify-content-start align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <input
                  type="submit"
                  value="Send Message"
                  className="send-button"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="email">
          ↳ <Email className="icon" /> dylanytran@gmail.com
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
