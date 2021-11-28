import React from "react";
import PropTypes from 'prop-types'



const Navbar = ({ icon, title }) => {
 
    return (
      <nav className="navbar bg-primary">
        <h1>
          <ion-icon name={icon}></ion-icon>
          {title}
        </h1>
      </nav>
    );
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "logo-github",
  };

Navbar.propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
  }

export default Navbar;
