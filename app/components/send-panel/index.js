import React, { Component } from 'react';
import './index.scss';

class SendPanel extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  sendMessage() {
    const { socket } = this.props;
    const { inputValue } = this.state;
    socket.emit('message', inputValue);
  }

  onTextareaInput(evt) {
    const value = evt.target.value.trim();

    this.setState({
      inputValue: value
    });
  }

  render() {
    return (
      <div className="send-panel">
        <div className="tools">
          <div className="emoj"></div>
          <div className="file"></div>
        </div>
        <div className="send-wrapper">
          <div className="msg-input">
            <textarea
              rows="10"
              cols="30"
              placeholder="Type something here."
              onInput={this.onTextareaInput.bind(this)}
            />
          </div>
          <div className="send-btn" onClick={this.sendMessage.bind(this)}></div>
        </div>
      </div>
    )
  }
}

export default SendPanel;
