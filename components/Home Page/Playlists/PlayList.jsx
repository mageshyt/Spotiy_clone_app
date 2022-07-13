import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const PlayList = ({ playList_title, playlist }) => {
  return (
    <View className="  space-y-3 pb-2 ">
      <Text className="text-3xl font-bold text-gray-300">{playList_title}</Text>
      <ScrollView horizontal>
        {playlist?.map((item, index) => {
          let image;
          if (item["icons"]) {
            image = item["icons"][0]["url"];
          } else {
            image = item?.images[0]?.url;
          }
          return (
            <View
              key={index}
              className=" space-y-2 justify-center items-center w-[100px] rounded-xl "
            >
              <Image
                source={{ uri: image }}
                className="h-[90px] w-20 rounded-xl "
              />
              {/* playlist details */}
              <View className=" items-start ">
                <Text className="text-gray-300 text-left  font-bold ">
                  {item?.name}
                </Text>
                <Text className="text-sky-400 text-left  font-semibold">
                  {item?.owner?.display_name}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PlayList;
