import React from "react";
import { subscribeToTimer, readChat, sendChat } from "../../sockethelper";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    readChat(msg => {
      console.log("message from soket.io", msg);
      var oldArray = this.state.conversation;
      console.log("old array", oldArray);
      var newArray = oldArray.concat([msg]);
      console.log("about to say", newArray);

      this.setState({
        conversation: newArray
      });
    });
  }
  state = {
    msg: "",
    conversation: []
  };
  handleTyping = e => {
    this.setState({ msg: e.target.value });
  };
  handleSubmit = () => {
    console.log("clicked");
    sendChat(this.state.msg);
    this.setState({ msg: "" });
  };
  render() {
    console.log("this is state", this.state);
    return (
      <>
        <h1 className="large text-primary">Chat</h1>
        <div>
          {this.state.conversation.map((text, i) => {
            return (
              <section className="text" key={i}>
                <strong>{this.props.user + ": "}</strong>
                {text}
              </section>
            );
          })}
        </div>
        <p className="App-intro">{this.state.timestamp}</p>
        <div className="chat-div">
          <input
            className="chat-input"
            value={this.state.msg}
            onChange={this.handleTyping}
          ></input>
          <br></br>
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default Chat;
