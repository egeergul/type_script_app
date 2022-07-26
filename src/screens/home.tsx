import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "../components";
import { auth } from "../constants/firebase";
import { signOut } from "firebase/auth";

const App: FC = (props) => {
  const signout = async () => {
    await signOut(auth);
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={() => signout()} />
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
