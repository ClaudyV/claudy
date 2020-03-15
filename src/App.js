import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Skill from './components/skills'


class App extends Component {
  render() {
    return (
      <div id="claudy-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="claudy-main">
					<Introduction></Introduction>
					<About></About>
					<Skill></Skill>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;