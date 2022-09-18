import React from "react";

export default function About() {
  return (
    <div className="about-component" id="about">
      <div className="about-container">
        <div className="text-about">
          <div className="title-about">
            <h2>About Me</h2>
            <div className="Ameer-img">
              <img src={require("../img/my-passport-photo1.jpg")} alt="Ameer" />
            </div>
          </div>

          <p>
            Hello, my name is Ameer and I'm a Full-stack web developer. I'm 33
            years old and I love coding 😎.
            <br />
            I really hope for success and have a desire to progress and develop.
            <br />
          </p>
        </div>
      </div>
      <div class="Education">
        <h3>Education</h3>

        <div class="father">
          <p class="year">2013-2015 </p>
          <div class="describe">
            <strong>Ben Gurion University</strong>
            <p>MA in Science Education with thesis.</p>
          </div>
        </div>

        <div class="father">
          <p class="year">2014 </p>
          <div class="describe">
            <strong>Ministry Of Health</strong>
            <p>
              Certificate of recognition as an employee of an academic medical
              laboratory on behalf of the Ministry of Health
            </p>
          </div>
        </div>

        <div class="father">
          <p class="year">2008-2011 </p>
          <div class="describe">
            <strong>Tel Aviv University</strong>
            <p>B.SC. in Chemistry and Biology</p>
          </div>
        </div>

        <div class="father">
          <p class="year">2005-2007 </p>
          <div class="describe">
            <strong>Maghar Comprehensive School "A"</strong>
            <p>chemistry and physics electives</p>
          </div>
        </div>
      </div>
      <div class="Work">
        <h3 className="Work-Experience">Work Experience</h3>
        <div class="father">
          <p class="year">2014 until now </p>
          <div class="describe">
            <strong>Ziv Hospital</strong>
            <ul>
              <li>
                I'm working for about eight years in a clinical biochemistry
                laboratory in a hospital and I'm responsible for the field of
                endocrinology in the laboratory.
              </li>
              <li>Team Task Management</li>
              <li>Responsibility for arranging work</li>
              <li>Training of new employees and interns</li>
            </ul>
          </div>
        </div>

        <div class="father">
          <p class="year">2014-2017</p>
          <div class="describe">
            <strong>
              Chemistry Teacher at Maghar comprehensive school "B"
            </strong>
            <p>5 chemistry units</p>
          </div>
        </div>

        <div class="father">
          <p class="year">2012-2014</p>
          <div class="describe">
            <strong> Psychometry teacher</strong>
            <p>Teaching Quantitative Reasoning and Verbal Reasoning </p>
          </div>
        </div>
      </div>
    </div>
  );
}
