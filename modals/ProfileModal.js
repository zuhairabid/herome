import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import StateBg from "../assets/images/Modal/StateBG.png";
import Close from "../assets/images/Modal/NotDone.svg";
import { ImageBackground } from "react-native";
import ProfilePic from "../assets/images/Modal/Profile/Profile.png";
import PurchaseButton from "../assets/images/Modal/Profile/PurchaseButton.svg";
import Edit from "../assets/images/Modal/Profile/Edit.svg";
import coin from "../assets/images/UserStats/coin.png";
import { useNavigation } from "@react-navigation/native";

const ProfileModal = ({ isModalVisible, setIsModalVisible }) => {
  const navigation = useNavigation();
  return (
    <View className="border border-black rounded-[20px] w-[90%] h-[500px] relative">
      <View className="border border-yellow-400 rounded-[20px]">
        <View className="border border-black rounded-[20px] w-full bg-[#6E451C] flex-row items-center justify-center ">
          <View className="w-full h-[500px] flex items-center justify-center px-[25px]">
            {/* <Image source={StateBg} className="absolute top-[-20px] " /> */}
            <ImageBackground
              source={StateBg}
              className="absolute top-[-20px] w-[250px] h-[70px] flex items-center justify-center"
            >
              <Text className="text-white font-bold text-2xl">Profile</Text>
            </ImageBackground>
            <View className="flex-row items-center w-full  mb-10">
              <View>
                <Image source={ProfilePic} />
              </View>
              <View className="flex-grow ml-5">
                <Text className="font-bold text-yellow-400 text-lg">
                  Jon Snow
                </Text>
                <Text className="text-white">Level:67</Text>
                <View className="flex-row space-x-2 items-center">
                  <Image source={coin} />
                  <Text className="text-white">34.8M</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditProfile");
                  setIsModalVisible(!isModalVisible);
                }}
              >
                <Edit />
              </TouchableOpacity>
            </View>
            <View className="w-full border-b border-t border-[#3A1803] py-10 space-y-5 mb-10">
              <Text className="text-white text-xs">
                Position in Leaderboard:1st
              </Text>
              <Text className="text-white text-xs">
                Total Tasks Done:200/231
              </Text>
              <Text className="text-white text-xs">
                Total Rewards Acheived:56/68
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PurchaseMoreCoin");
                setIsModalVisible(!isModalVisible);
              }}
            >
              <PurchaseButton />
            </TouchableOpacity>
            <TouchableOpacity
              className="absolute bottom-[-20px]"
              onPress={() => setIsModalVisible(!isModalVisible)}
            >
              <Close />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileModal;
