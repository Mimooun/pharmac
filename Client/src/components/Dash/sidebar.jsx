import React from "react";
import "../../styles/Dash/Sidebar.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { CgLogOut } from "react-icons/cg";
import logo from "../../assets/images/soswhite.png";
import { Link } from "react-router-dom";

function Sidebar() {
  let history = useHistory();

  function logoutClick() {
    Axios.post("http://localhost:3001/logout");
    history.go("/login");
  }

  return (
    <div className="sidebar">
      <div className="logo__container">
        <img src={logo} alt="" />
      </div>
      <ul className="menu">
        <li className="active">
          <div className="menu__icon">
            <MdDashboard />
          </div>
          Dashboard
        </li>

        <Link to="/Prod" style={{listStyle:"none" , textDecoration:"none"}}>
          <li>
            <div className="menu__icon">
              <FaChalkboardTeacher />
            </div>
            Products
          </li>
        </Link>

        <li>
          <div className="menu__icon">
            <FaUserGraduate />
          </div>
          Students
        </li>
        <li>
          <div className="menu__icon">
            <RiMoneyEuroCircleFill />
          </div>
          Payment
        </li>
        <li>
          <div className="menu__icon">
            <GoSettings />
          </div>
          Settings
        </li>
        <li onClick={logoutClick}>
          <div className="menu__icon">
            <CgLogOut />
          </div>
          Logout
        </li>
      </ul>
      <div className="copyRight">
        <div>
          <span>SOS PHARMA</span> <br />© 2022 All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
