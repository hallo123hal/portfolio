import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="p-5 bg-light">
      <div className="container">
        <h2>Contact</h2>
        <p><strong>Phone:</strong> +84945105486</p>
        <p><strong>Email:</strong> sontungnguyen16@gmail.com</p>
        <div className="social-icons mt-3">
          <a href="https://www.instagram.com/sontung.14/" target="_blank" rel="noopener noreferrer" className="icon instagram">
            <FaInstagram size={32} />
          </a>
          <a href="https://www.facebook.com/momonnga/" target="_blank" rel="noopener noreferrer" className="icon facebook">
            <FaFacebook size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;