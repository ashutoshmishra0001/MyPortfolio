import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,liveDemo, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={liveDemo} style={{color:"white" }} >Live Demo</a>
          <br></br>
          <a href={github} style={{color:"white" }} >GitHub</a>

        </div>
      </div>
    </Col>
  )
}
