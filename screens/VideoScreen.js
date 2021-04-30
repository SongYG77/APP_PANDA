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

import Video from "react-native-video";

const VideoScreen = ({ navigation, route }) => {
  const URL1 = "https://react-native-s3-bucket.s3.amazonaws.com/myuploads%2F5.689474232715811.mp4"
  return (
      <Video
        source={{ uri: URL1 }}
        style={{  
          flex: 1,
        }}
      />
  );
};

export default VideoScreen;
