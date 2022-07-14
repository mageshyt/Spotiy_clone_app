import { View, Text, Image } from "react-native";
import React from "react";
import { DotsHorizontalIcon } from "react-native-heroicons/solid";

const SongCard = ({ track }) => {
  return (
    <View className="flex-row items-center justify-between pb-8">
      {/* details */}
      <View className=" flex-row items-center space-x-4">
        {/* Image */}
        <Image
          source={{ url: track.album.images[0].url }}
          className="h-[62px] w-[62px]  rounded-xl"
        />
        {/* song details */}
        <View className="">
          <Text className="text-white truncate font-semibold text-md">
            {track?.name}
          </Text>
          <Text className="text-gray-500">{track?.artists[0].name}</Text>
        </View>
      </View>
      {/* More Icons */}
      <DotsHorizontalIcon size={25} color="white" />
    </View>
  );
};

export default SongCard;
