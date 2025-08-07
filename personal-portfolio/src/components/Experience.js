import React from "react";


  const experiences = [
    {
      date: "July 2025 - August 2025",
      title: "Full Stack Web Development Intern",
      company: "CODTECH IT Solutions Pvt. Ltd.",
      description:
        "Currently pursuing a 4-week online internship focusing on full-stack web development, learning advanced concepts and working on real-world projects.",
    },
    {
      date: "July 2025 - August 2025",
      title: "UI/UX Designer Intern",
      company: "Codec Technologies",
      description:
        "Working as a Project Intern in hybrid mode, gaining industry-level knowledge in UI/UX design and participating in weekly performance reviews.",
    },
    {
      date: "September 2024 - November 2024",
      title: "Java with Android Development Intern",
      company: "Softpro India Computer Technologies",
      description:
        "Completed a 45-day internship developing an Online Dictionary System using Java and Spring Boot. Received A++ grade for exceptional performance in training and development.",
    },
    {
      date: "September 2024",
      title: "Team Member - Logic Warrior",
      company: "Smart India Hackathon 2024",
      description:
        "Participated in the Internal Smart India Hackathon, demonstrating creativity, collaboration, and problem-solving skills. Coordinated team communication and contributed to ideation and implementation.",
    },
  ];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience & Internships</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
              <div className="timeline-card">
                <p className="timeline-date">{exp.date}</p>
                <h3 className="timeline-role">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
