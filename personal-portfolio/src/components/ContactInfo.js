import React from "react";
import { Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Col lg={12}>
      <div className="contact-info-bx wow slideInUp">
        <h3>Contact Information</h3>

        <div className="contact-item">
          <FaPhone />
          <div>
            <strong>Phone</strong><br />
            +91 8840911132
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <div>
            <strong>Email</strong><br />
            ashutoshmishra6554@gmail.com
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <div>
            <strong>Location</strong><br />
            Greater Noida, Uttar Pradesh
          </div>
        </div>

        <div className="contact-item">
          <FaLinkedin />
          <div>
            <strong>LinkedIn</strong><br />
            <a href="https://linkedin.com/in/ashutosh-mishra-7a629a276" target="_blank" rel="noreferrer">
              ashutosh-mishra-7a629a276
            </a>
          </div>
        </div>

        <div className="contact-item">
          <FaGithub />
          <div>
            <strong>GitHub</strong><br />
            <a href="https://github.com/ashutoshmishra0001" target="_blank" rel="noreferrer">
              ashutoshmishra0001
            </a>
          </div>
        </div>

        <div className="contact-item">
          <FaCode />
          <div>
            <strong>LeetCode</strong><br />
            <a href="https://leetcode.com/u/ashutoshmishra0001/" target="_blank" rel="noreferrer">
              ashutoshmishra0001
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ContactInfo;
