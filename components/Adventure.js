import React, { useState } from "react";
import { ScrollView, View, Image, ImageBackground, Text } from "react-native";
// import {
//   ButtonWrapper,
//   CurrentAvatar,
//   Badge1

// } from "../../../components/CommonComponent";

// import images from "../../../utills/Images";
// import SVGImages from "../../../utills/SVGImages";
// import styles from "./styles";
import AdventureMap from "../assets/images/Adventure/adventure_map_transparent.png";
import LevelCircle from "../assets/images/Adventure/Level.svg";
import YourLevel from "../assets/images/Adventure/Avatar.png";
import LevelPointer from "../assets/images/Adventure/LevelPointer.png";
export default function Adventure(props) {
  // const [profileVisible, setProfileVisible] = useState(false);
  // const toggleProfile = () => setProfileVisible(!profileVisible);
  const [scrollRef, setScrollRef] = useState(null);
  // const [LevelRewards, setLevelRewards] = useState(false);
  // const [level, setLevel] = useState("0");
  // const ToggleLevel = () => setLevelRewards(!LevelRewards);

  // const CommonPress = (a) => {
  //   setLevel(a);
  //   ToggleLevel();
  // };
  return (
    <View className="flex-1">
      <View
        style={{ flex: 1, alignItems: "center", backgroundColor: "#E5B46B" }}
      >
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          ref={(ref) => setScrollRef(ref)}
          onContentSizeChange={() => scrollRef.scrollToEnd()}
        >
          {/* Background Map ⬇️ */}
          <ImageBackground
            source={AdventureMap}
            style={{
              width: 1124 / 3,
              height: 4863 / 3,
            }}
            resizeMode="cover"
          >
            {/* Your Level ⬇️ */}
            <View
              className="absolute w-[40px] h-[40px] top-[1410px]
                left-[35px]"
            >
              <View className=" w-[40px] h-[40px] flex items-center justify-center absolute top-0 left-0">
                <Image source={LevelPointer} className="m-2 w-[90%] h-full " />
              </View>
              <View className="w-[40px] h-[37px] flex items-center justify-center absolute top-0 left-0">
                <Image
                  source={YourLevel}
                  className="absolute w-[80%] h-[90%] mb-[1px]"
                />
              </View>
            </View>

            {/* Levels ⬇️ */}
            <View
              style={{
                top: 1450,
                left: 35,
                maxWidth: 36,
              }}
            >
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">1</Text>
              </View>
            </View>

            <View style={{ top: 1475, left: 200, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">2</Text>
              </View>
            </View>
            <View style={{ top: 1390, left: 320, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">3</Text>
              </View>
            </View>
            <View style={{ top: 1240, left: 320, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">4</Text>
              </View>
            </View>
            <View style={{ top: 1210, left: 160, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">5</Text>
              </View>
            </View>
            <View style={{ top: 1110, left: 25, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">6</Text>
              </View>
            </View>
            <View style={{ top: 900, left: 40, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">7</Text>
              </View>
            </View>
            <View style={{ top: 900, left: 200, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">8</Text>
              </View>
            </View>
            <View style={{ top: 820, left: 300, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">9</Text>
              </View>
            </View>
            <View style={{ top: 620, left: 315, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">10</Text>
              </View>
            </View>
            <View style={{ top: 580, left: 50, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">11</Text>
              </View>
            </View>
            <View style={{ top: 450, left: 10, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">12</Text>
              </View>
            </View>
            <View style={{ top: 330, left: 40, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">13</Text>
              </View>
            </View>
            <View style={{ top: 345, left: 220, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">14</Text>
              </View>
            </View>
            <View style={{ top: 250, left: 330, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">15</Text>
              </View>
            </View>
            <View style={{ top: 110, left: 300, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">16</Text>
              </View>
            </View>
            <View style={{ top: 80, left: 120, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">17</Text>
              </View>
            </View>
            <View style={{ top: -30, left: 20, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">18</Text>
              </View>
            </View>
            <View style={{ top: -250, left: 60, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">19</Text>
              </View>
            </View>
            <View style={{ top: -270, left: 175, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">20</Text>
              </View>
            </View>
            <View style={{ top: -320, left: 315, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">21</Text>
              </View>
            </View>
            <View style={{ top: -500, left: 325, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">22</Text>
              </View>
            </View>
            <View style={{ top: -530, left: 200, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">23</Text>
              </View>
            </View>
            <View style={{ top: -560, left: 100, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">24</Text>
              </View>
            </View>
            <View style={{ top: -740, left: 60, maxWidth: 36 }}>
              <LevelCircle />
              <View className="absolute top-0 left-0 right-0 bottom-0 w-[36px] h-[36px] b flex items-center justify-center">
                <Text className=" font-bold text-white">25</Text>
              </View>
            </View>
          </ImageBackground>
          {/* <Badge1 /> */}

          {/*<Badge1
            PostionStyle={{ bottom: 78, right: 160 }}
            level={"2"}
            onPress={() => CommonPress("2")}
          />
          <Badge1
            PostionStyle={{ bottom: 125, right: 5 }}
            level={"3"}
            onPress={() => CommonPress("3")}
          />
          <Badge1
            PostionStyle={{ bottom: 238, right: 35 }}
            level={"4"}
            onPress={() => CommonPress("4")}
          />
          <Badge1
            PostionStyle={{ bottom: 234, left: 90 }}
            level={"5"}
            onPress={() => CommonPress("5")}
          />
          <Badge1
            PostionStyle={{ bottom: 330, left: 8 }}
            level={"6"}
            onPress={() => CommonPress("6")}
          />
          <Badge1
            PostionStyle={{ bottom: 460, left: 25 }}
            level={"7"}
            onPress={() => CommonPress("7")}
          />
          <Badge1
            PostionStyle={{ bottom: 460, left: 164 }}
            level={"8"}
            onPress={() => CommonPress("8")}
          />
          <Badge1
            PostionStyle={{ bottom: 500, right: 3 }}
            level={"9"}
            onPress={() => CommonPress("9")}
          />
          <Badge1
            PostionStyle={{ bottom: 630, right: 6 }}
            level={"10"}
            onPress={() => CommonPress("10")}
          />
          <Badge1
            PostionStyle={{ bottom: 635, right: 114 }}
            level={"11"}
            onPress={() => CommonPress("11")}
          />
          <Badge1
            PostionStyle={{ bottom: 645, left: 25 }}
            level={"12"}
            onPress={() => CommonPress("12")}
          />
          <Badge1
            PostionStyle={{ bottom: 760, left: 0 }}
            level={"13"}
            onPress={() => CommonPress("13")}
          />
          <Badge1
            PostionStyle={{ bottom: 804, left: 80 }}
            level={"14"}
            onPress={() => CommonPress("14")}
          />
          <Badge1
            PostionStyle={{ bottom: 774, right: 100 }}
            level={"15"}
            onPress={() => CommonPress("15")}
          />
          <Badge1
            PostionStyle={{ top: 760, right: 0 }}
            level={"16"}
            onPress={() => CommonPress("16")}
          />
          <Badge1
            PostionStyle={{ top: 650, right: 20 }}
            level={"17"}
            onPress={() => CommonPress("17")}
          />
          <Badge1
            PostionStyle={{ top: 648, right: 160 }}
            level={"18"}
            onPress={() => CommonPress("18")}
          />
          <Badge1
            PostionStyle={{ top: 600, left: 8 }}
            level={"19"}
            onPress={() => CommonPress("19")}
          />
          <Badge1
            PostionStyle={{ top: 430, left: 20 }}
            level={"20"}
            onPress={() => CommonPress("20")}
          />
          <Badge1
            PostionStyle={{ top: 430, right: 150 }}
            level={"21"}
            onPress={() => CommonPress("21")}
          />
          <Badge1
            PostionStyle={{ top: 380, right: 0 }}
            level={"22"}
            onPress={() => CommonPress("22")}
          />
          <Badge1
            PostionStyle={{ top: 230, right: 10 }}
            level={"23"}
            onPress={() => CommonPress("23")}
          />
          <Badge1
            PostionStyle={{ top: 230, right: 100 }}
            level={"24"}
            onPress={() => CommonPress("24")}
          />
          <Badge1
            PostionStyle={{ top: 265, left: 80 }}
            level={"25"}
            onPress={() => CommonPress("25")}
          />
          <Badge1
            PostionStyle={{ top: 140, left: 35 }}
            level={"26"}
            onPress={() => CommonPress("26")}
          /> */}
          {/* <CurrentAvatar
            Avatar={images.AvatarSmall}
            PostionView={{ bottom: 505, left: 16 }}
          /> */}
        </ScrollView>
        {/* <ButtonWrapper
          containerStyle={styles.buttonReward}
          onPress={() => props.navigation.navigate("RewardsList")}
        >
          <SVGImages.RewardList />
        </ButtonWrapper>

        <ButtonWrapper
          containerStyle={styles.buttonQuest}
          onPress={() => {
            props.navigation.navigate("QuestTask");
          }}
        >
          <SVGImages.QuestTask />
        </ButtonWrapper> */}
      </View>
    </View>
  );
}
