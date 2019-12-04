import React from "react";
import { readChat, sendChat } from "../../sockethelper";

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
        <div>
          {this.state.conversation.map((text, i) => {
            return <p key={i}> {text}</p>;
          })}
        </div>
        <h1 className="large text-primary">Chat</h1>

        <p className="App-intro">{this.state.timestamp}</p>

        <input value={this.state.msg} onChange={this.handleTyping}></input>
        <br></br>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

export default Chat;