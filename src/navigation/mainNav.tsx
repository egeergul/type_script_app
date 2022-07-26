import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./appstack";
import AuthStack from "./authstack";
import { auth } from "../constants/firebase";

const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);

  const bootstrap = () => {
    auth.onAuthStateChanged((_user) => {
      if (_user) {
        setUser(_user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
