import React, { Component } from "react";
import HTML from "../assets/html-5.png";
import git from "../assets/github.png";
import CSS from "../assets/css.png";
import DOCKER from "../assets/docker.png";
import GIT from "../assets/git.png";
import JAVA from "../assets/java.png";
import JS from "../assets/js.png";
import MONGODB from "../assets/mongodb.svg";
import MYSQL from "../assets/mysql.svg";
import PYTHON from "../assets/python.png";
import REACT from "../assets/react.png";
import INSTA from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import LinkedIn from "../assets/linkedin.png";
import Email from "../assets/email.png";
import Ai from "../assets/AI.png"
import WEB from "../assets/web.png"
import NETFLIX from "../assets/netflix.png"
import AMAZON from "../assets/amazon.png"
import "./style.css";
export class Cat extends Component {
  state = {
    type: this.props.line.type,
    value: this.props.line.value,
  };

  style = {
    align: "middle",
  };

  information = {
    about:
      "Hey there! I’m Bickson Abraham who enjoys building and experimenting with web projects. I like exploring new ideas, keeping things simple, and always learning something new.",
    education: [
      "High School Eduction:~\nLittel Flower English High School (2020 Passout)\n",
      "\nHigher Secondary Education (Computer Science):~\nSt Antonys Higher Secondary School (2020-2022)\n",

      "\nB.Tech in Computer Science:~\nBaselios Mathews II College of Engineering (2022 – Present) ",
    ],
    projects: [
      {
        projectName: "Ai Voice and Maths Assistant",
        icon: Ai,
        liveDemo: "https://shiru-ai.netlify.app/",
        linkToGithub:
          "https://github.com/Bicksona/AI-Voice-and-Maths-Assistant",
      },
      {
        projectName: "College-WebPage",
        icon: WEB,
        liveDemo: "https://college-webpage-phi.vercel.app/",
        linkToGithub: "https://github.com/Bicksona/College-Webpage",
      },
      {
        projectName: "Netflix",
        icon:NETFLIX,
        liveDemo: "https://demopage-1.netlify.app/",
        linkToGithub: "https://github.com/Bicksona/netflix-frontend",
      },
      
      {
        projectName: "Amazon(Not Responsive)",
        icon:AMAZON,
        liveDemo: "https://demopage-2.netlify.app/",
        linkToGithub: "https://github.com/Bicksona/amazon",
      },
      
     
    ],
    skills: [
      {
        name: "HTML",
        icon: HTML,
      },
      {
        name: "CSS",
        icon: CSS,
      },
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: REACT,
      },
      {
        name: "Git",
        icon: GIT,
      },
      {
        name: "Docker",
        icon: DOCKER,
      },
      {
        name: "Java",
        icon: JAVA,
      },
      {
        name: "MangoDB",
        icon: MONGODB,
      },
      {
        name: "MySQL",
        icon: MYSQL,
      },
      {
        name: "Python",
        icon: PYTHON,
      },
    ],
    social: [
      {
        platform: "GitHub",
        link: "https://github.com/Bicksona",
        icon: git,
      },
      {
        platform: "Instagram",
        link: "https://www.instagram.com/bickson_a/",
        icon: INSTA,
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/bickson-abraham-188090325/",
        icon: LinkedIn,
      },
      {
        platform: "Twitter",
        link: "https://x.com/BIOT93434104",
        icon: twitter,
      },
      {
        platform: "Email",
        link: "mailto:bicksonabraham30905@gmail.com",
        icon: Email,
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <p className="prompt"> {this.props.line.value} </p>
        {this.handelCd()}
      </React.Fragment>
    );
  }

  handelCd = () => {
    const navigation = this.state.value.split(" ")[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      if (lower === "about.txt") {
        return <p className="result">{this.information.about}</p>;
      } else if (lower === "education.txt") {
        return <p className="result">{this.information.education}</p>;
      } else if (lower === "projects.txt" || lower === "project.txt") {
  return (
    <React.Fragment>
      {this.information.projects.map((everyProject, index) => {
        return (
          <p className="result" key={index}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={everyProject.icon}
                alt={`${everyProject.projectName} icon`}
                style={{ width: "50px"}}
              />
              {everyProject.projectName}:~
            </span>
            <a href={everyProject.liveDemo} target="_blank" rel="noopener noreferrer"  style={{
      display: "inline-block",
      marginLeft: "7rem", // adjust to match project title
    }}>
              Live Link
            </a>
            <br />
            <a
              href={everyProject.linkToGithub}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 0,
                marginLeft: "7rem",
                display: "inline-block",
              }}
            >
              GitHub{" "}
              <img
                src={git}
                alt="GithubLink to Code"
                className="page-icon"
              />
            </a>
          </p>
        );
      })}
    </React.Fragment>
  );
}
 else if (lower === "skills.txt" || lower === "skill.txt") {
        return (
          <React.Fragment>
            <div className="result skills-container">
              {this.information.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </React.Fragment>
        );
      } else if (lower === "socials.txt" || lower === "social.txt") {
        return (
          <React.Fragment>
            {this.information.social.map((everySocial, index) => (
              <p className="result" key={index}>
                <a
                  href={everySocial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={everySocial.icon}
                    alt={everySocial.platform}
                    className="social-icon"
                  />
                  {everySocial.platform}
                </a>
              </p>
            ))}
          </React.Fragment>
        );
      } else {
        return <p className="result">Opps wrong input</p>;
      }
    }
  };
}

export default Cat;
