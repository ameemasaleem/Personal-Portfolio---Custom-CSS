import Navbar from "../components/Navbar";
import "../src/app/globals.css";



export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          As a dedicated Software Engineer with a strong foundation in Java, I bring a deep technical expertise to every project.
        </p>
        <p>
          My skill set extends to Python, specializing in advanced data structures and problem-solving techniques.
        </p>
        <p>
          Passionate about continuous learning and collaboration, I look forward to connecting and discussing ambitious projects.
        </p>
      </div>
    </>
  );
}
