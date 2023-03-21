import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="claudy-work" data-section="projects">
          <div className="claudy-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="claudy-heading animate-box">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(/claudy/images/project-1.png)",
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          target="_blank"
                          href="https://page-layout.vercel.app/"
                          rel="noopener noreferrer"
                        >
                          <b>Page Layout using ReactJS</b>
                        </a>
                      </h3>
                      <span>
                        <b>Website</b>
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            target="_blank"
                            href="https://page-layout.vercel.app/"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-eye" /> Demo
                          </a>
                        </span>
                        <span>
                          <a
                            target="_blank"
                            href="https://github.com/ClaudyV/page-layout"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-link" /> Github
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(/claudy/images/project-2.png)",
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          target="_blank"
                          href="https://casana-demo.web.app/#/home"
                          rel="noopener noreferrer"
                        >
                          <b>Logistics Delivery Company</b>
                        </a>
                      </h3>
                      <span>
                        <b>Website</b>
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            target="_blank"
                            href="https://casana-demo.web.app/#/home"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-eye" /> Demo
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(/claudy/images/project-3.png)",
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          target="_blank"
                          href="https://casana-demo.web.app/#/home"
                          rel="noopener noreferrer"
                        >
                          <b>My Kid's Mentor</b>
                        </a>
                      </h3>
                      <span>
                        <b>Website</b>
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            target="_blank"
                            href="https://my-kid-s-mentor.firebaseapp.com/"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-eye" /> Demo
                          </a>
                        </span>
                        <span>
                          <a
                            target="_blank"
                            href="https://github.com/ClaudyV/myKidsMentor-web-app/tree/master/mykidsmentor"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-link" /> Github
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: "url(/claudy/images/project-4.png)",
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a
                          target="_blank"
                          href="https://compressthat.firebaseapp.com/"
                          rel="noopener noreferrer"
                        >
                          <b>Image Compressor</b>
                        </a>
                      </h3>
                      <span>
                        <b>Website</b>
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            target="_blank"
                            href="https://compressthat.firebaseapp.com/"
                            rel="noopener noreferrer"
                          >
                            <i className="icon-eye" /> Demo
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
