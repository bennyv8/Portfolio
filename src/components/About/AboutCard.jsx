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
            born and raised in{" "}
            <span className="purple"> Los Angeles, California.</span>
            <br /> A recent UCLA and HackReactor grad with a speciality in full
            stack development, biology, and healthcare.
            <br />
            <br />
            Currently, I volunteer as Full Stack Developer for Hack for LA
            contributing to two of their open-source projects:{" "}
            <a
              href="https://www.hackforla.org/projects/lucky-parking.html#:~:text=Hack%20for%20LA's%20Lucky%20Parking,to%20the%20public%20at%20large."
              className="purple"
            >
              Lucky Parking
            </a>{" "}
            and{" "}
            <a
              href="https://www.hackforla.org/projects/civic-tech-jobs.html"
              className="purple"
            >
              Civic Tech Jobs
            </a>{" "}
            Prior to that, I have 3 full stack projects including an e-commerce
            user-interface, microservice API, and interactive quiz-taking
            application. I have also deployed and automated the CI/CD of this
            website. And once upon a time, I used to also work as a biomedical
            technician at Cedars Sinai and as an Emergency Medical Techncian for
            the greater Los Angeles County
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

          <p style={{ color: "rgb(155 126 172)" }}>"Always Improving" </p>
          <footer className="blockquote-footer">my motto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
