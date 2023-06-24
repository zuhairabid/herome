import { View, Text, ScrollView } from "react-native";
import React from "react";
import AddTask from "../assets/images/Tasks/AddTask.svg";
import Calendar from "../assets/images/Tasks/Calendar.svg";
import History from "../assets/images/Tasks/History.svg";
import TasksTasks from "./Tasks.Tasks";
import { ListTask } from "../DummyData";

const Tasks = () => {
  const data = ListTask;
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between py-3 mx-5">
        <Text className="text-xl font-bold text-[#3A1803] ">
          Today's Task:4
        </Text>

        <View className="flex-row space-x-5">
          <AddTask />
          <Calendar />
          <History />
        </View>
      </View>
      <View className="flex-1">
        <ScrollView>
          {data.map((item) => (
            <View className="flex-row border-t border-[#6E451C] py-5 border-collapse">
              <View className="w-[20%] items-center mt-5">
                <Text className="text-[#3A1803] text-4xl font-bold">
                  {item.date}
                </Text>
                <Text className="text-[#3A1803]">{item.month}</Text>
              </View>
              <View className="w-[80%]">
                {item.tasks.map((item, i) => (
                  <TasksTasks
                    id={item.id}
                    key={i}
                    Title={item.Title}
                    description={item.description}
                    Time={item.Time}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Tasks;
