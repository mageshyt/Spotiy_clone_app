import { Image, Text, View, TouchableOpacity } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SigInComponent from "../components/Login Page/SigIn.component";
import FaceBook from "../assets/image/facebook.png";
import Google from "../assets/image/google.png";
import Apple from "../assets/image/apple.png";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { useContext } from "react";
import { SpotifyContext } from "../context/SpotifyContext";
import spotifyApi from "../lib/spotify";
const LoginScreen = () => {
  const navigation = useNavigation();
  const { setToken, setUserId } = useContext(SpotifyContext);
  // ! for header navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: process.env.APP_CLINT_ID,
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://127.0.0.1:19000/",
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
  
      spotifyApi.setAccessToken(access_token);
      navigation.navigate("Home");
    }
  }, [response]);

  return (
    <View className="flex-1  justify-evenly  bg-black">
      <View className=" flex mt-4  items-center">
        <Image
          source={require("../assets/image/logo.png")}
          className=" h-[46px]  w-[150px] "
        />
      </View>
      {/* Sign in */}
      <View className="px-6">
        <Text className="text-4xl text-white font-bold">Sign in</Text>
      </View>

      <SigInComponent />

      {/* Button */}
      <View className="px-6">
        <TouchableOpacity
          onPress={() => promptAsync()}
          className="bg-[#1ED760]  rounded-2xl p-6"
        >
          <Text className="text-center font-medium text-[20px]">Sign In</Text>
        </TouchableOpacity>
      </View>
      {/* Divider */}
      <View className="px-6 flex-row space-x-2  items-center">
        <View className=" border-b w-[35%] border-white" />
        <View>
          <Text className=" text-white font-medium">or Sign in with</Text>
        </View>
        <View className=" w-[35%] border-b border-white " />
      </View>
      {/* Social Media signIn */}
      <View className="flex-row items-center justify-center  ">
        <SocialIcon Icons={FaceBook} />

        <SocialIcon Icons={Google} />

        <SocialIcon Icons={Apple} />
      </View>
      {/* Sign up */}
      <View>
        <Text className=" text-center text-{#15BDFF} font-medium">
          Don't you have an account? Sign up now.
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const SocialIcon = ({ Icons }) => {
  return (
    <View className=" bg-[#2D2D2D] mx-3 rounded-full p-2">
      <Image source={Icons} className="h-[40px] w-[38px]" />
    </View>
  );
};
