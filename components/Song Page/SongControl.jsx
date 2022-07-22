import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
} from "react-native-heroicons/solid";
import spotifyApi from "../../lib/spotify";

const SongControl = ({ isPlaying, playSong }) => {
  return (
    <View className="flex-row w-full mt-6 justify-between px-4 items-center">
      {/* Shuffle icon */}
      <Image source={require("../../assets/Shuffle_icon.png")} />
      <TouchableOpacity onPress={() => spotifyApi.skipToPrevious()}>
        <RewindIcon size={40} color="#fff" className="button" />
      </TouchableOpacity>
      {isPlaying ? (
        <PauseIcon size={40} onPress={playSong} color="#fff" />
      ) : (
        <PlayIcon onPress={playSong} size={40} color="#fff" />
      )}
      <TouchableOpacity onPress={() => spotifyApi.skipToNext()}>
        <FastForwardIcon color="#fff" className="button" size={40} />
      </TouchableOpacity>
      {/* Repeat */}
      <Image source={require("../../assets/Repeat_icon.png")} />
    </View>
  );
};

export default SongControl;
