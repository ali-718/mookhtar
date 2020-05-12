import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

export default class Login extends Component {
  state = {
    Email: "",
    Password: "",
  };

  // Login = () => {
  //   if (this.state.Email.trim() == "" || this.state.Password.trim() == "") {
  //     alert("Please fill all fields");
  //     return null;
  //   }
  //   alert("you are logged in");
  // };

  Login = () => {
    if (this.state.Email.trim() == "") {
      alert("email required");
      return null;
    }
    if (this.state.Password.trim() == "") {
      alert("password required");
      return null;
    }

    fetch(
      "https://www.deals.mokmo.me/wp-json/api/flutter_user/generate_auth_cookie/?consumer_key=ck_7f2af296ec92f1d0c8296901c1800442a5f6188a&consumer_secret=cs_b9663d5c3ab9ac59c1e9f19019e8aa00b7107f75 ",
      {
        body: JSON.stringify({
          username: this.state.Email,
          password: this.state.Password,
        }),
        headers: {
          "Content-Type": "application/json;",
        },
        method: "POST",
      }
    )
      .then((res) => {
        if (res.status != 200) {
          alert("Some error occoured");
          return null;
        }
        return res.json();
      })
      .then(async (res) => {
        console.log(res.user);
        let stringObj = JSON.stringify(res.user);
        await AsyncStorage.setItem("user", stringObj);
        this.props.navigation.navigate("Home");
      })
      .catch((e) => {
        console.log(e);
      });

    // alert("you are logged in");
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
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          style={{
            width: "90%",
            height: 40,
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: 10,
            borderRadius: 10,
            marginTop: 20,
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

        {/* <TextInput
          placeholder="Mobile No."
          style={{
            width: "90%",
            height: 40,
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: 10,
            borderRadius: 10,
            marginTop: 20,
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
        /> */}
        <TouchableOpacity
          style={{
            width: "90%",
            padding: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "tomato",
            marginTop: 20,
            borderRadius: 10,
          }}
          onPress={() => this.Login()}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
