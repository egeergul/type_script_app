import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button, Input } from "../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../constants/firebase";

const App: FC = (props) => {
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);

  const login = async () => {
    if (email && password) {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
    } else {
      Alert.alert("Error", "Missing Fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={login} />
      <View style={styles.loginText}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => {
            props.navigation.navigate("signup");
          }}
        >
          <Text style={{ color: "rgba(81, 135, 200, 1)" }}>Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default App;
