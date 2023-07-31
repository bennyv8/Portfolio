import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiJest,
} from "react-icons/si";
import "./About.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">JavaScript</div>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Node.Js</div>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">React</div>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Python</div>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">MongoDb</div>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">PostgreSQL</div>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Git</div>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Redis</div>
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Html</div>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">CSS</div>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text-bubble">Jest</div>
        <SiJest />
      </Col>
    </Row>
  );
}

export default Techstack;
