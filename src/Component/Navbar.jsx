import "./Navbar.css";
import { Link } from "react-scroll";
import {AiFillHome} from "react-icons/ai"
import {FiDownload} from "react-icons/fi"

const menudata = [
  {
    id: 1,
    title: "Skills",
  },
  {
    id: 1,
    title: "Projects",
  },
  {
    id: 1,
    title: "Contact",
  },
];

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <h3 style={{ cursor: "pointer" }}>
            <Link to="top" smooth={true} offset={-70} duration={800}>
             <p className="homeabout"> Home/Aboutme </p>
              <AiFillHome  className="navicon" />

            </Link>
          </h3>
          <ul>
          
            <li>
              <Link
                to={"Skills"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to={"Projects"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to={"Contact"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
              >
                Contact
              </Link>
            </li>

            <li>
              <a 
               
               href="https://drive.google.com/uc?id=1hP8mEK3N_a_Uwxj-or0hx91VipW7I1id&export=download"
              >
                Resume
                <FiDownload/>
              </a>
            </li>
          
          </ul>
        </nav>
      </header>
    </div>
  );
}
