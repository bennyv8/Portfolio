import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAmazonaws,
} from "react-icons/si";
import {
  DiDocker,
  DiGoogleDrive,
  DiLinux
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Visual Studio Code</div>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Postman</div>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Docker</div>
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">AWS</div>
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Linux</div>
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Slack</div>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Google Drive</div>
        <DiGoogleDrive />
      </Col>
    </Row>
  );
}

export default Toolstack;
