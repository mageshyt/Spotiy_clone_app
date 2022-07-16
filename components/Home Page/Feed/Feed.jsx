import { View, Text } from "react-native";
import React from "react";
import {
  HomeIcon,
  LightningBoltIcon,
  SearchCircleIcon,
} from "react-native-heroicons/solid";
import { LibraryIcon } from "react-native-heroicons/outline";

const Feed = () => {
  return (
    <View className=" flex-row pt-2 bg-black  justify-evenly items-center  ">
      <Icons Icon={HomeIcon} name="Home" />
      <Icons Icon={SearchCircleIcon} name="Search" />
      <Icons Icon={LightningBoltIcon} name="library" />
    </View>
  );
};

export default Feed;

const Icons = ({ Icon, name }) => {
  let color = "white";
  if (name === "Home") {
    color = "#1ED760";
  }
  return (
    <View className=" justify-center items-center">
      <Icon size={25} color={`${color}`} />
      <Text className="text-sm text-white">{name}</Text>
    </View>
  );
};
