import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class Login extends Component {
  state = {
    Email: "",
    Password: "",
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <TextInput
          placeholder="Email"
          style={{
            width: "90%",
            height: 40,
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: 10,
            borderRadius: 10,
          }}
          placeholderTextColor="gray"
          value={this.state.Email}
          onChangeText={(value) => {
            console.log(value);
            this.setState({
              Email: value,
            });
          }}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          style={{
            width: "90%",
            height: 40,
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: 10,
            borderRadius: 10,
          }}
          placeholderTextColor="gray"
          value={this.state.Password}
          onChangeText={(value) => {
            console.log(value);
            this.setState({
              Password: value,
            });
          }}
          secureTextEntry
        />

        <TextInput
          placeholder="Mobile No."
          style={{
            width: "90%",
            height: 40,
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: 10,
            borderRadius: 10,
          }}
          placeholderTextColor="gray"
          value={this.state.Password}
          onChangeText={(value) => {
            console.log(value);
            this.setState({
              Password: value,
            });
          }}
          secureTextEntry
          keyboardType="numeric"
        />

        <Text>{this.state.Email}</Text>
        <Text>{this.state.Password}</Text>
      </View>
    );
  }
}
