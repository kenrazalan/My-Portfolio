import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';
import './Greeting.css';
import landingPerson from '../../assets/lottie/landingPerson';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import Typist from 'react-typist'

import { illustration, greeting } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? 'dark-mode greeting-text' : 'greeting-text'}
              >
                Hi all, I'm  <Typist avgTypingDelay={200} cursor={{show:false}} ><span className="titlee">
                 Kenneth Razalan
                  </span>
                {/* <span className="wave-emoji">{emoji('👋')}</span> */}
                <span className="cursor">_</span></Typist>
              </h1>
              <p
                className={
                  isDark
                    ? 'dark-mode greeting-text-p'
                    : 'greeting-text-p subTitle'
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
             
            )} */}
             <img
                alt="man sitting on table"
                src={require('../../assets/images/manOnTable.svg')}
              ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
