import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SDC from "../../Assets/Projects/SDC.gif";
import FEC from "../../Assets/Projects/FEC.png";
import quizWhiz from "../../Assets/Projects/quizWhiz.gif";
import LP from "../../Assets/Projects/LP.png";
import CTJ from "../../Assets/Projects/CTJ.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LP}
              isBlog={false}
              title="Lucky Parking"
              description="An application to visualize LA Parking Citation Data to help policy makers make more informed decisions. Notable contributions include expanding UI/Test Code Coverage"
              ghLink="https://github.com/hackforla/lucky-parking"
              demoLink="https://www.luckyparking.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CTJ}
              isBlog={false}
              title="Civic Tech Jobs"
              description="A website to connect and manage volunteers with oporrtunities at Hack for LA. I collaborate with UI/UX team to turn Figma wireframes into responsive and dyanmic pages"
              ghLink="https://github.com/hackforla/CivicTechJobs"
              demoLink="https://civictechjobs.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizWhiz}
              isBlog={false}
              title="QuizWhiz"
              description="Interactive quiz-taking website to learn trivia, study, or just have fun. Users can create an account, create quizzes, take quizzes, and keep track of their progress."
              ghLink="https://github.com/potato-fixers/quiz-whiz.git"
              demoLink="http://35.91.223.95/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SDC}
              isBlog={false}
              title="Atelier Reviews Microservice"
              description="A microservice for the Atelier E-commerce API. Utilized Postgres, AWS CDK, Nginx, Redis, New-Relic to deploy and scale service decreasing latency by 82.5%"
              ghLink="https://github.com/rpp2209-sdc-neptunium/Reviews-API-Service-Benny.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FEC}
              isBlog={false}
              title="Atelier Marketplace"
              description="A front-facing application for e-commerce. Built with JavaScript, React, and Node, users are able to view product details, related products, Q&A, and reviews"
              ghLink="https://github.com/rpp2209-fec-graviton/FECv2.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
