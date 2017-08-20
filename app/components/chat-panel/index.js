import React, { Component } from 'react';
import SendPanel from '../send-panel';

import './index.scss';

class ChatPanel extends Component {

  render() {
    const { socket, chatData }= this.props;
    return <div className="chat-panel">
      <div className="header">
        <span className="nickname">James Halliday</span>
        <span className="status">
          <i className="online" />
          Mobile online
        </span>
      </div>
      <div className="msg-panel">
       {
         chatData.map((item, index) => {

           return item.nickname === 'lewischeng' ? (
             <div className="msg-item own" key={index}>
               <div className="msg-text">{item.message}</div>
               <div className="avatar">
                 <img src={item.avatar} />
               </div>
             </div>
           ) : (
             <div className="msg-item" key={index}>
               <div className="avatar">
                 <img src={item.avatar} />
               </div>
               <div className="msg-text">{item.message}</div>
             </div>
           )
         })
       }
      </div>
      <SendPanel
        socket={socket}
      />
    </div>;
  }
}

export default ChatPanel;
