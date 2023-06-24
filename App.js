import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import HeroMeContext from "./HeroMeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {} from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Settings from "./screens/Settings";
import PurchaseMoreCoin from "./screens/PurchaseMoreCoin";
import EditProfile from "./screens/EditProfile";
import CheckOut from "./screens/CheckOut";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>
        <HeroMeContext>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={MainScreen} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen
              name="PurchaseMoreCoin"
              component={PurchaseMoreCoin}
            />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
          </Stack.Navigator>
        </HeroMeContext>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
