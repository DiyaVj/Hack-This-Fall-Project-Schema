import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src="/assets/schema_logo.jpg"
        alt=""
        srcset=""
        className="navbar_logo"
      />
      <div className="search_bar">
        <input type="search" name="" id="" placeholder="search" />
        <img
          src="/assets/icons/search_icon.png"
          alt=""
          className="search_icon"
        />
      </div>
      <div className="category">
        <select name="category" id="">
          <option value="null">Category</option>
          <option value="pm_yojna">Schems for Students</option>
          <option value="women_yojna">Schemes for Womens</option>
          <option value="employment_yojna">Schemes for Employment</option>
          <option value="kissan_yojna">Schemes for Kissan</option>
        </select>
      </div>
    </div>
  );
}
