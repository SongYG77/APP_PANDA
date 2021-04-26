import React from "react";
import { YoutuberDetail } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";
import s3 from "./screens/s3";
import Apply from './screens/Apply'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />

        <Stack.Screen name="s3" component={s3} />

        <Stack.Screen name="Apply" component={Apply} />

        <Stack.Screen name="YoutuberDetail" component={YoutuberDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;