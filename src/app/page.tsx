import Image from "next/image";
import Navbar from "../../components/Navbar";
import "./globals.css";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1>🔧 Expert Java Software Engineer | Python Developer | Generative AI Enthusiast 🚀</h1>
          <p>
            I specialize in crafting efficient, scalable, and robust software solutions with a focus on Java, and have a deep expertise in Python and advanced data structures.
          </p>
        </div>
        <img src="/image.jpg" alt="Profile Image" className="profile-image" />
      </div>
    </>
  );
}
