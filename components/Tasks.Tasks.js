import { View, Text } from "react-native";
import React from "react";
import NotDone from "../assets/images/Tasks/Tasks/NotDone.svg";
import Done from "../assets/images/Tasks/Tasks/Done.svg";

const TasksTasks = ({ id, Title, description, Time }) => {
  return (
    <View className="items-center my-2">
      <View className="border border-black rounded-full w-[95%] h-[75px] relative">
        <View className="border border-yellow-400 rounded-full">
          <View className="border border-black rounded-full w-full bg-[#6E451C] flex-row items-center justify-center ">
            <View className="w-full h-[70px] flex-row items-center justify-center px-10 py-4">
              <View>
                <View className="flex-row items-center">
                  <Text className="flex-grow font-bold text-white">
                    {Title.length > 15 ? Title.slice(0, 15) + "..." : Title}
                  </Text>
                  <Text className="text-white text-[10px]">{Time}</Text>
                </View>
                <View>
                  <Text className="overflow-hidden text-[13px]">
                    {description.length > 50
                      ? description.slice(0, 50) + "..."
                      : description}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center justify-center space-x-2">
                <Done />
                <NotDone />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TasksTasks;
