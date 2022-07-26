import React, { FC, FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

const App: FC = () => {
  return (
    <View>
      <Text>Dashboard Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
