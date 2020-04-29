import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Iteration extends Component {
  state = {
    Users: [
      { Name: "Iphone X", Price: 85000, id: 1 },
      { Name: "Iphone 11 Pro", Price: 125000, id: 2 },
      { Name: "Samsung S20", Price: 75000, id: 3 },
    ],
    price: 0,
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {this.state.Users.map((item) => {
          if (item.Price > this.state.price) {
            return (
              <View
                key={item.id}
                style={{
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  marginTop: 20,
                  backgroundColor: "green",
                  shadowColor: "red",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 6,
                }}
              >
                <Text style={{ color: "white" }}>Name :- {item.Name}</Text>
                <Text style={{ color: "white" }}>Price :- {item.Price}</Text>
              </View>
            );
          }
        })}

        <Button
          title="Less than"
          onPress={() => {
            this.setState({ price: 85000 });
          }}
        />
      </View>
    );
  }
}
