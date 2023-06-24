import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeBG from "../assets/images/Home/BG.png";
import HomeLogo from "../assets/images/Login/HomeLogo.png";
import RegisterCard from "../assets/images/Login/RegisterCard.png";
import Button from "../assets/images/Login/Button.png";
import { FontAwesome } from "@expo/vector-icons";
// import { CheckBox } from "@rneui/themed";
import { CheckBox } from "@rneui/base";
const RegisterScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={HomeBG}
        className="flex-1 items-center justify-center"
      >
        <View className="flex items-center justify-center w-full ">
          <Image source={HomeLogo} className="w-[200px] h-[100px] mb-10" />
          <ImageBackground
            source={RegisterCard}
            className="items-center w-[330px] h-[430px] p-5 "
          >
            <View className="mb-3">
              <Text className="text-[#6E451C] my-2 text-center text-4xl font-bold">
                Register
              </Text>
              <Text className="text-[#6E451C] text-center font-bold">
                Create An Account{" "}
              </Text>
            </View>
            <View className="w-[270px] ">
              <Text className="mb-2">Full Name</Text>
              <TextInput
                placeholder="Enter your Full Name"
                className="bg-[#f4d665] border border-[#6e451c] h-[50px] rounded-[30px] p-2"
              />
            </View>
            <View className="w-[270px]">
              <Text className="mb-2">Email</Text>
              <TextInput
                placeholder="Enter your Email"
                className="bg-[#f4d665] border border-[#6e451c] h-[50px] rounded-[30px] p-2"
              />
            </View>
            <View className="w-[270px]">
              <Text className="mb-2">Password</Text>
              <TextInput
                placeholder="Enter your Password"
                className="bg-[#f4d665] border border-[#6e451c] h-[50px] rounded-[30px] p-2"
              />
            </View>

            <View className="flex-row items-center justify-between w-[270px] mt-3">
              <View className="flex-row items-center">
                <CheckBox
                  onPress={() => setRememberMe(!rememberMe)}
                  containerStyle={{
                    backgroundColor: "#f4d665",
                    borderColor: "#6e451c",
                    width: 25,
                    height: 23,
                    padding: 0,
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                  center={true}
                  checked={rememberMe}
                  checkedIcon={
                    <FontAwesome name="check" size={20} color="black" />
                  }
                  uncheckedIcon={
                    <FontAwesome name="check" size={24} color="transparent" />
                  }
                />
                <Text className="text-xs">Accept Terms and Conditions</Text>
              </View>
            </View>
          </ImageBackground>
          <TouchableOpacity>
            <ImageBackground
              source={Button}
              className="relative top-[-40px] w-[210px] h-[70px] flex- items-center justify-center"
            >
              <Text className="text-white text-xl font-bold">Register</Text>
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <Text className="text-lg text-white font-bold text-center mb-2">
              Already Have an Account?
            </Text>
            <TouchableOpacity onPress={() => handleLogin()}>
              <ImageBackground
                source={Button}
                className=" w-[210px] h-[70px] flex- items-center justify-center"
              >
                <Text className="text-white text-xl font-bold">Login</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
