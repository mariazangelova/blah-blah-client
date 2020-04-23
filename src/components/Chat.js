import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../store/chat/chat";
import "../index.scss";
class Chat extends Component {
  render() {
    const { feed, sendMessage } = this.props;
    return (
      <div class="chat">
        <h1>Blah Blah Chat</h1>
        <ul>
          {feed.chat.map((entry, index) => (
            <li key={index}>{entry.text}</li>
          ))}
        </ul>
        <input
          type="text"
          onKeyDown={(e) =>
            e.keyCode === 13 ? sendMessage(e.target.value) : null
          }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  feed: state,
});

export default connect(mapStateToProps, { sendMessage })(Chat);
