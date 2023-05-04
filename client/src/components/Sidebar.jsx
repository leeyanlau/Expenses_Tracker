import React from "react";

import "../styles/sidebar/Sidebar.css";

import { NavLink } from "react-router-dom";
import { links } from "../data/links";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar_top">
        <NavLink to="/" className="sidebar_top_button">
          <div className="sidebar_top_title">Cash Tracker</div>
          <div className="sidebar_top_subtitle">by Lee Yan</div>
        </NavLink>
      </div>
      <ul className="sidebar_list">
        {links.map((val, key) => {
          return (
            <li key={key}>
              <NavLink to={val.path} className={({ isActive }) => (isActive ? "row_active" : "row")}>
                <div className="sidebar_link_icon">{val.icon}</div>
                <div className="sidebar_link_name">{val.name}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
