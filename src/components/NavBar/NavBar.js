import React, { Component } from "react";
import { NavBarItems } from "./NavBarItems";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  // let navigate = useNavigate();
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="nav-bar">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {NavBarItems.map((navItem, index) => {
            return (
              <span key={index}>
                <Link className={navItem.cName} to={navItem.url}>
                  {navItem.name}
                </Link>
              </span>
            );
          })}
        </div>
      </nav>
    );
  }
}

export default NavBar;
