import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import spotifyApi from "../lib/spotify";
import { LinearGradient } from "expo-linear-gradient";
import {
  BackspaceIcon,
  DotsHorizontalIcon,
  PlayIcon,
} from "react-native-heroicons/solid";
import SongCard from "../components/playlist songs/songsCard";
import InfoCard from "../components/playlist songs/InfoCard";
import {
  ArrowCircleLeftIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";
const PlaylistScreen = () => {
  const {
    params: { playlist },
  } = useRoute();
  const navigation = useNavigation();
  const [songs, setSongs] = React.useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = spotifyApi
        .getPlaylistTracks(playlist.id, {
          limit: 50,
          offset: 0,
        })
        .then((response) => {
          setSongs(response.items);
        })
        .catch((error) => {
          console.log(error);
        });
      //   spotifyApi.play()
    };
    fetch();
  }, []);

  const { name, owner, images, tracks } = playlist;

  return (
    <View className=" bg-[#121212] flex-1">
      <LinearGradient
        colors={["#121212", "black"]}
        className=" items-center flex-1 mt-10  relative justify-around"
      >
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-0 ml-4 mt-4"
        >
          <ArrowLeftIcon color="white" size={25} />
        </TouchableOpacity>
        {/* top session with image  */}
        <View className="mt-10 flex-row space-x-4">
          <Image
            source={{ url: images[0]?.url }}
            className="h-[120px] rounded-xl w-[120px]"
          />
          <InfoCard total={tracks?.total} name={name} />
        </View>
        {/* split */}
        <View className=" border-b border-white w-[90%] mt-4" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          className="w-full p-4"
        >
          {songs?.map((item, idx) => {
            return <SongCard track={item.track} key={idx} />;
          })}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default PlaylistScreen;
