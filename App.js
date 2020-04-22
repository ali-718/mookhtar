import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: "100%", padding: 10 }}>
            <Text style={{ color: "red", fontSize: 25 }}>
              {" "}
              textInComponent{" "}
            </Text>
            <Text style={{ marginTop: 10 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>

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
        </ScrollView>
      </SafeAreaView>
    );
  }
}
