import React, { Component } from "react";
import { Text, View, SafeAreaView, Button } from "react-native";

export default class Home extends Component {
  componentDidMount() {
    console.log("I am Component did mount");
  }

  constructor() {
    super();
    console.log("I am constructor");
  }

  render() {
    console.log("i am render");
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
