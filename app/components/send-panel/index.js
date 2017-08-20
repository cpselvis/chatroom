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
    socket.emit('message', {
      room: 'test',
      from: 'lewischeng',
      text: inputValue
    });

    this.setState({
      inputValue: ''
    })
  }

  onTextareaInput(evt) {
    const value = evt.target.value;

    this.setState({
      inputValue: value
    });
  }

  render() {
    const { inputValue } = this.state;
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
              value={inputValue}
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
