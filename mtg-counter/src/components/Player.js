import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  ImageBackground
} from "react-native";

class Player extends Component {
  render() {
    return (
      <View style={[{ flex: 1, backgroundColor: this.props.player.bkgColor }]}>
        <ImageBackground
          source={require("../images/bkgUnderlay.png")}
          style={[styles.container, { width: "100%", height: "100%" }]}
        >
          <View style={styles.leftPanel}>
            <View style={styles.leftPanel1} />
            <View style={styles.leftPanel23}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.props.onDecrement(this.props.player)}
              >
                <Text style={styles.text}>-</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.centerPanel}>
            <View style={styles.centerPanel12}>
              <Text style={styles.text}>{this.props.player.lifetotal}</Text>
            </View>
            <View style={styles.centerPanel3}>
              <Text style={styles.emoji}>♥</Text>
            </View>
          </View>
          <View style={styles.rightPanel}>
            <View style={styles.rightPanel1}>
              <TouchableHighlight
                style={styles.manaButton}
                onPress={() => this.props.onIncrement(this.props.player)}
              >
                <Image
                  source={require("../images/mana.png")}
                  style={styles.manaColor}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.rightPanel23}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.props.onIncrement(this.props.player)}
              >
                <Text style={styles.text}>+</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderColor: "#00FF00",
    borderWidth: 1
  },
  leftPanel: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#00FF00",
    borderWidth: 1
  },
  leftPanel1: {
    flex: 1,
    borderColor: "#00FF00",
    borderWidth: 1
  },
  leftPanel23: {
    flex: 2,
    justifyContent: "flex-start",
    borderColor: "#00FF00",
    borderWidth: 1,
    width: "100%"
  },
  centerPanel: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00FF00",
    borderWidth: 1
  },
  centerPanel12: {
    flex: 2,
    justifyContent: "flex-end",
    borderColor: "#00FF00",
    borderWidth: 1
  },
  centerPanel3: {
    flex: 1,
    justifyContent: "flex-start",
    borderColor: "#00FF00",
    borderWidth: 1
  },
  rightPanel: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#00FF00",
    borderWidth: 1
  },
  rightPanel1: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#00FF00",
    borderWidth: 1
  },
  rightPanel23: {
    flex: 2,
    justifyContent: "flex-start",
    borderColor: "#00FF00",
    borderWidth: 1,
    width: "100%"
  },
  button: {
    width: "100%",
    height: "100%"
  },
  text: {
    textAlign: "center",
    fontSize: 80,
    fontWeight: "700",
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  emoji: {
    textAlign: "center",
    fontSize: 40,
    alignItems: "flex-start",
    color: "#FFF"
  },
  manaColor: {
    height: 30,
    width: 30,
    borderColor: "#00FF00",
    borderWidth: 1
  },
  manaButton: {
    height: 30,
    width: 30
  }
});

export default Player;
