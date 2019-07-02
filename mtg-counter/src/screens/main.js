import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Players from "../components/Players";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    players: [
      { id: 1, lifetotal: 20, bkgColor: "red", isDead: false },
      { id: 2, lifetotal: 20, bkgColor: "blue", isDead: false }
    ]
  };

  increment = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    players[index] = { ...player };
    players[index].lifetotal++;
    this.setState({ players });
  };

  decrement = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    players[index] = { ...player };
    players[index].lifetotal--;
    this.setState({ players });
  };

  render() {
    return (
      <Players
        players={this.state.players}
        onIncrement={this.increment}
        onDecrement={this.decrement}
      />
    );
  }
}

export default Main;
