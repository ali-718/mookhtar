import React, { Component } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";

export default class Design extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          backgroundColor: "red",
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2020/01/31/07/26/shibuya-4807314_960_720.jpg",
          }}
        />
        <Text>Ali Haider</Text>
        <Text>Ali Haider</Text>
      </SafeAreaView>
    );
  }
}
