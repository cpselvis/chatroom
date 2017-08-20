import React, { Component } from 'react';
import './index.scss';

class LeftNav extends Component {

  render() {
    return (
      <div className="lef-nav">
        <div className="avatar">
          <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
        </div>

        <div classNmae="nav-list">
          <div className="message"></div>
          <div className="contact"></div>
          <div className="group"></div>
          <div className="settings"></div>
        </div>

        <div className="logout"></div>
      </div>
    )
  }
}

export default LeftNav;
