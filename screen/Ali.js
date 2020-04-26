import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Ali extends Component {
  render() {
    return (
      <View>
        <Text>
          {" "}
          I am {this.props.name} I lives in {this.props.livesIn}
        </Text>

        <Button
          title="About Me"
          onPress={() => {
            this.props.ShowAlert();
          }}
        />
        <Button
          title="Change Name"
          onPress={() => {
            this.props.ChangeMyName();
          }}
        />
      </View>
    );
  }
}
