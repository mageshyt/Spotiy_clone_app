import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home.screen";
import LoginScreen from "./screens/Login.screen";
import { SpotifyProvider } from "./context/SpotifyContext.js";
import PlaylistScreen from "./screens/Playlist.screen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <SpotifyProvider>
      <TailwindProvider>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
            <stack.Screen
              name="playlist"
              options={{ headerShown: false }}
              component={PlaylistScreen}
            />
          </stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </SpotifyProvider>
  );
}
