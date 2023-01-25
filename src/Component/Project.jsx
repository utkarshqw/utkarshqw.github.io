import styles from "./Project.module.css";
import DNA from "../img/DNA.png";
import Fitness from "../img/FitnessBlender.png";
import Farfetch from "../img/Farfetch.png";
import myHours from "../img/myhours.png";
import mt from "../img/mytheresa.png";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";

export default function Project() {
  return (
    <>
      <div className={styles.headingproject}>Projects</div>

      <div className={styles.projectparent} id="Projects">
        <div className={styles.pcard}>
          <div className={styles.banner}>
            <img className={styles.image3} src={mt} alt="#" />
          </div>
          <div className={styles.proinfo}>
            <h2>Mytheresa Clone</h2>
            <p>
              {" "}
              Clone of e-commerce website Mytheresa. Authentican, homepage,
              product, cart,server deployed on Render. Built by group of 5{" "}
            </p>
            <h2>TECH STACK</h2>
            {/* <p> REACT | chakra-ui | Express | MongoDB </p> */}
            <div className={styles.techstack}>
              <GrReactjs />
              <SiChakraui />
              <SiExpress />
              <SiMongodb />
            </div>

            <a
              className={styles.link}
              href="https://github.com/hurmitg/violent-hope-9407"
              target="_blank"
            >
              Source
            </a>
            <a
              className={styles.link}
              href="https://violent-hope.netlify.app/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        <div className={styles.pcard}>
          <div className={styles.banner}>
            <img className={styles.image3} src={myHours} alt="#" />
          </div>
          <div className={styles.proinfo}>
            <h2>My Hours Clone</h2>
            <p>
              Clone of Project-tracking wesite "MyHours". Homepage,
              support,authentican,project tracking page included. Built by group
              of 5
            </p>
            <h2>TECH STACK</h2>
            {/* <p>HTML | CSS | JAVASCRIPT | REACT | chakra-ui | Redux </p> */}
            <div className={styles.techstack}>
              <GrReactjs />

              <AiFillHtml5 />
              <DiCss3 />
              <SiJavascript />
              <SiRedux />

              <SiChakraui />
            </div>

            <a
              className={styles.link}
              href="https://github.com/Surya9263/hideous-crack-5602"
              target="_blank"
            >
              Source
            </a>
            <a
              className={styles.link}
              href="https://myhour.vercel.app/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        
        <div className={styles.pcard}>
          <div className={styles.banner}>
            <img className={styles.image3} src={DNA} alt="#" />
          </div>
          <div className={styles.proinfo}>
            <h2>DNA NEWS CLONE</h2>
            <p>
              Clone of DNA new website. News api used, different section of news
              added. Build by group of 5
            </p>
            <h2>TECH STACK</h2>
            {/* <p>HTML | CSS | JAVASCRIPT</p> */}
            <div className={styles.techstack}>
              {" "}
              <AiFillHtml5 />
              <DiCss3 />
              <SiJavascript />
            </div>

            <a
              className={styles.link}
              href="https://github.com/utkarshqw/Web18-2nd-construct-week-project"
              target="_blank"
            >
              Source
            </a>
            <a
              className={styles.link}
              href="https://luxury-lollipop-1d0feb.netlify.app/lifestyle.html"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        <div className={styles.pcard}>
          <div className={styles.banner}>
            <img className={styles.image3} src={Fitness} alt="#" />
          </div>
          <div className={styles.proinfo}>
            <h2>FITNESS BLENDER CLONE</h2>
            <p>
              Clone of Fitness Blender website where fitness routine can be
              found. Login, hompage, store, cart feature added and api is used
              which is deployed on Heroku. Product can be added to cart and
              removed accordingly the sum total of order will be updated
            </p>
            <h2>TECH STACK</h2>
            {/* <p>HTML | CSS | JAVASCRIPT | REACT</p> */}

            <div className={styles.techstack}>
              <GrReactjs />
              <AiFillHtml5 />
              <DiCss3 />
              <SiJavascript />
            </div>

            <a
              className={styles.link}
              href="https://github.com/utkarshqw/tested-plant-5539"
              target="_blank"
            >
              Source
            </a>
            <a
              className={styles.link}
              href="https://fitness-blender-fw18-1237-rct-101-const-week-proj.vercel.app/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
        <div className={styles.pcard}>
          <div className={styles.banner}>
            <img className={styles.image3} src={Farfetch} alt="#" />
          </div>
          <div className={styles.proinfo}>
            <h2>FARFETCH CLONE</h2>
            <p>
              Clone of e-commerce website "Farfetch" where female fashion
              product can be found. Hompage, newin section and api is used which
              is deployed on Heroku
            </p>
            <h2>TECH STACK</h2>
            {/* <p>HTML | CSS | JAVASCRIPT | REACT</p> */}

            <div className={styles.techstack}>
              {" "}
              <GrReactjs />
              <AiFillHtml5 />
              <DiCss3 />
              <SiJavascript />
            </div>

            <a
              className={styles.link}
              href="https://github.com/utkarshqw/overwrought-month-2087/tree/main/farfetch"
              target="_blank"
            >
              Source
            </a>
            <a
              className={styles.link}
              href="https://fw18-1237-farfetch-clone.vercel.app/"
              target="_blank"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
