import React, { Component } from "react";
import Notiflix from "notiflix";
import { FormPokemon, PokemonBtn } from "./Pokemon.styled";
export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };
  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.pokemonName.trim() === "") {
      Notiflix.Report.failure("ВНИМАНИЕ", "ЮЛЯ ПОКЕМОН", "close", {
        width: "360px",
        svgSize: "120px",
      });
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  render() {
    return (
      <FormPokemon onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <PokemonBtn type="submit">search</PokemonBtn>
      </FormPokemon>
    );
  }
}
