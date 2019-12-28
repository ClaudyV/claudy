import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>Implementation Engineer Intern at  <a style={{color: "#2c98f0"}} href="https://www.ematicsolutions.com/"> Ematic Solutions </a> </b>  <span>(July 2019 - present)</span></h2>
                        <ul style={{fontSize: "18px"}}>I have joined Ematic Solutions as an Implementation Engineer. The major part of the work is to:
                          <li>Handle data management and integration projects on different digital marketing platforms  </li>  
                          <li>Prepare data specification and integration for customers</li> 
                          <li>Work collaboratively with cross functions departments to constantly provide solutions and deliver performance for customers </li>
                          <li>Take ownership of customer issues reported and seeing problems through to resolution </li>
                          <li>Interface with customers on a regular basis, working with their marketing and development team to ensure successful on-boarding and long-term success </li>
                          <li>Follow standard procedures for proper escalation of unresolved issues to the appropriate internal teams </li>
                        </ul>
                         
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>Undergraduate Degree at <a style={{color: "#2c98f0"}} href="https://www.nctu.edu.tw/en"> National Chiao Tung University </a> </b><span>(2016-2020)</span></h2>
                        <p style={{fontSize: "18px"}}>I am currently studying Computer Science at  National Chiao Tung University (4th grade)

                        where I gain useful knowledge about Data Structures and Algorithms.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>Chinese Certificate at <a style={{color: "#2c98f0"}} href="https://www.ncu.edu.tw/en"> National Chiao Tung University </a> </b><span>(2015-2016)</span></h2>
                        <p style={{fontSize: "18px"}}> 我4年前有在中央大學學中文， 學了一年，我現在已經可以用中文來寫詩， 不錯吧? XDD 哈哈哈</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><b>High School Education at <a style={{color: "#2c98f0"}} href="https://en.wikipedia.org/wiki/Coll%C3%A8ge_Canado-Ha%C3%AFtien"> Collège Canado Haïtien </a> </b> <span>(2007-2014)</span></h2>
                        <p style={{fontSize: "18px"}}>I have completed my High School Education at Collège Canado Haïtien in Haïti. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}