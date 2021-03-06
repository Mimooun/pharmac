import React from "react";
import "../../styles/Dash/Sidebar.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaFileSignature, FaShoppingBag } from "react-icons/fa";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { GoSettings } from "react-icons/go";

import { CgLogOut } from "react-icons/cg";
import logo from "../../assets/images/soswhite.png";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/Dash/main">
          <li>
            <div className="menu__icon">
              <MdDashboard />
            </div>
            Dashboard
          </li>
        </NavLink>

        <NavLink to="/Dash/Prod">
          <li style={{ listStyle: "none", textDecoration: "none" }}>
            <div className="menu__icon">
              <FaShoppingBag />
            </div>
            Products
          </li>
        </NavLink>
        <NavLink to="/Dash/Cmd">
          <li>
            <div className="menu__icon">
              <FaFileSignature />
            </div>
            Commande
          </li>
        </NavLink>

        {
          <NavLink to="/Dash/Liv">
            <li>
              <div className="menu__icon">
                <RiMoneyEuroCircleFill />
              </div>
              Livraison
            </li>
          </NavLink>
        }
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
          <span>SOS PHARMA</span> <br />?? 2022 All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
