import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    const yearsSpent = () => {
      return parseInt(new Date().getFullYear()) - 2015;
    };
    return (
      <div>
        <section className="claudy-experience" data-section="timeline">
          <div className="claudy-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="claudy-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <b>Frontend Developer at Bloxmith</b>{" "}
                          <span>(August 2022 - January 2023)</span>
                        </h2>
                        <ul style={{ fontSize: "18px" }}>
                          Bloxmith is a gaming company synergised with
                          blockchain technology. I have joined "Bloxmith" as a
                          Frontend Developer to help build 2 web platforms while
                          being the only Frontend Developer in the development
                          team. <br />
                          <b>Platform 1</b>: Build an internal website to
                          monitor Bloxmith's game app, display all players'
                          data, etc..
                          <br />
                          During this project, I used the following tools:
                          <br />
                          <li>Nextjs </li>
                          <li>Chakra UI</li>
                          <li>RWD (CSS3)</li>
                        </ul>

                        <ol style={{ fontSize: "18px" }}>
                          <b>Platform 2</b>: <br />
                          Build an NFT marketplace (Dapp) to sell Bloxmith game
                          app's avatar using Blocto wallet. The contract for
                          this platform has been written using Cadence and has
                          been handled by the backend team.
                          <br />
                          <b>
                            <a
                              style={{ color: "#2c98f0" }}
                              href="http://rumble-marketplace-staging-env.eba-p52np2w3.ap-south-1.elasticbeanstalk.com/"
                            >
                              Demo Link
                            </a>{" "}
                          </b>
                          <br />
                          In this project, I'm responsible for building the
                          frontend side of the NFT marketplace.
                          <br />
                          <li>
                            Get all avatars from backend via API using
                            filter(Latest, oldest, cheapest, price, highest
                            price)
                          </li>
                          <li>Get unique avatars from backend via API</li>
                          <li>
                            Upon users' buy event, connect wallet first and call
                            buy api from backend and backend will handle the
                            rest.
                          </li>
                        </ol>

                        <ul style={{ fontSize: "18px" }}>
                          <b>Tools used</b>:
                          <br />
                          <li>Nextjs</li>
                          <li>Chakra UI</li>
                          <li>HTML/CSS (from scratch).</li>
                          <li>RWD (CSS3)</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <b>
                            網頁前端開發工程師 at BLD Energy
                            百立達科技股份有限公司
                          </b>{" "}
                          <span>(March 2022 - July 2022)</span>
                        </h2>
                        <ul style={{ fontSize: "18px" }}>
                          Joined BLD Energy(百立達科技股份有限公司) as a
                          Frontend Web Developer, I was responsible for building
                          a cutting-edge web app while being the unique Frontend
                          Developer in the development team.
                          <b>Tools used</b>:
                          <li>Nextjs (reactjs), NextAuth, CSS3, HTML5</li>
                          <li>Vercel</li>
                          <li>Chart.js (Data Visualization)</li>
                        </ul>

                        <ol style={{ fontSize: "18px" }}>
                          <b>Projects</b>: <br />
                          PowerTrade is a cutting-edge web application with two
                          main features:
                          <br />
                          <li>
                            Being able to visualize energy consumption
                            (electricity) in real time on the web app via BLD
                            energy monitor installed in your house.
                          </li>
                          <li>
                            Being able to get paid whenever you save energy.
                          </li>
                        </ol>
                        <ul>
                          <b>
                            More info:{" "}
                            <a
                              style={{ color: "#2c98f0" }}
                              href="https://www.bld.energy/powertrade"
                            >
                              https://www.bld.energy/powertrade
                            </a>{" "}
                          </b>
                        </ul>
                        <br />

                        <ul style={{ fontSize: "18px" }}>
                          <b>Implementation</b>:
                          <br />
                          <li>
                            In this project, I used Nextjs( reactjs framework )
                            to build the frontend part of the website. The good
                            thing about Nextjs is that it provides server-side
                            rendering, which means you can talk to the server
                            before the page is fully rendered.
                          </li>
                          <li>Authentication (Ory Hydra/ Kratos, NextAuth)</li>
                          <li>HTML/CSS (from scratch).</li>
                          <li>Chart.js</li>
                          <li>
                            Fetched backend data via API calls (GET/ POST/ PUT)
                          </li>
                        </ul>
                        <ul>
                          <b>
                            Leaving Reason: The company has been closed down.
                          </b>
                        </ul>
                        <br />
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <b>
                            Web 前端開發工程師(Front-End Web Developer) at{" "}
                            <a
                              style={{ color: "#2c98f0" }}
                              href="https://www.moldex3d.com/en/"
                            >
                              {" "}
                              Moldex3d{" "}
                            </a>{" "}
                          </b>{" "}
                          <span>(March 2020 - February 2022)</span>
                        </h2>
                        <ul style={{ fontSize: "18px" }}>
                          I have joined Moldex3D as a Front-End Developer. The
                          major part of the work was to build web-based
                          applications with my team using :
                          <li>Angular , CSS3, HTML5</li>
                          <li>UI/UX design</li>
                          <li>D3.js, Chart.js for Data Visualization</li>
                          <li>
                            JavaScript Calendar (FullCalendar, Tui Calendar)
                          </li>
                        </ul>
                        <ul style={{ fontSize: "18px" }}>
                          <b>Management skills</b>:
                          <li>Teach interns how to do the job properly</li>
                          <li>Assign tasks to interns</li>
                          <li>Being a mentor to interns</li>
                        </ul>

                        <ul style={{ fontSize: "18px" }}>
                          <b>Projects</b>: <br />
                          <b>Platform 1</b>: Build a web-based system to display
                          all materials provided by the company using many types
                          of charts (pie, bar, line, scatter and radar chart).{" "}
                          <br />
                          <b>Demo</b>:{" "}
                          <a
                            style={{ color: "#2c98f0" }}
                            href="https://mhc.moldex3d.cloud/"
                          >
                            https://mhc.moldex3d.cloud
                          </a>{" "}
                          <br />
                          <b>Implementation</b>:
                          <li>
                            In this project, I used Angular to build the
                            frontend part of the web.
                          </li>
                          <li>HTLM/CSS are used to build the pages</li>
                          <li>For the graphs, I used Chart.js</li>
                          <li>
                            All data from backend have been fetched via API
                            calls (GET/ POST/ PUT)
                          </li>
                          Note: RWD hasn’t been implemented yet
                        </ul>
                        <br />
                        <ul style={{ fontSize: "18px" }}>
                          <b>Platform 2</b>: Build an e-learning web-based
                          platform where users can learn and take quizzes for a
                          better understanding of injection molding.
                          <br />
                          <b>Demo</b>:{" "}
                          <a
                            style={{ color: "#2c98f0" }}
                            href="https://university.moldex3d.cloud/"
                          >
                            https://university.moldex3d.cloud
                          </a>{" "}
                          <br />
                          <b>Implementation</b>:
                          <li>
                            In this project, I used Angular to build the
                            frontend part of the web.
                          </li>
                          <li>HTLM/CSS are used to build the pages</li>
                          <li>
                            HTML5 video player is used to display the videos of
                            each course
                          </li>
                          <li>
                            All data from backend have been fetched via API
                            calls (GET/ POST/ PUT)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <b>
                            Implementation Engineer Intern at{" "}
                            <a
                              style={{ color: "#2c98f0" }}
                              href="https://www.ematicsolutions.com/"
                            >
                              {" "}
                              Ematic Solutions{" "}
                            </a>{" "}
                          </b>{" "}
                          <span>(July 2019 - January 2020 )</span>
                        </h2>
                        <ul style={{ fontSize: "18px" }}>
                          I have joined Ematic Solutions as an Implementation
                          Engineer. The major part of the work is to:
                          <li>
                            Handle data management and integration projects on
                            different digital marketing platforms{" "}
                          </li>
                          <li>
                            Prepare data specification and integration for
                            customers
                          </li>
                          <li>
                            Work collaboratively with cross functions
                            departments to constantly provide solutions and
                            deliver performance for customers{" "}
                          </li>
                          <li>
                            Take ownership of customer issues reported and
                            seeing problems through to resolution{" "}
                          </li>
                          <li>
                            Interface with customers on a regular basis, working
                            with their marketing and development team to ensure
                            successful on-boarding and long-term success{" "}
                          </li>
                          <li>
                            Follow standard procedures for proper escalation of
                            unresolved issues to the appropriate internal teams{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <b>
                            Undergraduate Degree at{" "}
                            <a
                              style={{ color: "#2c98f0" }}
                              href="https://www.nctu.edu.tw/en"
                            >
                              {" "}
                              National Chiao Tung University{" "}
                            </a>{" "}
                          </b>
                          <span>(2016-2020)</span>
                        </h2>
                        <p style={{ fontSize: "18px" }}>
                          I am currently studying Computer Science at National
                          Chiao Tung University (4th grade) where I gain useful
                          knowledge about Data Structures and Algorithms.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <b>
                            Chinese Certificate at{" "}
                            <a
                              style={{ color: "#2c98f0" }}
                              href="https://www.ncu.edu.tw/en"
                            >
                              {" "}
                              National Central University{" "}
                            </a>{" "}
                          </b>
                          <span>(2015-2016)</span>
                        </h2>
                        <p style={{ fontSize: "18px" }}>
                          {" "}
                          我{yearsSpent()}年前有在中央大學學中文，
                          學了一年，我現在已經可以用中文來寫詩， 不錯吧? XDD
                          哈哈哈
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          <b>
                            High School Education at{" "}
                            <a
                              style={{ color: "#2c98f0" }}
                              href="https://en.wikipedia.org/wiki/Coll%C3%A8ge_Canado-Ha%C3%AFtien"
                            >
                              {" "}
                              Collège Canado Haïtien{" "}
                            </a>{" "}
                          </b>{" "}
                          <span>(2007-2014)</span>
                        </h2>
                        <p style={{ fontSize: "18px" }}>
                          I have completed my High School Education at Collège
                          Canado Haïtien in Haïti.{" "}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
