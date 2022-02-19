import React, { Component } from "react";
import { Container, ControlBtn } from "./Reader.styled";
class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({ index: state.index + value }));
  };

  // onPrev = () => {
  //     this.setState(state => ({index:state.index - 1}))
  // }
  //  onNext = () => {
  //     this.setState(state => ({index:state.index + 1}))
  // }
  render() {
    const currentItem = this.props.items[this.state.index];
    const { index } = this.state;
    const { items } = this.props;
    return (
      <Container>
        <section>
          <ControlBtn
            type="button"
            disabled={index === 0}
            onClick={() => this.changeIndex(-1)}
          >
            nazad
          </ControlBtn>
          <ControlBtn
            type="button"
            disabled={index + 1 === items.length}
            onClick={() => this.changeIndex(1)}
          >
            vpered
          </ControlBtn>
        </section>
        <p>
          {index + 1}/ {items.length}{" "}
        </p>
        <article>
          <h2>{currentItem.title}</h2>
          <p>{currentItem.text}</p>
        </article>
      </Container>
    );
  }
}

export default Reader;
