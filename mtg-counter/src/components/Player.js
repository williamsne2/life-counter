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
      <View
        style={[
          { flex: 1, backgroundColor: this.props.player.bkgColor },
          this.props.player.isTop ? styles.top : ""
        ]}
      >
        <ImageBackground
          source={require("../images/bkgUnderlay.png")}
          style={[styles.container, { width: "100%", height: "100%" }]}
        >
          <View style={styles.leftPanel}>
            <TouchableHighlight
              underlayColor={"rgba(0, 0, 0, 0.2)"}
              style={styles.button}
              onPress={() => this.props.onDecrement(this.props.player)}
            >
              <Text style={styles.text}>-</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.centerPanel}>
            <View style={styles.centerPanel12}>
              <Text style={styles.text}> </Text>
            </View>
            <View style={styles.centerPanel3}>
              <Text style={styles.emoji}>♥</Text>
            </View>
          </View>
          <View style={styles.rightPanel}>
            <TouchableHighlight
              underlayColor={"rgba(0, 0, 0, 0.2)"}
              style={styles.button}
              onPress={() => this.props.onIncrement(this.props.player)}
            >
              <Text style={styles.text}>+</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.lifetotals}>
            <Text
              style={
                this.props.player.isDead ? styles.textDead : styles.bigText
              }
            >
              {this.props.player.lifetotal}
            </Text>
          </View>
          <View style={styles.manaButton}>
            <TouchableHighlight
              underlayColor={"rgba(0, 0, 0, 0.0)"}
              style={styles.button}
              onPress={() => this.props.onManaPress(this.props.player)}
            >
              <Image
                style={styles.manaImage}
                source={require("../images/mana.png")}
              />
            </TouchableHighlight>
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
    width: "100%"
  },
  lifetotals: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  bigText: {
    fontSize: 130,
    fontWeight: "700",
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  leftPanel: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center"
  },
  centerPanel: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  centerPanel12: {
    flex: 2,
    justifyContent: "flex-end"
  },
  centerPanel3: {
    flex: 1,
    justifyContent: "flex-start"
  },
  rightPanel: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
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
  textDead: {
    fontSize: 130,
    fontWeight: "700",
    color: "rgb(190, 0, 20)",
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
    width: 30
  },
  manaButton: {
    position: "absolute",
    flex: 1,
    top: 10,
    right: 10,
    height: 50,
    width: 50
  },
  manaImage: {
    height: 30,
    width: 30
  },
  top: {
    transform: [{ rotate: "180deg" }]
  }
});

export default Player;
