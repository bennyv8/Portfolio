import React from "react";
import { Col } from "react-bootstrap";


function Icon(props) {
  return (
    <Col xs={4} md={2} className="tech-icons" onClick={()=> {    window.open(props.link, '_blank');}}>
      <div className="text-bubble">{props.name}</div>
      {props.element}
    </Col>
  );
}

export default Icon