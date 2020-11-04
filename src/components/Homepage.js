import React, { Component } from "react";
import Modal from "./Modal";

class Homepage extends Component {
  state = { showModal: false };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="ui text container" style={{ textAlign: "center" }}>
          <h1>A better way to enjoy every day.</h1>
          <p>Be the first to know when we launch</p>
          <button
            className="ui primary button"
            style={{ marginTop: "10px", backgroundColor: "#222" }}
            onClick={() => this.setState({ showModal: true })}
          >
            Request an invite
          </button>
          {this.state.showModal ? (
            <Modal onDismiss={() => this.setState({ showModal: false })} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Homepage;
