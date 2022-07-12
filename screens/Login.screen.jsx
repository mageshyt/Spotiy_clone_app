import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import  { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SigInComponent from "../components/Home Page/SigIn.component";
import FaceBook from "../assets/image/facebook.png";
import Google from "../assets/image/google.png";
import Apple from "../assets/image/apple.png";
const LoginScreen = () => {
  const navigation = useNavigation();
  // ! for header navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="w-full flex-1 justify-evenly bg-black">
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
        <View className="bg-[#1ED760]  rounded-2xl p-6">
          <Text className="text-center font-medium text-[20px]">Sign In</Text>
        </View>
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
    </SafeAreaView>
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
