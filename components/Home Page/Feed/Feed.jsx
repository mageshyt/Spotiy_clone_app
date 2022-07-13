import { View, Text } from "react-native";
import React from "react";
import {
  HomeIcon,
  LightningBoltIcon,
  SearchCircleIcon,
} from "react-native-heroicons/outline";
import { LibraryIcon } from "react-native-heroicons/outline";

const Feed = () => {
  return (
    <View className=" flex-row  justify-evenly items-center  ">
      <Icons Icon={HomeIcon} name="Home" />
      <Icons Icon={SearchCircleIcon} name="Search" />
      <Icons Icon={LightningBoltIcon} name="library" />
    </View>
  );
};

export default Feed;

const Icons = ({ Icon, name }) => {
  return (
    <View className=" justify-center items-center">
      <Icon size={25} color="white" />
      <Text className="text-sm text-white">{name}</Text>
    </View>
  );
};
