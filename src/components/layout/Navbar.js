import React, { Component } from "react";
import PropTypes from 'prop-types'



export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "logo-github",
  };

  static propTypes = {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
  }
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <ion-icon name={this.props.icon}></ion-icon>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
