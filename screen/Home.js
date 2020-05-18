import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  AsyncStorage,
  TextInput,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";
import * as f from "firebase";

export default class Home extends Component {
  state = {
    name: "",
    age: "",
    data: [],
  };

  componentDidMount() {
    console.log("I am Component did mount");

    // Add data

    // f.database().ref("users").child("002").set({
    //   name: "mookhtar",
    //   age: 21,
    // });

    // f.database().ref("users").push({
    //   Name: "Mookhtar",
    //   age: 20,
    // });

    // REMOVE DATA

    // f.database().ref("users").child("-M7ZPsblbYMvC0O0XMAj").remove();

    // UPDATE DATA

    // f.database().ref("users").child("-M7ZPwHSIMu90WBuS58s").update({
    //   age: 25,
    // });

    f.database()
      .ref("users")
      .once("value")
      .then((res) => {
        // console.log(res.val());

        res.forEach((item) => {
          console.log(item.val());
          console.log(item.key);

          const user = { ...item.val(), id: item.key };

          this.setState({
            data: [...this.state.data, user],
          });
        });
      });
  }

  arr1 = [1, 2, 3];
  arr2 = [4, 5, 6];
  result = [...this.arr1, ...this.arr2];

  constructor() {
    super();
    console.log("I am constructor");
  }

  AddData = () => {
    f.database().ref("users").push({
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    console.log("i am render");
    return (
      <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
        <SafeAreaView style={{ width: "100%", flex: 1, alignItems: "center" }}>
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
          {console.log(this.result)}
          <TextInput
            style={{
              width: "80%",
              backgroundColor: "gainsboro",
              height: 40,
              borderColor: "gray",
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
            placeholder="Name"
            placeholderTextColor="gray"
            onChangeText={(value) => {
              this.setState({
                name: value,
              });
            }}
            value={this.state.name}
          />

          <TextInput
            style={{
              width: "80%",
              backgroundColor: "gainsboro",
              height: 40,
              borderColor: "gray",
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
              marginTop: 20,
            }}
            placeholder="Age"
            placeholderTextColor="gray"
            onChangeText={(value) => {
              this.setState({
                age: value,
              });
            }}
            value={this.state.age}
          />
          <Button
            style={{ marginTop: 20 }}
            title="Add Data"
            onPress={() => this.AddData()}
          />
          {this.state.data.map((item) => {
            return (
              <View style={{ marginTop: 40 }}>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
                <Text>ID: {item.id}</Text>
              </View>
            );
          })}
        </SafeAreaView>

        <SafeAreaView style={{ backgroundColor: "white" }}>
          <BottomTabBar home navigation={this.props.navigation} />
        </SafeAreaView>
      </View>
    );
  }
}
