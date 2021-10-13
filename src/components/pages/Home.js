import React from "react";
import profileImg from '../../Image/profileImg.png'
import LinkedInImg from '../../Image/LinkedIn.png'

const Home = () => {
  return (
    <main>
      <section className="backgroundImg">
        <div className="container-home">
          <p>Hey, I'm</p>
          <p>Serena Fan</p>
        </div>
      </section>
      <section className="backgroundcolor" id="profile">
        <div className="container">
          <h1 className="font">Profile</h1>
          <p>I'm a creative software QA Analyst</p>
          <hr></hr>
          <article>
            <div className="col-3">
              <h3 style={{ textAlign: "center" }}>About Me</h3>
              <p style={{ textAlign: "left" }}>
                I'm a QA Engineer with a passion for software development and
                testing. I'm a Knowledgeable and efficiency-obsessed
                professional with 6+ years of progressive experience helping
                engineering teams design, develop, and maintain sustainable
                automated test suites and incorporate exploratory testing into
                delivery process. Communicative team player with analytical
                troubleshooting skills, collaborates with stakeholders and
                balances multiple projects/tasks.
              </p>
            </div>
          </article>
          <article>
            <div className="col-3" style={{ textAlign: "center" }}>
              <img
                src={profileImg}
                alt="profileiMG"
                width="260px"
                height="240px"
                style={{ marginTop: "110px" }}
              />
            </div>
          </article>
          <article>
            <div className="col-3">
              <h3 style={{ textAlign: "center" }}>Details</h3>
              <p style={{ textAlign: "left" }} />
              <strong>Name:</strong>
              <br></br>
              Serena Fan
              <br></br>
              <br></br>
              <strong>Location:</strong>
              <br></br>
              Markham, Ontario
              <br></br>
              <br></br>
              <strong>Hobbies:</strong>
              <br></br>
              kayaking and paddle boarding, hiking and traveling, a foodie
              <br></br>
              <br></br>
              <strong>Follow me:</strong>
              <br></br>
              <br></br>
              <a
                href="https://www.linkedin.com/in/serena-fan-91b3511b2/"
                alt="linkedin"
              >
                <img
                  className="linkedIn"
                  src={LinkedInImg}
                  alt="linkedin"
                  width="35px"
                  height="35px"
                />
              </a>
            </div>
          </article>
          <article>
            <p>
              Have an exciting project where you need some help? Send me over a
              message, and{" "}
              <a className="chat" href="/contact">
                let's chat.
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
