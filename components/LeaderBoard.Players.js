import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import coin from "../assets/images/UserStats/coin.png";
const LeaderBoardPlayers = ({ id, Name, Picture, position, Level, coins }) => {
  return (
    <View className="w-full items-center my-2">
      <View className="border border-black rounded-full w-[90%] h-[75px] relative">
        <View className="border border-yellow-400 rounded-full">
          <View className="border border-black rounded-full w-full bg-[#6E451C] flex-row items-center justify-center ">
            <View className="w-full h-[70px] flex-row items-center  px-[25px] space-x-5">
              <View>
                <Image source={position} />
              </View>
              <View>
                <Image source={Picture} />
              </View>
              <View className=" w-[55%] py-3">
                <View>
                  <Text className="text-[#F3D73E] font-bold text-lg">
                    {Name.length > 15 ? Name.slice(0, 15) + "..." : Name}
                  </Text>
                </View>
                <View className="flex-row items-center flex-grow ">
                  <Text className="flex-grow text-white">Level: {Level}</Text>
                  <View className="flex-row items-center  space-x-2">
                    <Image source={coin} />
                    <Text className="text-white">{coins}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default LeaderBoardPlayers;
