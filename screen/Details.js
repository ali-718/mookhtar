import React, { Component } from "react";
import { Text, View, Image, SafeAreaView } from "react-native";

export default class Details extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.product.Name,
    });
  }

  render() {
    return (
      <SafeAreaView style={{ width: "100%", flex: 1, alignItems: "center" }}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={{
            uri: this.props.route.params.product.Image,
          }}
        />

        <Text
          style={{
            marginTop: 40,
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {this.props.route.params.product.Name}
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "300",
            marginBottom: 20,
            padding: 10,
          }}
        >
          {this.props.route.params.product.description}
        </Text>
      </SafeAreaView>
    );
  }
}
