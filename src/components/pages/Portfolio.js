import React from "react";
import appiumImg from "../../Image/appium.png";
import githubImg from "../../Image/github.png";
import personalWebsiteImg from "../../Image/personalwebsite.png";
import cypressImg from "../../Image/cypress.png";

const Portfolio = () => {
  const portfolio = [
    {
      title: "Mobile Automation Testing",
      intro: "Build automation scripts for mobile hybrid iOS and Android apps",
      tags: "Appium Java TestNG Maven TDD",
      image: appiumImg,
      imgAlt: "appium",
      githubLink: "https://github.com/serenafan/demoAppiumAndroid",
    },
    {
      title: "Prosonal Profile Website",
      intro: "A personal website to showcase projects and experiences",
      tags: "HTML CSS Javascript",
      image: personalWebsiteImg,
      imgAlt: "personalwebsite",
      githubLink: "https://github.com/serenafan/Fall2020FS1000/tree/master",
    },
    {
      title: "Web Automation Testing",
      intro: "Build E2E test scripts for web automation on Chrome and Firefox",
      tags: "Cypress Javascript Cucumber BDD",
      image: cypressImg,
      imgAlt: "cypress",
      githubLink: "https://github.com/serenafan/Cypress-project",
    },
  ];
  return (
    <main>
      <section id="projects" className="backgroundcolor">
        <div className="container">
          <h1 className="font">Projects</h1>
          <p>
            “Don't be pushed around by the fears in your mind. Be led by the
            dreams in your heart.”
            <br></br>― Roy T. Bennett, The Light in the Heart
          </p>
          <hr></hr>

          <table className="portfolio-table">
            {portfolio.map((portfolioItem) => (
              <tr>
                <td className="portfolio-column">
                  <img
                    className="tableImg"
                    src={portfolioItem.image}
                    alt={portfolioItem.imgAlt}
                  />
                </td>
                <td className="intro">
                  <h3>{portfolioItem.title}</h3>
                  <hr></hr>
                  <p>{portfolioItem.intro}</p>
                  <br></br>
                  <p>
                    <strong>Tags:</strong>
                  </p>
                  <p>{portfolioItem.tags}</p>
                  <p>
                    <strong>Github Repo:</strong>
                    <a href={portfolioItem.githubLink}>
                      <img
                        className="github"
                        width="35px"
                        height="35px"
                        alt="githubimg"
                        src={githubImg}
                      />
                    </a>
                  </p>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
