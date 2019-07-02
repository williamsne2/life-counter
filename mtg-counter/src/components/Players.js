import React, { Component } from "react";
import Player from "./Player";
import { StyleSheet, Text, View } from "react-native";

class Players extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.players.map(player => (
          <Player
            key={player.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onManaPress={this.props.onManaPress}
            player={player}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
});

export default Players;
