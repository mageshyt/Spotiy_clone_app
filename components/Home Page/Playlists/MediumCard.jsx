import React from "react";
import { Image, ScrollView, View, Text } from "react-native";

const MediumCard = ({ playList_title, playList }) => {
  return (
    <View className=" space-y-3 pb-3 ">
      <Text className="text-3xl font-bold text-gray-300">{playList_title}</Text>
      <ScrollView horizontal className="space-x-3 ">
        {playList?.map((item, index) => {
          let image = item?.images[0]?.url;
          return (
            <View
              key={index}
              className=" space-y-2 justify-center items-center w-[120px] rounded-xl "
            >
              <Image
                source={{ uri: image }}
                className="h-[120px] w-[120px] rounded-xl "
              />
              {/* playlist details */}
              <View className=" items-start ">
                <Text className="text-gray-300 text-left  font-bold ">
                  {item?.name?.split(" ")?.slice(0, 2)?.join(" ")}
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

export default MediumCard;
