import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          {" "}
          A university is an institution of higher education, usually comprising
          a college of liberal arts and sciences and graduate and professional
          schools and having the authority to confer degrees in various fields
          of study.
        </p>
        <p>
          University of Bombay' was renamed as 'University of Mumbai' through
          notification issued by the Government of Maharashtra and published in
          the Government Gazette dated 4th September, 1996
        </p>
        <p>
          The University has always given its best to the country in general and
          to the city of Mumbai in particular by enthusiastically contributing
          to various academic, research and social initiatives.
        </p>
      </div>
    </div>
  );
};

export default About;
