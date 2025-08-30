import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  // Handle Start Button click → show ball & start moving
  buttonClickHandler() {
    this.setState({ renderBall: true }, () => {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          const newPos = prevState.posi + 5;
          return {
            posi: newPos,
            ballPosition: { left: newPos + "px" },
          };
        });
      }, 100); // move every 100ms
    });
  }

  // Clear interval when component unmounts
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Conditionally render Ball or Start button
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
