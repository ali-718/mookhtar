import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BottomTabBar from "../components/BottomTabBar";

export default class Products extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     isLoading: false,
    //     Products: [
    //       {
    //         Name: "Y - Cap",
    //         price: "959",
    //         description:
    //           "6.1 inches QHD+ Dynamic AMOLED 64-bit Octa-Core Processor 20 MP front Camera 3400 mAh battery Triple camera, 12 MP, f/1.5-2.4 + 12 MP, f/2. 4K UHD video recording at 60 fps Gorilla Glass 6 IP68 dust/water proof (up to 1.5m for 30 mins)",
    //         Image:
    //           "https://www.deals.mokmo.me/wp-content/uploads/2019/05/ezgif.com-webp-to-png-1.png",
    //       },
    //       {
    //         Name: "Iphone X",
    //         price: "959",
    //         description:
    //           "6.1 inches QHD+ Dynamic AMOLED 64-bit Octa-Core Processor 20 MP front Camera 3400 mAh battery Triple camera, 12 MP, f/1.5-2.4 + 12 MP, f/2. 4K UHD video recording at 60 fps Gorilla Glass 6 IP68 dust/water proof (up to 1.5m for 30 mins)",
    //         Image:
    //           "https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhoneX-b.jpg",
    //       },
    //       {
    //         Name: "Y - Cap",
    //         price: "959",
    //         description:
    //           "6.1 inches QHD+ Dynamic AMOLED 64-bit Octa-Core Processor 20 MP front Camera 3400 mAh battery Triple camera, 12 MP, f/1.5-2.4 + 12 MP, f/2. 4K UHD video recording at 60 fps Gorilla Glass 6 IP68 dust/water proof (up to 1.5m for 30 mins)",
    //         Image:
    //           "https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhoneX-b.jpg",
    //       },
    //     ],
    //   });
    // }, 2000);

    fetch(
      "https://www.deals.mokmo.me/wp-json/wc/v3/products?consumer_key=ck_7f2af296ec92f1d0c8296901c1800442a5f6188a&per_page=100&page=1&consumer_secret=cs_b9663d5c3ab9ac59c1e9f19019e8aa00b7107f75"
    )
      .then((ali) => {
        return ali.json();
      })
      .then((ali) => {
        console.log(ali);
        this.Products = ali;
        this.setState({
          Products: ali,
          isLoading: false,
        });
      })
      .catch(() => {
        alert("some error occoured");
      });
  }

  Name = (name) => {
    return new Promise((resolve, reject) => {
      if (name == "ali") {
        resolve("Yes you are authorized");
      } else {
        reject("Unauthorized");
      }
    });
  };

  state = {
    Products: [],
    isLoading: true,
  };

  Products = [];

  render() {
    return (
      <SafeAreaView style={{ width: "100%", flex: 1, alignItems: "center" }}>
        {this.state.isLoading == true ? (
          <View style={{ width: "100%", flex: 1 }}>
            <Text>Loading</Text>
          </View>
        ) : (
          <View style={{ width: "100%", flex: 1 }}>
            <ScrollView style={{ width: "100%", flex: 1 }}>
              <View style={{ alignItems: "center", flex: 1, width: "100%" }}>
                {this.Products.map((item) => {
                  return (
                    <View
                      style={{
                        width: "90%",
                        backgroundColor: "white",
                        marginTop: 20,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}
                    >
                      <Image
                        style={{ width: "100%", height: 200, marginTop: 30 }}
                        source={{ uri: item.images[0].src }}
                      />

                      <Text
                        style={{
                          marginTop: 40,
                          fontSize: 22,
                          fontWeight: "bold",
                          marginBottom: 20,
                        }}
                      >
                        {item.name}
                      </Text>

                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            marginTop: 10,
                            fontSize: 20,
                            fontWeight: "300",
                            marginBottom: 20,
                          }}
                        >
                          Buy this for :
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            fontSize: 20,
                            fontWeight: "bold",
                            marginBottom: 20,
                            color: "blue",
                          }}
                        >
                          {" "}
                          AED {parseInt(item.price).toFixed(2)}
                        </Text>
                      </View>

                      <View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                          padding: 10,
                          justifyContent: "space-between",
                        }}
                      >
                        <TouchableOpacity
                          // onPress={() =>
                          //   this.props.navigation.navigate("Details", {
                          //     product: item,
                          //   })
                          // }
                          onPress={() => {
                            this.Name("mookhtar")
                              .then((res) => {
                                alert(res);
                              })
                              .catch((error) => {
                                alert(error);
                              });
                          }}
                          style={{
                            width: "40%",
                            height: 50,
                            backgroundColor: "blue",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 20,
                          }}
                        >
                          <Text style={{ color: "white" }}>Prize Details</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={{
                            width: "40%",
                            height: 50,
                            backgroundColor: "blue",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 20,
                          }}
                        >
                          <Text style={{ color: "white" }}>Prize Details</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )}
        <SafeAreaView>
          <BottomTabBar wishlist navigation={this.props.navigation} />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}
