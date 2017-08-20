
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { provider, connect } from 'react-redux';

import ChatPanel from './components/chat-panel';


class App extends Component {

    render() {
        return (<div>hell world</div>);
    }
}


const element = <h1>
  <ChatPanel />
</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
