import React from 'react'
import "../src/app/globals.css";
import Navbar from '../components/Navbar';
import Link from "next/link"

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="projects-section">
  <div className="container">
    <div className="flex-container">

      {/* Card 1 */}
      <div className="card">
        <div className="image-container">
          <img alt="content" className="image" src="/randomPass.PNG" />
        </div>
        <h2 className="card-title">Password Generator</h2>
        <p className="card-description">This is the random password generator App based on core JavaScript</p>
        <Link href="https://random-passoword-generator.netlify.app/">
          <button className="card-button">Check it out</button>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="card">
        <div className="image-container">
          <img alt="content" className="image" src="/Technova.PNG" />
        </div>
        <h2 className="card-title">TechNova Clone</h2>
        <p className="card-description">This is the clone webpage and it mainly focused on the Bootstrap Functionalities</p>
        <Link href="https://technova-clone-final.netlify.app/">
          <button className="card-button">Check it out!</button>
        </Link>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="image-container">
          <img alt="content" className="image" src="/positivus.PNG" />
        </div>
        <h2 className="card-title">Positivus Clone</h2>
        <p className="card-description">This is the clone webpage and it mainly focused on Html and Css</p>
        <Link href="https://positivus-clone-final.netlify.app/">
          <button className="card-button">Check it out!</button>
        </Link>
      </div>

      {/* Card 4 */}
      <div className="card">
        <div className="image-container">
          <img alt="content" className="image" src="/foodWagon.PNG" />
        </div>
        <h2 className="card-title">FoodWagon Webpage Clone</h2>
        <p className="card-description">This is the clone webpage and it mainly focused on Html and Css</p>
        <Link href="https://foodwagon-clone1.netlify.app/">
          <button className="card-button">Check it out!</button>
        </Link>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

export default Projects