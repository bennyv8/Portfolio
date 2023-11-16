import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAmazonaws,
  SiStorybook,
  SiTrello,
  SiLighthouse
} from "react-icons/si";
import { DiDocker, DiGoogleDrive, DiLinux } from "react-icons/di";
import Icon from "./Icon.jsx";

function Toolstack() {
  const techList = [
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      name: "AWS Cloud Development Kit",
      element: <SiAmazonaws />,
    },
    {
      link: "https://docs.docker.com/",
      name: "Docker",
      element: <DiDocker />,
    },
    {
      link: "https://storybook.js.org/docs/",
      name: "Storybook",
      element: <SiStorybook />,
    },
    {
      link: "https://trello.com/guide",
      name: "Trello",
      element: <SiTrello />,
    },
    {
      link: "https://code.visualstudio.com/docs",
      name: "VS Code",
      element: <SiVisualstudiocode />,
    },
    {
      link: "https://www.postman.com/api-documentation-tool//",
      name: "Postman",
      element: <SiPostman />,
    },
    {
      link: "https://docs.kernel.org/",
      name: "Linux",
      element: <DiLinux />,
    },
    {
      link: "https://slack.com/help/categories/200111606-Using-Slack",
      name: "Slack",
      element: <SiSlack />,
    },
    {
      link: "https://www.google.com/drive/",
      name: "Google Drive",
      element: <DiGoogleDrive />,
    },
    {
      link: "https://developer.chrome.com/docs/lighthouse/overview/",
      name: "Google Lighthouse",
      element: <SiLighthouse />,
    },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techList.map((tech, key) => {
        return (
          <Icon
            key={key}
            link={tech.link}
            name={tech.name}
            element={tech.element}
          />
        );
      })}
    </Row>
  );
}

export default Toolstack;
