import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Players from "../components/Players";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    players: [
      { id: 1, lifetotal: 20, bkgColor: "red", isTop: true, isDead: false },
      { id: 2, lifetotal: 20, bkgColor: "blue", isTop: false, isDead: false }
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
      case "white":
        newColor = "blue";
        break;
      case "blue":
        newColor = "black";
        break;
      case "black":
        newColor = "red";
        break;
      case "red":
        newColor = "green";
        break;
      case "green":
        newColor = "white";
        break;
      default:
        newColor = "blue";
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
