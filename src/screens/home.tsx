import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button, Input } from "../components";
import { auth, db } from "../constants/firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const App: FC = (props) => {
  const [msg, setMsg] = useState<null | string>(null);

  const signout = async () => {
    await signOut(auth);
  };

  const post = async () => {
    if (msg) {
      const data = {
        msg,
        timeStamp: Date.now(),
        approved: false,
      };

      try {
        await addDoc(collection(db, "posts"), data).then(() => {
          Alert.alert("Message posted");
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert("Missing fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={() => signout()} />
      <View>
        <Input
          placeholder="Write something"
          onChangeText={(txt) => setMsg(txt)}
        />
        <Button title="Post" onPress={post} />
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
});

export default App;
