import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CertificateCard } from "./CertificateCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import certImg1 from "../assets/img/certificate-img1.png";
import certImg2 from "../assets/img/certificate-img2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import resumeAshu from "../assets/resumeAshu.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WanderLust",
      description: "Air bnb clone",
      imgUrl: projImg1,
      liveDemo:"https://wanderlustproject-6yfh.onrender.com/listings",
      github: "https://github.com/ashutoshmishra0001/WanderLustProject",
    },
    {
      title: "Live Chat",
      description: "Real-Time Messaging",
      imgUrl: projImg2,
      liveDemo: "https://realtimechat-o72s.onrender.com",
      github :"https://github.com/ashutoshmishra0001/Realtime-chat"
    },
    {
      title: "Weather App",
      description: "Live Weather Updates",
      imgUrl: projImg3,
      liveDemo: "https://weather-app-1oie.onrender.com/",
      github : "https://github.com/ashutoshmishra0001/weather-app"
    },
  ];
  const certificates = [
    {
      certificate: "Web Development",
      issuedBy: "Apna College",
      imgUrl: certImg1,
      
    },
    {
      certificate: "Java with Android",
      issuedBy: "Softpro India",
      imgUrl: certImg2,
      
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Certifications</h2>
                <p>A collection of full-stack projects built using React, Node.js, Express, and MongoDB. These projects highlight my skills in responsive design, API integration, authentication, and clean UI/UX. Each solution is deployed and optimized for real-world use</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Résumé</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificates</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      
                      <br></br>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        
                        <br></br>
                      <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        
                        <br></br>
                          
                       <h5><a href={resumeAshu}  className="btn btn-outline-light resume-btn" >Download Resume</a></h5>
                        
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
