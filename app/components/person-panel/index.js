import React, { Component } from 'react';
import './index.scss';

class PersonPanel extends Component {

  render() {
    return (
      <div className="person-panel">
        <div className="user-avatar">
          <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
        </div>
        <div className="base-info">
          <p className="nickname">Lewis Cheng</p>
          <p className="job-title">Front-end engineer.</p>
        </div>
        <div className="contact-info">
          <p>
            <i className="location"/>
            BeiJing China
          </p>
          <p>
            <i className="email" />
            cpselvis@gmail.com
          </p>
          <p>
            <i className="phone" />
            13677432189
          </p>
        </div>
      </div>
    )
  }
}

export default PersonPanel;
