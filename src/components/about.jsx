import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span  className="heading-meta"><b>Know more about me</b></span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p style={{fontSize: "18px"}}>Since I was a little boy, I have always nourished a strong passion for understanding and learning the core technologies that drive the World Wide Web and Mobile applications.
                    That passion pushes me to constantly explore new technologies. </p>
                    <p style={{fontSize: "18px"}}> Besides technology, I like to write poems, work out and travel </p>
                     
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"><b>What I do?</b></span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p style={{fontSize: "18px"}}>I have experience building websites using JavaScript(Angular, React.js, jQuery), HTML5, CSS3</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Email Marketing</h3>
                    <p style={{fontSize: "18px"}}>I have a good understanding in using Mailchimp and Campaign Monitor for Email Marketing</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>App Development</h3>
                    <p style={{fontSize: "18px"}}>Recently, I am working on a Flutter project to build both Android and IOS App using Dart</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}