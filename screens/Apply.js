import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
} from "react-native";
import { Extrapolate } from "react-native-reanimated";

import { Profiles, ProgressBar } from "../components";

import {
  youtubers,
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
} from "../constants";
import { newSeason } from "../constants/dummy";

const Apply = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.white,
            ...FONTS.h3,
          }}
        >
          Apply 화면
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Apply;
