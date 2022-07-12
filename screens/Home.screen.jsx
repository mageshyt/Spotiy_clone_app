import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SigInComponent from "../components/Home Page/SigIn.component";
import FaceBook from "../assets/image/facebook.png";
import Google from "../assets/image/google.png";
import Apple from "../assets/image/apple.png";
const HomeScreen = () => {
  const navigation = useNavigation();
  // ! for header navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="w-full flex-1 justify-evenly bg-black"></SafeAreaView>
  );
};

export default HomeScreen;
