import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Input } from "../components";
import { auth, db } from "../constants/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const App = (props) => {
  const [name, setName] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);

  const signup = async () => {
    if (name && email && password) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email!,
          password!
        );

        if (user) {
          try {
            const docRef = await addDoc(collection(db, "users"), {
              name,
              email,
              password,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("Error", "Missing Fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Input placeholder="Name" onChangeText={(text) => setName(text)} />
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={signup} />
      <View style={styles.loginText}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => {
            props.navigation.navigate("login");
          }}
        >
          <Text style={{ color: "rgba(81, 135, 200, 1)" }}>Login Here</Text>
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
