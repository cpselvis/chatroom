import React, { Component } from 'react';
import './index.scss';

class LeftNav extends Component {

  render() {
    return (
      <div className="lef-nav">
        <div className="avatar">
          <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
        </div>

        <div className="nav-list">
          <i className="message current">&#xe69a;</i>
          <i className="contact">&#xe619;</i>
          <i className="group">&#xe615;</i>
          <i className="settings">&#xe602;</i>
        </div>

        <div className="footer">
          <i className="logout">&#xe719;</i>
        </div>
      </div>
    )
  }
}

export default LeftNav;
