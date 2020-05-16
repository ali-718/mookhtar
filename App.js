import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import About from "./screen/About";
import Products from "./screen/Products";
import Details from "./screen/Details";
import Login from "./screen/Login";
import splashscreen from "./screen/splashscreen";
import "./config";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={splashscreen} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Products"
            component={Products}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />

          <Stack.Screen name="Details" component={Details} />

          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// import React, { Component } from "react";
// import { Text, View, ScrollView } from "react-native";
// import Design from "./Design";
// import Iteration from "./Iteration";

// export default class App extends Component {
//   render() {
//     return <Iteration />;
//   }
// }

// // import React, { Component } from "react";
// // import {
// //   Text,
// //   View,
// //   SafeAreaView,
// //   Image,
// //   ScrollView,
// //   Dimensions,
// //   Button,
// // } from "react-native";
// // import Ali from "./screen/Ali";

// // export default class App extends Component {
// //   AboutMe = () => {
// //     alert(`I am ${this.state.Name}`);
// //   };

// //   state = {
// //     Name: "Ali",
// //     Country: "Egypt",
// //     Image1:
// //       "https://cdn.pixabay.com/photo/2020/01/31/07/26/shibuya-4807314_960_720.jpg",
// //   };

// //   Change = () => {
// //     this.setState({
// //       Name: "Mookhtar",
// //     });
// //   };

// //   ChnageImage = () => {
// //     this.setState({
// //       Image1:
// //         "https://cdn.pixabay.com/photo/2020/01/17/16/01/tree-4773295_960_720.jpg",
// //     });
// //   };

// //   render() {
// //     return (
// //       <SafeAreaView>
// //         <ScrollView>
// //           <Text style={{ fontSize: 20, color: "red" }}> textInComponent </Text>
// //           <Image
// //             source={{
// //               uri: this.state.Image1,
// //             }}
// //             style={{ width: "100%", height: 300 }}
// //           />
// //           <Image
// //             source={{
// //               uri: this.state.Image1,
// //             }}
// //             style={{ width: "100%", height: 300 }}
// //           />

// //           {/* Image slider */}
// //           <ScrollView
// //             horizontal
// //             style={{ width: Dimensions.get("window").width, height: 300 }}
// //             showsHorizontalScrollIndicator={false}
// //             pagingEnabled
// //           >
// //             <Image
// //               source={{
// //                 uri:
// //                   "https://cdn.pixabay.com/photo/2020/01/17/16/01/tree-4773295_960_720.jpg",
// //               }}
// //               style={{ width: Dimensions.get("window").width, height: 300 }}
// //             />
// //             <Image
// //               source={require("./assets/pic1.jpg")}
// //               style={{ width: Dimensions.get("window").width, height: 300 }}
// //             />
// //           </ScrollView>

// //           <Button
// //             title="Press Me"
// //             onPress={() => {
// //               let num = 2 + 1;
// //               alert(num);
// //             }}
// //           />

// //           <Button
// //             title="Change Image"
// //             onPress={() => {
// //               this.ChnageImage();
// //             }}
// //           />

// //           <Ali
// //             name={this.state.Name}
// //             livesIn={this.state.Country}
// //             ShowAlert={this.AboutMe}
// //             ChangeMyName={() => {
// //               this.setState({
// //                 Name: "Mookhtar",
// //               });
// //             }}
// //           />
// //         </ScrollView>
// //       </SafeAreaView>
// //     );
// //   }
// // }

// // // import React, { Component } from "react";
// // // import {
// // //   Text,
// // //   View,
// // //   SafeAreaView,
// // //   Image,
// // //   ScrollView,
// // //   Dimensions,
// // //   Button,
// // // } from "react-native";
// // // import About from "./screen/About";

// // // export default class App extends Component {
// // //   ShowAlert = () => {
// // //     alert("Hello I am Ali");
// // //   };

// // //   state = {
// // //     Name: "Mookhtar",
// // //     Age: 25,
// // //   };

// // //   ChangeName = () => {
// // //     this.setState({
// // //       Name: "Ali",
// // //     });
// // //   };

// // //   render() {
// // //     return (
// // //       <SafeAreaView>
// // //         <ScrollView showsVerticalScrollIndicator={false}>
// // //           {/* <Image
// // //           style={{ width: "100%", height: 300 }}
// // //           source={{
// // //             uri:
// // //               "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_960_720.jpg",
// // //           }}
// // //         /> */}
// // //           {/* <Image
// // //             style={{ width: "100%", height: 300 }}
// // //             source={require("./assets/pic1.jpg")}
// // //           />
// // //           <Image
// // //             style={{ width: "100%", height: 300 }}
// // //             source={require("./assets/pic1.jpg")}
// // //           />
// // //           <Image
// // //             style={{ width: "100%", height: 300 }}
// // //             source={require("./assets/pic1.jpg")}
// // //           /> */}

// // //           {/* <Text>{this.state.Name}</Text>
// // //           <Text>{this.state.Age}</Text>
// // //           <Button
// // //             title="About me"
// // //             onPress={() => {
// // //               // this.state["Name"] = "Ali";
// // //               // console.log(this.state);

// // //               this.setState({
// // //                 Name: "Ali",
// // //               });
// // //             }}
// // //           /> */}
// // //           <About Display={this.ChangeName} heading={this.state.Name} />
// // //           <Profile
// // //             Name={this.state.Name}
// // //             age={this.state.age}
// // //             Change={this.ChangeDetails}
// // //           />
// // //           {/* <Button title="Press me" onPress={this.ShowAlert} />
// // //           <Button
// // //             title="Press me"
// // //             onPress={() => {
// // //               this.ShowAlert();
// // //             }}
// // //           /> */}

// // //           <ScrollView
// // //             horizontal={true}
// // //             style={{ width: Dimensions.get("window").width, height: 300 }}
// // //             showsHorizontalScrollIndicator={false}
// // //             pagingEnabled={true}
// // //           >
// // //             <Image
// // //               style={{ width: Dimensions.get("window").width, height: 300 }}
// // //               source={{
// // //                 uri:
// // //                   "https://cdn.pixabay.com/photo/2020/04/04/09/55/cat-5001570_960_720.jpg",
// // //               }}
// // //             />
// // //             <Image
// // //               style={{ width: Dimensions.get("window").width, height: 300 }}
// // //               source={{
// // //                 uri:
// // //                   "https://cdn.pixabay.com/photo/2019/10/04/18/36/milky-way-4526277_960_720.jpg",
// // //               }}
// // //             />
// // //             <Image
// // //               style={{ width: Dimensions.get("window").width, height: 300 }}
// // //               source={{
// // //                 uri:
// // //                   "https://cdn.pixabay.com/photo/2020/04/21/14/23/bird-5073270_960_720.jpg",
// // //               }}
// // //             />
// // //           </ScrollView>
// // //         </ScrollView>
// // //       </SafeAreaView>
// // //     );
// // //   }
// // // }
