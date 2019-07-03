import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Players from "../components/Players";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    players: [
      { id: 1, lifetotal: 20, bkgColor: "rgb(211, 32, 42)", isTop: true },
      { id: 2, lifetotal: 20, bkgColor: "rgb(14, 104, 171)", isTop: false }
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

  changeColors = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    players[index] = { ...player };
    let newColor = this.cycleColor(players[index].bkgColor);
    players[index].bkgColor = newColor;
    this.setState({ players });
  };

  cycleColor = color => {
    let newColor = "";
    switch (color) {
      case "rgb(248, 231, 185)":
        newColor = "rgb(14,104,171)";
        break;
      case "rgb(14,104,171)":
        newColor = "rgb(70,70,70)";
        break;
      case "rgb(70,70,70)":
        newColor = "rgb(211,32,42)";
        break;
      case "rgb(211,32,42)":
        newColor = "rgb(0,115,62)";
        break;
      case "rgb(0,115,62)":
        newColor = "rgb(248, 231, 185)";
        break;
      default:
        newColor = "rgb(14,104,171)";
    }
    return newColor;
  };

  render() {
    return (
      <Players
        players={this.state.players}
        onIncrement={this.increment}
        onDecrement={this.decrement}
        onManaPress={this.changeColors}
      />
    );
  }
}

export default Main;
