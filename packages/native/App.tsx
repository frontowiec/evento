import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchData } from "@evento/shared/dist/api";

export default class App extends React.Component {
  componentDidMount() {
    fetchData().then((console.log));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
