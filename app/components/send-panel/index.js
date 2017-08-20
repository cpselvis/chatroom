import React, { Component } from 'react';
import './index.scss';

class SendPanel extends Component {

  render() {
    return (
      <div className="send-panel">
        <div className="emoj"></div>
        <div className="file"></div>
        <div className="msg-input"></div>
        <div className="send-btn"></div>
      </div>
    )
  }
}

export default SendPanel;
