import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../assets/images/Settings/Back.svg";
import ProfilePic from "../assets/images/EditProfile/Avatar.png";
import UpdateProfile from "../assets/images/EditProfile/UpdateProfile.png";
import { Image } from "react-native";
import { TextInput } from "react-native";

const EditProfile = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View className="bg-[#E5B46B] flex-1 px-3 ">
      <View className="py-6 flex-row items-center space-x-5 border-b border-[#6E451C]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GoBack />
        </TouchableOpacity>
        <Text className="text-[#3A1803] font-bold text-lg">Edit Profile</Text>
      </View>
      <View className="flex items-center justify-center py-10">
        <Image source={ProfilePic} className="w-[140px] h-[140px]" />
        <Text className="mt-5 text-[#6E451C] font-bold">
          Change avatar selfie
        </Text>
      </View>
      <View className="w-full flex items-center">
        <View className="w-full mb-5 ">
          <Text className="mb-2">Full Name</Text>
          <TextInput
            placeholder="Enter your Full Name"
            className="bg-[#f4d665] border border-[#6e451c] h-[50px] rounded-[30px] p-2"
          />
        </View>
        <View className="w-full mb-5">
          <Text className="mb-2">Email</Text>
          <TextInput
            placeholder="Enter your Email"
            className="bg-[#f4d665] border border-[#6e451c] h-[50px] rounded-[30px] p-2"
          />
        </View>
        <View className="w-full mb-5">
          <Text className="mb-2">Password</Text>
          <TextInput
            placeholder="Enter your Password"
            className="bg-[#f4d665] border border-[#6e451c] h-[50px] rounded-[30px] p-2"
          />
        </View>
      </View>
      <TouchableOpacity className="absolute bottom-10 right-[20%]">
        <Image source={UpdateProfile} className="w-[241px] h-[50px] mx-auto " />
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
