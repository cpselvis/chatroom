import React, { Component } from 'react';
import './index.scss';

class ChatList extends Component {

  render() {
    return (
      <div className="chat-list">
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">Taylor Swift</p>
            <p className="recent-msg">I miss you, call me.</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">Taylor Swift</p>
            <p className="recent-msg">I miss you, call me.</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">Taylor Swift</p>
            <p className="recent-msg">I miss you, call me.</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">Taylor Swift</p>
            <p className="recent-msg">I miss you, call me.</p>
          </div>
        </div>
        <div className="contact-item current">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="contact-content">
            <p className="nickname">Taylor Swift</p>
            <p className="recent-msg">I miss you, call me.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatList;
