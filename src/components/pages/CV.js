import React from "react";
import freshiiImg from "../../Image/freshii.png";
import stateStreetImg from "../../Image/statestreet.png";
import dealtapImg from "../../Image/dealtap.png";
import rogersImge from "../../Image/rogers.png";
import capgeminiImg from "../../Image/capgemini.png";

const CV = () => {
  const experiences = [
    {
      company: "Freshii • Toronto • ON",
      period: "Jul 2019 to Present",
      jobtitle: "Automation Test Engineer",
      description: [
        "Work in a highly dynamic Agile environment, participate in project user stories backlog grooming, business requirement intakes and sign-off, attend sprint tasks rating, stand-up meetings, business acceptance demos and design/execute test plans/scenarios/cases/scripts.",
        "Create automated test scripts using Java, Selenium WebDriver, Appium, TestNG, Page Object Model, Data Driven (from Excel) and Keyword Driven framework to eliminate bottleneck and improve effectiveness throughout Functional, Regression, Integration, Smoke and Cross Browser testing",
        "Use build management tool Maven and integrated complete framework with CI tool Jenkins pipeline for automated batch triggering and scheduling of the test cases, resulting in better productivity",
        "Run Smoke Regression suite after every sprint build and publish the detailed automated reports (Extent Reports) of the bugs detected to achieve better Test Coverage and Test Accuracy",
        "Perform cross browser, cross platform, parallel automation scenarios with Selenium Grid and Sauce Lab Integrations",
        "Maintain the automation code and resources in source controls Bitbucket Git, over the time for improvements and new features",
        "Review the code prepared by other team mates, analyse the root cause of failed scripts and propose enhancement on current procedures through work-flow analysis",
        "Contribute to the identification, management and closure of the system defects in JIRA in order to accept automation criteria",
      ],
      image: freshiiImg,
      imageAlt: "freshii",
    },
    {
      company: "State Street• Hangzhou • China",
      period: "Aug 2018 to Jun 2019",
      jobtitle: "Senior QA Analyst",
      description: [
        "Worked on quality assurance and system testing activities (QA/test planning, preparation of test scripts, test execution, defect tracking etc.) using HP ALM/QC",
        "Led main functionality sectors of multiple usability improvement projects, involved with functional, user interface, compatible, exploratory, smoke, sanity and regression testing, security testing and user acceptance testing against business requirement document",
        "Identified automation scenarios and developed web automation test suites using Selenium WebDriver, Java with Page Object Model (POM) design and Data Driven from database on TestNG Platform",
        "Responsible for verifying web service APIs using Rest Assured, Postman under BDD Cucumber framework with POJO class converting JSON request and response body",
        "Wrote custom SQL queries extensively using joins, grouping and aggregations to retrieve data for data validation on backend in Oracle database",
        "Advised and provided QA expertise and technical innovative insights for product business workflow construction, not only from technical development activities perspective, but also from business enhancement and prototype design perspective",
        "Inspired trust by being open, honest and direct in my communication, meeting my commitments and behaving ethically in all my dealings, stay current on established tools, techniques and technologies",
      ],
      image: stateStreetImg,
      imageAlt: "stateStreetImg",
    },
    {
      company: "DealTap • Toronto • ON",
      period: "Jan 2017 to Jun 2018",
      jobtitle: "Senior QA Analyst",
      description: [
        "Strategized and executed quality assurance projects assigned by Project Manager and QA manager, developed and maintained traceability matrix and created test strategies, test plans and test cases for all product offerings to cover functional/non-functional business user stories’ acceptance criteria",
        "Provided support in the performance testing using JMeter, including creating Thread Groups and testing Web Application for various loads on key business scenarios and generating necessary graphs/reports",
        "Provided support in the performance testing using JMeter, including creating Thread Groups and testing Web Application for various loads on key business scenarios and generating necessary graphs/reports",
      ],
      image: dealtapImg,
      imageAlt: "dealtapImg",
    },
    {
      company: "Rogers • Brampton • ON",
      period: "Feb 2015 to Dec 2016",
      jobtitle: "QA Analyst",
      description: [
        "Provided lifecycle management of manual and automated testing projects using QC and Developed QTP/UFT scripts with object model and description programming, and handled dynamic objects using VB-script and regular expression in QTP/UFT",
        "Used need base SQL queries like select, insert, update, delete and joining multiple tables based on business requirement to conduct backend testing",
        "Recognized for developing excellent test plans/scripts and rapidly discovering defects",
      ],
      image: rogersImge,
      imageAlt: "rogersImge",
    },
    {
      company: "Capgemini • Hangzhou • China",
      period: "Jun 2012 to Apr 2014",
      jobtitle: "QA Analyst/System Analyst",
      description: [
        "Provided L1 and L2 supports of more than 20 banking applications globally and carter to global users, provided supports for middle and back office systems, such as Strategic Middle Office, Netting System, Global Settlement System",
        "Involved in test plan development, test cases design, test data preparation, test execution, test case update and issue verification by using the business requirement document to make sure to fit the deadlines",
        "Responsible for executing QTP automated test scripts and generating testing reports for each build",
      ],
      image: capgeminiImg,
      imageAlt: "capgeminiImg",
    },
  ];

  return (
    <main>
      <section id="resume" className="backgroundcolor">
        <div className="container">
          <h1 className="font">Experiences</h1>
          <p>
            “Protons give an atom its identity, electrons its personality.”
            <br></br>- Bill Bryson, A short history of nearly everything
          </p>
          <hr></hr>
          <h3 className="font">Careers</h3>
          {experiences.map((experiencesItem) => {
            return (
              <div className="experience">
                <div className="col-1">
                  <h4 className="font">{experiencesItem.company}</h4>
                  <p className="experience-period">{experiencesItem.period}</p>
                  <img
                    src={experiencesItem.image}
                    alt={experiencesItem.imageAlt}
                    width="80px"
                    height="80px"
                  />
                </div>
                <div className="col-2">
                  <h4 className="font">
                    <strong className="jobtitle">
                      {experiencesItem.jobtitle}
                    </strong>
                  </h4>
                  {experiencesItem.description.map((descriptionItem) => (
                    <p className="font">
                      • {descriptionItem}
                      <br></br>
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default CV;
