import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaPenFancy } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import '../CSS/footer.css'
import { Link } from "react-router-dom";
function Footer(){
    return(
       <>
       <div class="footer-container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 mt-5 border-top">
    <div class="col mb-3">
      <h4>Contact Us</h4>
      <span></span>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="mailto:iitpatelanurag2003@gmail.com" class="nav-link p-0 text-white"><CiMail className="footer-icon"/>iitpatelanurag2003@gmail.com</Link></li>
        <li class="nav-item mb-2"><p class=" p-0 text-white"><FaLocationDot className="fs-5 footer-icon"/>Mega Boys Hostel-B NIT Jalandhar, Punjab, India, 140014</p></li>
      </ul>
    </div>

    <div class="col mb-3 help">
      <h4>Help Center</h4>
      <span></span>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white"><FaPenFancy className="fs-5 footer-icon"/>Writing</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white"><MdMenuBook className="fs-5 footer-icon"/>Reading</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white"><FaRegCopyright className="fs-5 footer-icon"/>Copyright</Link></li>
        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white"><FaQuestionCircle className="fs-5 footer-icon"/>General FAQs</Link></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h4>Follow On Social Media</h4>
      <span></span>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="https://www.instagram.com/anuragsingh6370" class="nav-link p-0 text-white"><BsInstagram className="fs-3 footer-icon"/>Instagram</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.linkedin.com/in/anurag-singh-0b2a04257/" class="nav-link p-0 text-white"><FaLinkedin className="fs-3 footer-icon"/>Linked In</Link></li>
        <li class="nav-item mb-2"><Link to="https://github.com/anuragcoder9026" class="nav-link p-0 text-white"><FaGithub className="fs-3 footer-icon"/>Github</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.youtube.com/channel/UCsHsDHAVGOUyKRLahMx87nQ" class="nav-link p-0 text-white"><FaYoutube className="fs-3 footer-icon"/>Youtube</Link></li>
      </ul>
    </div>

  </footer>

</div>
       </>
    )
}

export default Footer;