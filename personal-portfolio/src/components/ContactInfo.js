import React from "react";
import { Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Col lg={12}>
      <div className="contact-info-bx wow slideInUp">
        <h3 style={{textAlign:"center"}}>Contact Information</h3>

        <div className="contact-item">
          <FaPhone />
          
            <strong>Phone</strong>
            +91 8840911132
          
        </div>

        <div className="contact-item">
          <FaEnvelope />
          
            <strong>Email</strong>
            ashutoshmishra6554@gmail.com
          
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          
            <strong>Location</strong>
            Greater Noida, Uttar Pradesh
          
        </div>

        <div className="contact-item">
          <FaLinkedin />
          
            <strong>LinkedIn</strong>
            <a href="https://linkedin.com/in/ashutosh-mishra-7a629a276" target="_blank" rel="noreferrer">
              ashutosh-mishra-7a629a276
            </a>
          
        </div>

        <div className="contact-item">
          <FaGithub />
          
            <strong>GitHub</strong>
            <a href="https://github.com/ashutoshmishra0001" target="_blank" rel="noreferrer">
              ashutoshmishra0001
            </a>
          
        </div>

        <div className="contact-item">
          <FaCode />
          
            <strong>LeetCode</strong>
            <a href="https://leetcode.com/u/ashutoshmishra0001/" target="_blank" rel="noreferrer">
              ashutoshmishra0001
            </a>
          
        </div>
      </div>
    </Col>
  );
};

export default ContactInfo;
