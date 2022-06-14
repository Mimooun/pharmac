import React from "react";
import "../styles/sidebar.css";
import Axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { CgLogOut } from "react-icons/cg";
import lg from "../assets/images/sospharma2white.png";

function Sidebar() {
  let history = useHistory();

  function logoutClick() {
    Axios.post("http://localhost:3001/logout");
    history.go("/Adminlog");
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
        <li>
          <div className="menu__icon">
            <FaChalkboardTeacher />
          </div>
          Teachers
        </li>
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
        {
          <NavLink to="/Adminlog">
            <li onClick={logoutClick}>
              <div className="menu__icon">
                <CgLogOut />
              </div>
              Logout
            </li>
          </NavLink>
        }
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
