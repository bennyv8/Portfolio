import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Benny, I'm from LA, I'm a full stack developer with a
              previous background in healthcare. I love learning and always
              strive to be the type of person that anyone can always depend on.
              Check out the about me and projects I've been working on during
              funemployment.
              <br />
              <br />
              <br />
              My favorite Front End Technologies
              <i>
                <b className="purple">
                  {" "}
                  ViteJs, HTML, CSS, ReactJs, TailwindCSS{" "}
                </b>
              </i>
              <br />
              <br />
              My favorite Back End Technologies
              <i>
                <b className="purple"> Postgres, ExpressJs, NodeJs, MongoDB </b>
              </i>
              <br />
              <br />
              My Favorite Dev Ops Technologies
              <i>
                <b className="purple">
                  {" "}
                  AWS: EC-T2, AWS:CodeDeploy, AWS:CodePipeline{" "}
                </b>
              </i>
              <br />
              <br />
              My Favorite Testing Technologies
              <i>
                <b className="purple"> Google Lighthouse, Jest, NewRelic </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid rounded-pill" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bennyv8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/benny-van/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
