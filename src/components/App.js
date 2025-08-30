import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0, // numeric left position
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true, posi: 0 });
  }

  handleKeyDown(e) {
    if (e.keyCode === 39 && this.state.renderBall) {
      this.setState((prev) => ({ posi: prev.posi + 5 }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={{ left: this.state.posi + "px" }} />;
    }
    return (
      <button className="start" onClick={this.buttonClickHandler}>
        Start
      </button>
    );
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
