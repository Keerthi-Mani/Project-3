import React from "react";
import { readChat, sendChat } from "../../sockethelper";
import queryString from "query-string";
import io from "socket.io-client";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props.user: ", props);

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
    conversation: [],
    showChat: false
  };
  handleTyping = e => {
    this.setState({ msg: e.target.value });
  };
  handleSubmit = e => {
    console.log("clicked");
    e.preventDefault();
    sendChat(this.props.user + ": " + this.state.msg);
    this.setState({ msg: "" });
  };
  showChat = () => {
    this.setState({
      showChat: !this.state.showChat
    });
  };
  render() {
    console.log("this is state", this.state);
    const myStyle = {
      container: {
        display: this.state.showChat ? "block" : "none"
      }
    };
    return (
      <>
        <button className="chat-btn" onClick={this.showChat}>
          Chat
        </button>

        <div className="wrap" style={myStyle.container}>
          <div className="chat-text">
            {this.state.conversation.map((text, i) => {
              return (
                <section className="text" key={i}>
                  <strong> {"  "} </strong>
                  {text}
                </section>
              );
            })}

            <div className="chat-div" id="myForm">
              <form className="form-container">
                <input
                  className="chat-input"
                  value={this.state.msg}
                  onChange={this.handleTyping}
                ></input>
                <br></br>
                <button onClick={this.handleSubmit} className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Chat;
