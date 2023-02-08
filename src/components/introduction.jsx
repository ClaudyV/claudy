import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="claudy-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi :) <br />
                            I'm Claude Vernet Michel
                          </h1>
                          <h2> A Web Developer Enthusiast </h2>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://www.cakeresume.com/s--3Y4nCjhBvI88BLAsnM4Skg--/claude-vernet-michel"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>See my projects here !!!</h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/ClaudyV"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Visit my blog :) </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://medium.com/@claudevernetmichel"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
