import React, { Component } from "react";
import { Text, View, SafeAreaView, Button, AsyncStorage } from "react-native";
import BottomTabBar from "../components/BottomTabBar";

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
      <View style={{ width: "100%", flex: 1 }}>
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          <Text> Home </Text>
          <Button
            title="Go to about"
            onPress={() => this.props.navigation.navigate("About")}
          />
          <Button
            title="Logout"
            onPress={async () => {
              await AsyncStorage.removeItem("user");
              this.props.navigation.navigate("Login");
            }}
          />
        </SafeAreaView>

        <SafeAreaView style={{ backgroundColor: "white" }}>
          <BottomTabBar />
        </SafeAreaView>
      </View>
    );
  }
}
