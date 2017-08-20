
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { provider, connect } from 'react-redux';

import LeftNav from './components/left-nav';
import ChatList from './components/chat-list';
import ChatPanel from './components/chat-panel';
import PersonPanel from './components/person-panel';

import './index.scss';

const socket = io.connect('http://127.0.0.1:3000');

class App extends Component {

  constructor() {
    super();

    this.state = {
      chatData: [{
        avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4&s=100',
        message: 'How are you recently?'
      }, {
        avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4&s=100',
        message: 'Are you busy about your work?'
      }, {
        avatar: 'https://avatars0.githubusercontent.com/u/12631?v=4&s=100',
        message: 'How about going swimming this sunday?'
      }]
    }
  }

  componentDidMount() {
    const self = this;
    const { chatData } = this.state;

    socket.on('test', function(message) {
      console.log(message)
      chatData.push({
        avatar: 'https://avatars0.githubusercontent.com/u/18289264?v=4&s=100',
        message: message.text,
        nickname: message.from
      });

      self.setState({
        chatData: chatData
      });
    });
  }

  render() {
    // To do... Store this data in database.
    const { chatData } = this.state;

    return <div className="wrapper">
      <LeftNav />
      <ChatList />
      <ChatPanel
        socket={socket}
        chatData={chatData}
        />
      <PersonPanel />
    </div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
