import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import Comics from "./src/pages/Comics";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Comics />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 150,
  },
});
