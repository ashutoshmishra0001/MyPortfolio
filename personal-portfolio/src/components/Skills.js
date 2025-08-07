import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "Authentication & Deployment",
    "RESTful APIs",
    "Version Control (Git & GitHub)",
    "Tailwind CSS",
    "Problem Solving & DSA",
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in full-stack development using React, Node.js, Express, and MongoDB. 
                Experienced with RESTful APIs, JWT authentication, Git/GitHub, Tailwind CSS, and deployment platforms like Render and Vercel.
                <br />
                Focused on building scalable, responsive, and secure web applications.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-card">
                      <h5>{skill}</h5>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
