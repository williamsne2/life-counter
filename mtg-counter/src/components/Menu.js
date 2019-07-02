import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 30
  }
});

export default Menu;
