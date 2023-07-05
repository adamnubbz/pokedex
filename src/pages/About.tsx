import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/adam.jpg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hello, I am Adam Hudson</h1>
      <h2 className="profile-text">
        On the shoulders of giants, I made this awesome pokedex!
      </h2>
      <h4 className="profile-text">
        React Guide by Kishan Sheth, check out his video below
      </h4>
      <div className="profile-links">
        <a href="https://github.com/adamnubbz" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-hudson-340aa6249/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com/watch?v=qs2neNqLcmw&ab_channel=KishanSheth"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
