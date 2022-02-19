import React, { Component } from "react";
import PokemonDataView from "./PokemonData";
import PokemonError from "./PokemonErrorView";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: "pending" });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(`нет Покемона с именем ${this.props.pokemonName}`)
            );
          })
          .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
          .catch((error) => this.setState({ error, status: "rejected" }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === "idle") {
      return <div>Введите имя покемона.</div>;
    }
    if (status === "pending") {
      return <div>загружаем...</div>;
    }
    if (status === "rejected") {
      return <PokemonError message={error.message} />;
    }
    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
