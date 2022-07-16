import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { SpotifyContext } from "../../context/SpotifyContext";
import { WifiIcon } from "react-native-heroicons/outline";
import { PauseIcon, PlayIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const ActiveSong = ({ playing }) => {
  const { device } = useContext(SpotifyContext);
  const image = playing?.album?.images[0]?.url;
  const songName = playing?.name.split(" ").slice(0, 3).join(" ");

  const [playingState, setPlayingState] = useState(true);
  const navigation = useNavigation();

  return (
    <Animatable.View
      animation="slideInUp"
      className="absolute bottom-5  h-[65px] rounded-xl p-2  bg-[#121212] w-full "
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("song", { song: playing })}
        className=" flex-row justify-between  items-center space-x-2"
      >
        {/* image */}
        <Animatable.Image
          animation="zoomIn"
          iterationCount={1}
          source={{ url: image }}
          className="h-[50px] w-[50px] rounded-xl"
          duration={1100}
        />
        <View className=" space-y-2 ">
          <Animatable.Text
            animation="zoomIn"
            duration={1200}
            className="text-white  font-semibold text-sm"
          >
            {songName} - {playing?.artists[0].name}
          </Animatable.Text>
          {/* Devices */}
          <View className="flex-row space-x-2">
            <WifiIcon color="#1ED760" size={18} />
            <Text className="text-white text-xs">
              {device?.devices[1]?.name}
            </Text>
          </View>
        </View>
        {/* Play pause */}
        <View>
          {playingState ? (
            <PauseIcon
              onPress={() => setPlayingState(false)}
              color="white"
              size={35}
            />
          ) : (
            <PlayIcon
              onPress={() => setPlayingState(true)}
              color="white"
              size={35}
            />
          )}
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default ActiveSong;
