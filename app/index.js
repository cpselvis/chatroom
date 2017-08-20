
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { provider, connect } from 'react-redux';

import ChatPanel from './components/chat-panel';
import PersonPanel from './components/person-panel';

import './index.scss';


class App extends Component {

    render() {
        return (<div>hell world</div>);
    }
}


const element = <div className="wrapper">
  <ChatPanel />
  <PersonPanel />
</div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
