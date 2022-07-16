import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DotsHorizontalIcon } from "react-native-heroicons/solid";
import { millisecondsToMinutes } from "../../lib/tims";
import * as Animatable from "react-native-animatable";

const SongCard = ({ track, setplaying, delay }) => {
  return (
    <Animatable.View
      iterationCount={1}
      animation="fadeInRight"
      className="flex-row items-center  pb-8"
      delay={delay}
    >
      {/* details */}
      <TouchableOpacity
        onPress={() => setplaying(track)}
        className=" flex-row items-center  flex-1  space-x-4"
      >
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
      </TouchableOpacity>

      {/* More Icons */}
      <DotsHorizontalIcon size={25} color="white" />
    </Animatable.View>
  );
};

export default SongCard;
