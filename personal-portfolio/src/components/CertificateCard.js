import { Col } from "react-bootstrap";

export const CertificateCard = ({ certificate, issuedBy, imgUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{certificate}</h4>
          <span>Issued By:{issuedBy}</span>
          <br></br>
          <a href={imgUrl} style={{color:"white" }} >View</a>


        </div>
      </div>
    </Col>
  )
}