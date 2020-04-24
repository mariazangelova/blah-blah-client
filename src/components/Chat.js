import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../store/chat/chat";
import "../index.scss";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    const { feed, sendMessage } = this.props;
    const handleEnter = (e) => {
      sendMessage(this.state.value);
      this.setState({ value: "" });
    };
    return (
      <div className="chat">
        <h1>Blah Blah Chat</h1>
        <ul>
          {feed.chat.map((entry, index) => (
            <li key={index}>{entry.text}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onKeyDown={(e) => (e.keyCode === 13 ? handleEnter(e) : null)}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  feed: state,
});

export default connect(mapStateToProps, { sendMessage })(Chat);
