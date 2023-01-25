import styles from "./contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import Email from "./Email";

export default function Contact() {
  return (
    <div id="Contact" className="contactparent">
      <p className="headingcontact">Contact me</p>
      <div className={"contactplusemail"}>
        
        <div>
          <a
            className="contactlink"
            target="_blank"
            href="https://github.com/utkarshqw"
          >
            
            <AiFillGithub  className="footericon" color="black" size={"30px"} />
            Github
          </a>
          <a
            className="contactlink"
            target="_blank"
            href="https://www.linkedin.com/in/utkarshqw/"
          >
            
            <BsLinkedin className="footericon" color="black" size={"30px"} />
            Linkedin
          </a>

          <a
          className="contactlink"
          href="#">
          <MdEmail className="footericon" color="black" size={"30px"} />
          utkarshup75@gmail.com
          </a>

          <a
          className="contactlink"
          href="#">
          <BsFillTelephoneFill className="footericon" color="black" size={"30px"} />
          8354028499
          </a>
          
        </div>
        <div>
        <Email />
        </div>
      </div>

      
    </div>
  );
}
