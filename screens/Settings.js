import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import GoBack from "../assets/images/Settings/Back.svg";
import RightIcon from "../assets/images/Settings/IconRight.svg";

const Settings = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View className="bg-[#E5B46B] flex-1 px-3">
      <View className="py-6 flex-row items-center space-x-5 border-b border-[#6E451C]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GoBack />
        </TouchableOpacity>
        <Text className="text-[#3A1803] font-bold text-lg">Settings</Text>
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">App Settings</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">Quote Settings</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">Payment Methods</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">Account Settings</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">Notification Settings</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">App Settings</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">Advanced Settings</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">Language Settings</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">About App</Text>
        <RightIcon />
      </View>
      <View className="py-4 flex-row items-center justify-between  border-b border-[#6E451C] ">
        <Text className="font-bold  text-[#3A1803]">Logout</Text>
        <RightIcon />
      </View>
    </View>
  );
};

export default Settings;
