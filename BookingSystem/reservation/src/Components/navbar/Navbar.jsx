import'./Navbar.css';
import {Link} from "react-router-dom"
import {faEarthAmericas,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
   <div className='navbar'>
    <div className='navContainer'>
      <Link to = "/" style={{color:"inherit" , textDecoration:"none"}}>
      <span className='logo'>booking</span>
      </Link>
      <div className="navItem">
      <FontAwesomeIcon icon={faEarthAmericas} className="headerIcon" />       
      <button className="navButton">Register</button>
      <button className="navButton">Login</button>
      </div>
    </div>
   </div>
  )
}

