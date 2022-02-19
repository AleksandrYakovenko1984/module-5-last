import React, { Component } from "react";
import { ClockFace } from "./Clock.styled";
class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervalId = null;
  componentDidMount() {
    this.intervalId = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalId); // если компонент прячется или скрывается, нужно чистить
  }

  render() {
    return <ClockFace>{this.state.time}</ClockFace>;
  }
}

export default Clock;
