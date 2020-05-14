import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon, Badge } from "native-base";

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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            style={{ color: this.props.home ? "tomato" : "black" }}
            name="home-automation"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Products")}
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            style={{ color: this.props.wishlist ? "tomato" : "black" }}
            name="heart"
            type="AntDesign"
          />
          {!this.props.wishlist ? (
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: 50,
                alignItems: "flex-end",
              }}
            >
              <Badge
                style={{
                  width: 20,
                  height: 20,
                  margin: 0,
                  padding: 0,
                  alignSelf: "flex-end",
                }}
                success
              >
                <Text style={{ fontSize: 10 }}>2</Text>
              </Badge>
            </View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="user" type="AntDesign" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="ticket-outline" type="MaterialCommunityIcons" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="shoppingcart" type="AntDesign" />
        </TouchableOpacity>
      </View>
    );
  }
}
