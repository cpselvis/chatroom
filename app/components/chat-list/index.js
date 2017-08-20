import React, { Component } from 'react';
import './index.scss';

class ChatList extends Component {

  render() {
    return (
      <div className="chat-list">
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/2594636?v=4&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">Herbert Liu</p>
            <p className="recent-msg">I am herbert, nice to.</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars2.githubusercontent.com/u/1776385?v=4&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">JSCON</p>
            <p className="recent-msg">It is a lovely day</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars2.githubusercontent.com/u/9033585?v=4&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">codetker</p>
            <p className="recent-msg">How are you recently?</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars2.githubusercontent.com/u/1984063?v=4&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">Taylor Swift</p>
            <p className="recent-msg">I miss you, call me.</p>
          </div>
        </div>
        <div className="contact-item current">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/12631?v=4&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">James Halliday</p>
            <p className="recent-msg">It is a blazzing hot day.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatList;
