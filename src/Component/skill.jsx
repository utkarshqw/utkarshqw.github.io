import styles from "./skill.module.css";
import chakra from "../img/chakra.jpg";
import css1 from "../img/css1.png";
import express from "../img/express.png";
import git from "../img/git.png";
import html from "../img/html.png";
import js from "../img/js.png";
import mongodb from "../img/mongodb.png";
import nodejs from "../img/nodejs.png";
import react from "../img/react.png";
import redux from "../img/redux.png";

let data = [
  { src: html, name: "HTML" },
  { src: css1, name: "CSS" },
  { src: js, name: "JAVASCRIPT" },
  { src: react, name: "REACT" },
  { src: nodejs, name: "NODEJS" },
  { src: express, name: "EXPRESS" },
  { src: mongodb, name: "MONGODB" },
  { src: redux, name: "REDUX" },
  { src: chakra, name: "CHAKRA-UI" },
  
];

export default function Skill() {
  return (
    <div id="Skills" className={styles.skillparent}>
      <p className={styles.skillheading}>Skills</p>
      <div className={styles.cardparent}>


        {data.map((elem) => (
          <div key={elem.src} className={styles.skill}>
            <div>
            <img src={elem.src} className={styles.skillimg} alt="#" />
            <p className={styles.skillname}>{elem.name}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
