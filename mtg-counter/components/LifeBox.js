import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class LifeBox extends Component {
  render() {
    return (
      <View style={styles.lifeContainer}>
        <Text style={styles.lifeText}>20</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lifeContainer: {
    flex: 1,
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  lifeText: {
    fontSize: 80,
    fontWeight: "700",
    color: "#FFF"
  }
});

export default LifeBox;
