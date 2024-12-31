import React from 'react'
import Navbar from '../components/Navbar';
import "../src/app/globals.css";


const contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  )
}

export default contact