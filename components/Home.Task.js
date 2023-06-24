import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Circle from "../assets/images/HomeTask/Circle.png";
import React from "react";

const HomeTask = ({ title, date, description }) => {
  return (
    <View className="w-full items-center my-2">
      <View className="border border-black rounded-full w-[90%] h-[75px] relative">
        <View className="border border-yellow-400 rounded-full">
          <View className="border border-black rounded-full w-full bg-[#6E451C] flex-row items-center justify-center ">
            <View className="w-full h-[70px] flex-row items-center justify-center px-[25px]">
              <View className="mr-2">
                <Image source={Circle} className="w-10 h-10" />
              </View>
              <View className="p-1">
                <View className="flex-row items-center">
                  <Text className="flex-grow text-white font-bold text-lg">
                    {title.length > 18 ? title.slice(0, 18) + "..." : title}
                  </Text>
                  <Text className="text-white text-[11px]">{date}</Text>
                </View>
                <Text className="text-white text-[11px]">
                  {description.length > 60
                    ? description.slice(0, 60) + "..."
                    : description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeTask;
