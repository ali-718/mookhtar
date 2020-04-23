import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import About from "./About";

export default class App extends Component {
  ShowAlert = () => {
    alert("Hello I am Ali");
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Image
          style={{ width: "100%", height: 300 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_960_720.jpg",
          }}
        /> */}
          {/* <Image
            style={{ width: "100%", height: 300 }}
            source={require("./assets/pic1.jpg")}
          />
          <Image
            style={{ width: "100%", height: 300 }}
            source={require("./assets/pic1.jpg")}
          />
          <Image
            style={{ width: "100%", height: 300 }}
            source={require("./assets/pic1.jpg")}
          /> */}

          <ScrollView
            horizontal={true}
            style={{ width: Dimensions.get("window").width, height: 300 }}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          >
            <Image
              style={{ width: Dimensions.get("window").width, height: 300 }}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_960_720.jpg",
              }}
            />
            <Image
              style={{ width: Dimensions.get("window").width, height: 300 }}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2019/10/04/18/36/milky-way-4526277_960_720.jpg",
              }}
            />
            <Image
              style={{ width: Dimensions.get("window").width, height: 300 }}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2020/04/21/14/23/bird-5073270_960_720.jpg",
              }}
            />
          </ScrollView>
          <About DisplayAlert={this.ShowAlert} Heading={"Muhammad Mookhtar"} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
