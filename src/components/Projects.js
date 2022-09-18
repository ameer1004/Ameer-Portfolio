import React from "react";

export default function Projects() {
  return (
    <div className="projects-component" id="projects">
      <h2>Projects</h2>
      <div className="Project-Container">
        <div className="project-card-component">
          <img src={require("../img/Task1.jpg")} alt="project" />
          <div className="project-title">
            <h3>Add Product- Task</h3>
            <button className="btn">
              <a href="https://ameer1004.github.io/task-1-ameer/">See More</a>{" "}
            </button>{" "}
          </div>
        </div>
        <div className="project-card-component">
          <img src={require("../img/project1.jpg")} alt="project" />
          <div className="project-title">
            <h3>Task Project</h3>
            <button className="btn">
              <a href="https://ameer1004.github.io/project1-ameer-emran/">
                See More
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="project-card-component">
          <img src={require("../img/api movies.jpg")} alt="project" />
          <div className="project-title">
            <h3>Api Movies</h3>
            <button className="btn">
              <a href="https://movies-api-homework.herokuapp.com/">See More</a>{" "}
            </button>{" "}
          </div>
        </div>
        <div className="project-card-component">
          <img src={require("../img/shoesstore.jpg")} alt="project" />
          <div className="project-title">
            <h3>Shoes Store Project</h3>
            <button className="btn">
              <a href="https://react-homework-2.herokuapp.com/app">See More</a>{" "}
            </button>{" "}
          </div>
        </div>
        <div className="project-card-component">
          <img src={require("../img/project2.jpg")} alt="project" />
          <div className="project-title">
            <h3>Cryptonite Project</h3>
            <button className="btn">
              <a href="https://ameer1004.github.io/Project2-Crypto/">
                See More
              </a>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
