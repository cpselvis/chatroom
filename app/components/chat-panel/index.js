import React, { Component } from 'react';
import SendPanel from '../send-panel';

import './index.scss';

class ChatPanel extends Component {

  render() {
    return <div className="chat-panel">
      <div className="header">
        <span className="nickname">Sophie Marceau</span>
        <span className="status">
          <i className="online" />
          Mobile online
        </span>
      </div>
      <div className="msg-panel">
        <div className="msg-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="msg-text">Diease good? how do you feel?</div>
        </div>
        <div className="msg-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="msg-text">Diease good? how do you feel?</div>
        </div>
        <div className="msg-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="msg-text">Diease good? how do you feel?</div>
        </div>
        <div className="msg-item">
          <div className="avatar">
            <img src="https://avatars0.githubusercontent.com/u/18289264?v=4&u=61082b05c36af8782b9d3abe227b7f429de7b816&s=100" />
          </div>
          <div className="msg-text">Diease good? how do you feel?</div>
        </div>
      </div>
      <SendPanel />
    </div>;
  }
}

export default ChatPanel;
