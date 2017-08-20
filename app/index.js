
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { provider, connect } from 'react-redux';

import LeftNav from './components/left-nav';
import ChatList from './components/chat-list';
import ChatPanel from './components/chat-panel';
import PersonPanel from './components/person-panel';

import './index.scss';


class App extends Component {

    render() {
        return (<div>hell world</div>);
    }
}


const element = <div className="wrapper">
  <LeftNav />
  <ChatList />
  <ChatPanel />
  <PersonPanel />
</div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
