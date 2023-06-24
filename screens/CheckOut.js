import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../assets/images/Settings/Back.svg";
import CoinBG from "../assets/images/PurchaseMoreCoin/CoinBG.png";
import { Image } from "react-native";

const CheckOut = () => {
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
        <Text className="text-[#3A1803] font-bold text-lg">CheckOut</Text>
      </View>
      <View>
        <View className="flex-row items-center py-5">
          <Image source={CoinBG} className="mr-5 w-[70px] h-[70px]" />
          <Text className="flex-grow">5,000 Coins</Text>
          <Text className="text-lg text-[#6E451C] font-bold">$8.99</Text>
        </View>
        <View className="flex-row justify-between border-t border-[#3A1803] py-3">
          <Text className="text-lg text-[#6E451C] font-bold">Total:</Text>
          <Text className="text-lg text-[#6E451C] font-bold">$8.99</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckOut;
