import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";

export default class splashscreen extends Component {
  async componentDidMount() {
    // this.props.navigation.navigate("Login");

    const user = await AsyncStorage.getItem("user");

    const convertedData = JSON.parse(user);

    console.log(convertedData);

    if (convertedData) {
      this.props.navigation.navigate("Home");
    } else {
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <View>
        <Text> SplashScreen </Text>
      </View>
    );
  }
}
