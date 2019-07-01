import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LifeBox from "./components/LifeBox";

export default class App extends React.Component {
  state = {
    p1LifeTotal: 20,
    p2LifeTotal: 20
  };

  incrementP1 = () => {
    let p1LifeTotal = this.state.p1LifeTotal;
    p1LifeTotal++;
    this.setState({ p1LifeTotal });
  };

  incrementP2 = () => {
    let p2LifeTotal = this.state.p2LifeTotal;
    p2LifeTotal++;
    this.setState({ p2LifeTotal });
  };

  decrementP1 = () => {
    let p1LifeTotal = this.state.p1LifeTotal;
    p1LifeTotal--;
    this.setState({ p1LifeTotal });
  };

  decrementP2 = () => {
    let p2LifeTotal = this.state.p2LifeTotal;
    p2LifeTotal--;
    this.setState({ p2LifeTotal });
  };

  render() {
    return (
      <View style={styles.container}>
        <LifeBox
          lifetotal={this.state.p1LifeTotal}
          increment={this.incrementP1}
          decrement={this.decrementP1}
          isTop={true}
        />
        <LifeBox
          lifetotal={this.state.p2LifeTotal}
          increment={this.incrementP2}
          decrement={this.decrementP2}
          isTop={false}
        />
      </View>
    );
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
