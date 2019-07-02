import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/main";

export default class App extends React.Component {
  state = {};

  decrementP1 = () => {
    let p1LifeTotal = this.state.p1LifeTotal;
    p1LifeTotal--;
    this.setState({ p1LifeTotal });
  };

  render() {
    return <Main />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
