import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { ChevronDownIcon, HeartIcon } from "react-native-heroicons/outline";
const SongScreen = () => {
  const {
    params: { song },
  } = useRoute();
  const navigation = useNavigation();
  console.log(song?.album?.name);
  const SafeArea = Animatable.createAnimatableComponent(SafeAreaView);
  const ImageAnimation = Animatable.createAnimatableComponent(Image);

  const TextAnimation = Animatable.createAnimatableComponent(Text);

  return (
    <Animatable.View
      animation={"slideInUp"}
      easing="ease-in-out"
      className="bg-black flex-1 relative   "
    >
      <View className=" flex-row items-center  absolute top-14  ml-4 ">
        <ChevronDownIcon
          onPress={() => navigation.goBack()}
          color="white"
          size={30}
        />
        <Text className="text-white text-center flex-1 text-sm">
          {song?.album?.name}
        </Text>
      </View>
      <View className=" items-center mt-[130px] flex-1 ">
        <ImageAnimation
          animation={"zoomIn"}
          delay={200}
          source={{ uri: song.album?.images[0]?.url }}
          className="h-[250px] w-[250px] rounded-xl"
        />
        {/* name */}
        <Animatable.View
          delay={400}
          animation={"slideInLeft"}
          className=" flex-row items-center pr-2 "
        >
          <View className="w-full flex-1 px-4  mr space-y-2 mt-6  ">
            <TextAnimation
              delay={600}
              animation={"fadeInLeft"}
              className="text-white  font-bold text-xl "
            >
              {song.name}
            </TextAnimation>
            {/* artist */}
            <TextAnimation
              animation={"fadeInDown"}
              delay={800}
              className="text-gray-400 font-bold text-sm "
            >
              {song.artists.map((artist) => artist.name).join(", ")}
            </TextAnimation>
          </View>
          {/* Heart */}
          <HeartIcon color="gray" size={30} />
        </Animatable.View>
      </View>
    </Animatable.View>
  );
};

export default SongScreen;
