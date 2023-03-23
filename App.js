import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Platform,
  StatusBar,
  useWindowDimensions,
  ImageBackground,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log("loaded");

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            // flex: 1,
            backgroundColor: "#fc5c65",
            width: 50,
            height: 50,
          }}
        ></View>
        <View
          style={{
            // flex: 1,
            backgroundColor: "#4ECDC4",
            width: 50,
            height: 50,
            position: "absolute",
            alignSelf: "flex-end",
          }}
        ></View>
      </View>
      <Image
        source={require("./assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

export function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logo}>
          <Image
            source={require("./assets/logo-red.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text>Sell what you don't need</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fc5c65",
            width: "100%",
            height: 10,
          }}
        ></View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#4ECDC4",
            width: "100%",
            height: 10,
          }}
        ></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E294E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    // alignItems: "center",
    // // height: "100%",
    // // width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  button: {
    padding: 20,
  },
  logo: {
    flex: 1,
    paddingTop: "20%",
    alignItems: "center",
    flexDirection: "column",
  },
});
