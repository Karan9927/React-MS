import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <h3 className="text-[#FFDB70] mb-[20px] text-[15px]">All</h3>
      <div className="flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="MyBestWishes AI Generator"
          type="Design + Frontend"
          tech="Figma | React.js | Chakra UI"
          image="https://oktayshakirov.com/assets/images/projects/mybestwishes.jpg"
        />
        <ProjectCard
          title="MyWorkPhoto AI Generator"
          type="Design + Frontend"
          tech="Figma | React.js | Chakra UI"
          image="https://oktayshakirov.com/assets/images/projects/myworkphoto.png"
        />
        <ProjectCard
          title="Ogno Marketing Dashboard"
          type="Fullstack Project"
          tech="React.js | Strapi.js | MySQL"
          image="https://oktayshakirov.com/assets/images/projects/ogno-dashboard.png"
        />
        <ProjectCard
          title="AskMed By Bayer"
          type="Website + Chatbot"
          tech="Drupal | PHP | CSS"
          image="https://oktayshakirov.com/assets/images/projects/bayer-askmed.png"
        />
        <ProjectCard
          title="EnEmZet Online Store"
          type="Website + Admin Panel"
          tech="Next.js | TypeScript | MySQL"
          image="https://oktayshakirov.com/assets/images/projects/enemzet.png"
        />
        <ProjectCard
          title="Beyond Tinnitus Blog"
          type="Website"
          tech="Next.js | TypeScript | Material-UI"
          image="https://oktayshakirov.com/assets/images/projects/tinnitus-blog.png"
        />
        <ProjectCard
          title="Timeazon Online Store"
          type="Website + Admin Panel"
          tech="React.js | Node.js | MySQL | Sass"
          image="https://oktayshakirov.com/assets/images/projects/watch_store.png"
        />
        <ProjectCard
          title="Weather App"
          type="Application"
          tech="JavaScript | API's | CSS"
          image="https://oktayshakirov.com/assets/images/projects/weather-app.png"
        />
        <ProjectCard
          title="Pigletz Memory Game"
          type="Web Game"
          tech="JavaScript | CSS"
          image="https://oktayshakirov.com/assets/images/projects/pigletz-matching.png"
        />
        <ProjectCard
          title="Team Management Tool"
          type="Application"
          tech="Application"
          image="https://oktayshakirov.com/assets/images/projects/team-manager.png"
        />
        <ProjectCard
          title="Personal Portfolio"
          type="Website"
          tech="JavaScript | CSS | HTML"
          image="https://oktayshakirov.com/assets/images/projects/portfolio.png"
        />
        <ProjectCard
          title="Quiz Time"
          type="Game"
          tech="PHP | CSS | HTML"
          image="https://oktayshakirov.com/assets/images/projects/quiz.png"
        />
      </div>
    </div>
  );
};

export default Projects;
