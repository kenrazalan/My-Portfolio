import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import Typist from 'react-typist'
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
} from '../../portfolio';

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  

  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
       <Typist cursor={{show:false}}> <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a></Typist>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
        </label>
        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
        
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
         {viewExperience && (
            <li>
              <a href="#experience">Experiences</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
        
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
