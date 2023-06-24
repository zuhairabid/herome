import { View, Text, ImageBackground } from "react-native";
import React, { useLayoutEffect } from "react";
import NavigationFooter from "../components/NavigationFooter";
import UserStatsHeader from "../components/UserStatsHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../components/Home";
import HomeBG from "../assets/images/Home/BG.png";
import { HeroMeState } from "../HeroMeContext";
import Tasks from "../components/Tasks";
import Adventure from "../components/Adventure";
import Hideout from "../components/Hideout";
import LeaderBoard from "../components/LeaderBoard";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
  const navigation = useNavigation();
  const { menuScreen, setMenuScreen } = HeroMeState();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className=" flex-1 relative ">
      <View className="h-[11%]  ">
        <UserStatsHeader />
      </View>
      <View
        className={`h-screen w-screen absolute z-[-10] top-0 left-0 right-0 bottom-0 ${
          [1, 2, 4].includes(menuScreen) ? "bg-[#E5B46B]" : ""
        }`}
      >
        {[0, 3].includes(menuScreen) ? (
          <ImageBackground
            source={HomeBG}
            style={{ flex: 1 }}
          ></ImageBackground>
        ) : (
          ""
        )}
      </View>
      <View className="h-[78%]">
        {menuScreen == 0 ? (
          <Home />
        ) : menuScreen == 1 ? (
          <Tasks />
        ) : menuScreen == 2 ? (
          <Adventure />
        ) : menuScreen == 3 ? (
          <Hideout />
        ) : menuScreen == 4 ? (
          <LeaderBoard />
        ) : (
          <Home />
        )}
      </View>
      <View className="h-[11%] ">
        <NavigationFooter />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
