import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home.screen";
import LoginScreen from "./screens/Login.screen";
import { SpotifyProvider } from "./context/SpotifyContext.js";
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <SpotifyProvider>
      <TailwindProvider>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name="Login" component={LoginScreen} />
            <stack.Screen name="Home" component={HomeScreen} />
          </stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </SpotifyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
