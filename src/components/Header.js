import React,{useState}from "react";
import "./Header.css";
import {FaKhanda} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import Barlist from "./Barlist"


const Header = () => { 
  const [showbar, setshowBar] = useState(true)
  return (
        <div>

      <header>
      <div className="logo"><FaKhanda/></div>
      <ul className="nav">
        <li><a href="#" className="nav-item">Works</a></li>
        <li><a href="#" className="nav-item">About</a></li>
        <li><a href="#" className="nav-item">Career</a></li>
        <li><a href="#" className="nav-item">Contact</a></li>
      </ul>
        <FaBars className="bar-icon" onClick={() => setshowBar(!showbar)}/>
    </header>
    
      {showbar && <div className="bar"><Barlist /></div>}
    </div>
  
    
    
  );
};
export default Header;
