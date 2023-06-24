import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../assets/images/Settings/Back.svg";
import CoinBG from "../assets/images/PurchaseMoreCoin/CoinBG.png";
import { Image } from "react-native";

const PurchaseMoreCoin = () => {
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
        <Text className="text-[#3A1803] font-bold text-lg">
          Purchase More Coins
        </Text>
      </View>
      <View className="flex-row flex-wrap py-5">
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckOut")}
          className="items-center w-[100px]"
        >
          <Image source={CoinBG} />
          <Text className="text-[#6E451C] font-bold">2,000 Coins</Text>
          <Text className="text-[#6E451C] font-bold">$4.99</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckOut")}
          className="items-center w-[100px]"
        >
          <Image source={CoinBG} />
          <Text className="text-[#6E451C] font-bold">5,000 Coins</Text>
          <Text className="text-[#6E451C] font-bold">$8.99</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CheckOut")}
          className="items-center w-[100px]"
        >
          <Image source={CoinBG} />
          <Text className="text-[#6E451C] font-bold">10,000 Coins</Text>
          <Text className="text-[#6E451C] font-bold">$14.99</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PurchaseMoreCoin;
