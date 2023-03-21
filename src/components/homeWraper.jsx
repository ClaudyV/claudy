import React from "react";
import About from "./about";
import Blog from "./blog";
import Introduction from "./introduction";
import Projects from "./projects";
import Skill from "./skills";
import Timeline from "./timeline";

const HomeWrapper = () => {
  return (
    <div id="claudy-main">
      <Introduction></Introduction>
      <About></About>
      <Skill></Skill>
      <Timeline></Timeline>
      <Projects></Projects>
      <Blog></Blog>
    </div>
  );
};

export default HomeWrapper;
