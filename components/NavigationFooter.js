import Home from "../assets/images/navigationfooter/Home.svg";
import HomeYellow from "../assets/images/navigationfooter/HomeYellow.svg";
import TaskLogo from "../assets/images/navigationfooter/TaskLogo.svg";
import TaskLogoYellow from "../assets/images/navigationfooter/TaskLogoYellow.svg";
import AdventureLogo from "../assets/images/navigationfooter/AdventureLogo.svg";
import AdventureLogoYellow from "../assets/images/navigationfooter/AdventureYellow.svg";
import HideoutLogo from "../assets/images/navigationfooter/HideoutLogo.svg";
import HideoutLogoYellow from "../assets/images/navigationfooter/HideoutYellow.svg";
import LeaderboardLogo from "../assets/images/navigationfooter/LeaderboardLogo.svg";
import LeaderboardLogoYellow from "../assets/images/navigationfooter/LeaderboardYellow.svg";
import * as Svg from "react-native-svg";
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Animated, Button } from "react-native";
import { HeroMeState } from "../HeroMeContext";
// import { HeroMeContext } from "../HeroMeContext";
// import { SvgUri } from "react-native-svg-uri";

const NavigationFooter = () => {
  const { menuScreen, setMenuScreen } = HeroMeState();
  // const [selectedItem, setSelectedItem] = useState(0);
  const [zoomAnimation] = useState(new Animated.Value(1));

  const handleItemClick = (index) => {
    setMenuScreen(index);

    // Zoom in animation
    Animated.spring(zoomAnimation, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start(() => {
      // Reset zoom after animation
      Animated.spring(zoomAnimation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View
      style={{
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderColor: "black",
        borderWidth: 2,

        flex: 1,
      }}
    >
      <View
        // className="border-lightYellow "
        style={{
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          borderColor: "yellow",
          borderWidth: 2,

          flex: 1,
        }}
      >
        <View
          className="flex-row justify-around border border-black bg-[#6E451C]"
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderColor: "black",
            borderWidth: 2,

            flex: 1,
          }}
        >
          {menuItems.map((item, index) =>
            menuScreen == index ? (
              <TouchableOpacity key={index}>
                {item.selectedImage}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={index}
                onPress={() => handleItemClick(index)}
              >
                <View>{item.unselectedImage}</View>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </View>
  );
};

// Sample menu items with selected and unselected images

const menuItems = [
  {
    unselectedImage: <Home />,
    selectedImage: <HomeYellow />,
  },
  {
    unselectedImage: <TaskLogo />,
    selectedImage: <TaskLogoYellow />,
  },
  {
    unselectedImage: <AdventureLogo />,
    selectedImage: <AdventureLogoYellow />,
  },
  {
    unselectedImage: <HideoutLogo />,
    selectedImage: <HideoutLogoYellow />,
  },
  {
    unselectedImage: <LeaderboardLogo />,
    selectedImage: <LeaderboardLogoYellow />,
  },
];

export default NavigationFooter;

// import { View, Text } from "react-native";
// import React from "react";

// const NavigationFooter = () => {
//   return (
//     <View>
//       <Home />
//     </View>
//   );
// };

// export default NavigationFooter;
