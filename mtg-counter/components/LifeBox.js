import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const LifeBox = ({ lifetotal, increment, decrement, isTop }) => {
  return (
    <View style={[styles.lifeContainer, isTop ? styles.top : ""]}>
      <TouchableHighlight style={styles.button} onPress={() => increment()}>
        <Text style={styles.lifeText}>+</Text>
      </TouchableHighlight>
      <Text style={styles.lifeText}>{lifetotal}</Text>
      <TouchableHighlight style={styles.button} onPress={() => decrement()}>
        <Text style={styles.lifeText}>-</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  lifeContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  top: {
    transform: [{ rotate: "180deg" }]
  },
  button: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    alignItems: "center",
    justifyContent: "center"
  },
  lifeText: {
    flex: 1,
    textAlign: "center",
    fontSize: 80,
    fontWeight: "700",
    color: "#FFF"
  }
});

export default LifeBox;
