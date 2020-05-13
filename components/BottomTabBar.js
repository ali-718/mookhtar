import React, { Component } from "react";
import { Text, View } from "react-native";
import { Icon } from "native-base";

export default class BottomTabBar extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "white",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="home-automation" type="MaterialCommunityIcons" />
        </View>
        <View
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="heart" type="AntDesign" />
        </View>
        <View
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="user" type="AntDesign" />
        </View>
        <View
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="ticket-outline" type="MaterialCommunityIcons" />
        </View>
        <View
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="shoppingcart" type="AntDesign" />
        </View>
      </View>
    );
  }
}
