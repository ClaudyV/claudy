import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/claude.JPG)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Claude Vernet Michel</a></h1>
              <span className="email"><i className="icon-mail"></i> claudevernetmichel22@gmail.com</span>
              <br/>
              <br/>
            </div>

            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              	<li><a href="https://www.linkedin.com/in/claude-vernet-michel-10b1bb113/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              	<li><a href="https://github.com/ClaudyV" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              	<li><a href="https://www.instagram.com/claudybest/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/claudevernet.michel" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://medium.com/@claudevernetmichel" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              
              <p>
               <b> Let's build great things together </b>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}