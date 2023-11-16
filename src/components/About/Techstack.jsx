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
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiJest,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import "./About.css";
import Icon from "./Icon.jsx";

function Techstack() {
  const techList = [
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      name: "JavaScript",
      element: <DiJavascript1 />,
    },
    {
      link: "https://nodejs.org/en/docs",
      name: "NodeJs",
      element: <DiNodejs />,
    },
    {
      link: "https://react.dev/",
      name: "ReactJs",
      element: <DiReact />,
    },
    {
      link: "https://www.typescriptlang.org/docs/",
      name: "TypeScript",
      element: <SiTypescript />,
    },
    {
      link: "https://tailwindcss.com/",
      name: "Tailwind CSS",
      element: <SiTailwindcss />,
    },
    {
      link: "https://docs.python.org/3/",
      name: "Python",
      element: <DiPython />,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      name: "HTML",
      element: <DiHtml5 />,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      name: "CSS",
      element: <DiCss3 />,
    },
    {
      link: "https://jestjs.io/",
      name: "Jest",
      element: <SiJest />,
    },
    {
      link: "https://www.mongodb.com/docs/",
      name: "MongoDb",
      element: <DiMongodb />,
    },
    {
      link: "https://www.postgresql.org/docs/",
      name: "PostgreSQL",
      element: <SiPostgresql />,
    },
    {
      link: "https://git-scm.com/doc",
      name: "Git",
      element: <DiGit />,
    },
    {
      link: "https://redis.io/docs/",
      name: "Redis",
      element: <SiRedis />,
    },
    ,
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

export default Techstack;
