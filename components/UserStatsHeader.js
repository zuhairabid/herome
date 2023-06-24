import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import userAvatar from "../assets/images/UserStats/avatarSmall.png";
import coin from "../assets/images/UserStats/coin.png";
import settingLogo from "../assets/images/UserStats/Settings.png";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { Button } from "react-native";
import ProfileModal from "../modals/ProfileModal";

const UserStatsHeader = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View className="flex-1   items-center justify-end">
      {/* Profile Modal */}
      <Modal isVisible={isModalVisible}>
        <View className="flex-1 items-center justify-center w-full">
          <ProfileModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </View>
      </Modal>
      {/* Profile Modal */}
      <View className="border border-black rounded-full w-full h-[75px] relative ">
        <View className="border border-yellow-400 rounded-full">
          <View className="border border-black rounded-full w-full bg-[#6E451C] flex-row items-center justify-center ">
            <View className="w-full h-[70px] flex-row items-center justify-center px-3">
              <TouchableOpacity
                className="mr-3"
                onPress={() => setIsModalVisible(!isModalVisible)}
              >
                <Image source={userAvatar} />
              </TouchableOpacity>
              <View className="flex-grow ">
                <View>
                  <Text className="text-yellow-200">Zuhair Abid</Text>
                </View>
                <View>
                  <Text className="text-white">Level: 1</Text>
                </View>
                <View className="flex-row items-center  space-x-2">
                  <Image source={coin} />
                  <Text className="text-white">0</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Image source={settingLogo} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View className="h-[78px] w-[35%]  absolute right-16 border-black border rounded-[20px] items-center justify-center">
        <View className="w-full h-full border border-yellow-400 rounded-[20px]">
          <View className="overflow-hidden w-full h-full  rounded-[20px] border  border-black">
            <View className="w-full h-[30%] bg-[#472E1C]">
              <Text className="text-center font-bold text-white">
                Task Summary
              </Text>
            </View>
            <View className="w-full h-[70%] bg-[#554434] items-center justify-center">
              <Text className="text-center text-white text-[13px]">
                Completed : 79/102
              </Text>
              <Text className="text-center text-white text-[13px]">
                Upcoming : 15
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserStatsHeader;
