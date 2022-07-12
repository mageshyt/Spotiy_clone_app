import { View, Text, TextInput } from "react-native";
import React from "react";

const CustomInputComponent = ({ Icon, placeholder, title }) => {
  return (
    <View className="px-6 mb-3 space-y-3">
      <Text className="text-md text-gray-200  font-medium">{title}</Text>
      {/* Input*/}
      <View className="p-4 rounded-lg flex-row space-x-2  bg-[#2D2D2D]">
        <Icon color="white" />
        <TextInput
          keyboardType="default"
          placeholder={placeholder}
          className="  text-white outline-none border-none "
          placeholderTextColor="#fff"
        />
      </View>
    </View>
  );
};

export default CustomInputComponent;
