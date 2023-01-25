import styles from  "./intro.module.css";
import profile from "../img/profile.jpg";
import { AiOutlineDownload } from "react-icons/ai";

export default function Intro() {
  return (
    <div className={styles.introparent} id="top">
      <div className={styles.introname}>
        <div>
          <p>Hello I'm</p>
          <p className={styles.candidatename}>Utkarsh Gupta</p>
          <p className="firstline">
            Mern stack web developer
          </p>

          <button className="button">
            <a
              target={"_blank"}
             
              // href="https://drive.google.com/uc?id=1PfM_pSgs58EMRcC0tA3F7IlriaFCTY62&export=download"
              href="https://drive.google.com/file/d/1hP8mEK3N_a_Uwxj-or0hx91VipW7I1id/view?usp=sharing"
              // https://drive.google.com/file/d//view?usp=sharing
              
            >
              Preview-Resume 
            </a>
          </button>
        </div>
        <div>
          <img className={styles.candidateimage} src={profile} alt="#" />
        </div>
      </div>

      <div className={styles.aboutme}>
        <p>About Me</p>
        <p style={{ fontSize: "20px" }}>
           Worked on several different projects collaboratively and
          solely.A self-driven and passionate web developer skilled in
          JavaScript, React, and Redux and familiar with front-end frameworks
          like Chakra-ui. Gone through 30 weeks of coding Bootcamp at Masai
          School.Also, worked on NodeJs, Express and MongoDB DataBase. Always eager to learn new technologies to enhance
          my skills and bring value to the organization. 
        </p>
      </div>
    </div>
  );
}
