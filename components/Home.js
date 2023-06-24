import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import { HomeData } from "../DummyData";
import React from "react";
import HomeTask from "./Home.Task";

const Home = () => {
  const data = HomeData;

  const renderItem = ({ item }) => (
    <HomeTask
      title={item.Title}
      date={item.CreatedAt}
      description={item.description}
    />
  );

  return (
    <View className="flex-1 ">
      <Text className="text-center text-white font-bold text-3xl my-5">
        Welcome Back!
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* <Text>hello</Text> */}
    </View>
  );
};

export default Home;
