import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../store/chat/chat";
class Chat extends Component {
  render() {
    const { feed, sendMessage } = this.props;
    return (
      <div>
        <h1>Blah Blah Chat</h1>
        <ul>
          {feed.map((entry) => (
            <li>{entry.text}</li>
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
