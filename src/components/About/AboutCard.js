import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Benny Van </span>
            born and raised in <span className="purple"> Los Angeles, California.</span>
            <br /> A recent UCLA and HackReactor grad, I'm looking to apply my skillset to contribute to something meaningful :D
            <br />
            I have experience in several personal projects including an e-commerce website, a microservice,
            and an interactive quiz-taking website. I also have profesional experience working as an Emergency
            1Medical Technician and Biomedical Technician
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Motorcycles
            </li>
            <li className="about-activity">
              <ImPointRight /> Snowboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Stand-up Comedy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always Improving"{" "}
          </p>
          <footer className="blockquote-footer">my motto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
