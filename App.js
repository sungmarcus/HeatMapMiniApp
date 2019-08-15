import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import MapView, {Marker} from 'react-native-maps';

export default class App extends Component {

  state = {
    markers: [
      {
        title: "Lloyd Building",
        coordinates: {
          latitude: 53.343832,
          longitude: -6.251728
        },
        description: "8"
      },
      {
        title: "Arts Building",
        coordinates: {
          latitude: 53.343473,
          longitude: -6.250736
        },
        description: "16"
      },
      {
        title: "Hamilton Building",
        coordinates: {
          latitude: 53.343435,
          longitude: -6.257216
        },
        description: "9"
      },
      {
        title: "Museum Building",
        coordinates: {
          latitude: 53.343992,
          longitude: -6.254657
        },
        description: "6"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView>
          initialRegion =
          {{
            latitude: 53.343701,
            longitude: 6.254708,
            latitudeDelta: 0,
            longitudeDelta: 0
          }}
          {this.state.markers.map((marker,key) => (
            <Marker
              key = {index}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
