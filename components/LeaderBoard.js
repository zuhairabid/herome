import { View, Text, FlatList } from "react-native";
import React from "react";
// import { LeaderBoardData } from "../DummyData";
import LeaderBoardPlayers from "./LeaderBoard.Players";
import { LeaderBoardData } from "../DummyData";

const LeaderBoard = () => {
  const data = LeaderBoardData;
  console.log(data.length);

  const renderItem = ({ item }) => (
    <LeaderBoardPlayers
      id={item.id}
      Name={item.Name}
      Picture={item.Picture}
      position={item.position}
      Level={item.Level}
      coins={item.coins}
    />
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default LeaderBoard;
