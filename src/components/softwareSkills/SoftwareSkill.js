import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills,i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                {/* <i className={skills.fontAwesomeClassname}></i> */}
                <span
                      className="iconify"
                      data-icon={skills.fontAwesomeClassname}
                      data-inline="false"
                      id="skill-icon"
                    ></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
