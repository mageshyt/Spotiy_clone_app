import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { BellIcon, ClockIcon, CogIcon } from "react-native-heroicons/solid";

const Header = () => {
  return (
    <View className=" p-4 flex-row items-center justify-evenly ">
      <Greeting />
      <BellIcon size={24} color="white" />
      <ClockIcon size={24} color="white" />
      <CogIcon size={24} color="white" />
    </View>
  );
};

export default Header;

const Greeting = () => {
  const hours = new Date().getHours();
  var greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return (
    <View>
      <Text className="text-white text-2xl font-bold">Good {greet}</Text>
    </View>
  );
};
