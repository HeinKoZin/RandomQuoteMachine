import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-md navigation-clean"
        style={{ color: "#ffffff", backgroundColor: "transparent" }}
      >
        <div className="container">
          <a className="navbar-brand" href="" style={{ color: "#ffffff" }}>
            Random Quote Machine
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
