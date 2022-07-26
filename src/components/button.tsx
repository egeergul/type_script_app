import React, { FC } from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { app } from "../constants/firebase";
const { height, width } = Dimensions.get("screen");

interface Props {
  title: string;
  onPress: () => void;
}

const App: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
  },
});
