import React, { Component } from "react";
import { Text, View, SafeAreaView, Button } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Home </Text>
        <Button
          title="Go to about"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </SafeAreaView>
    );
  }
}
