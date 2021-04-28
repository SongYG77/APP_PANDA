import React, { Component, useState } from "react";
import { dummyData, COLORS, SIZES, FONTS, icons, images } from "../constants";
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { RNS3 } from "react-native-aws3";
import { launchImageLibrary } from "react-native-image-picker";
import { State } from "react-native-gesture-handler";
import Video from 'react-native-video';

const UploadScreen = () => {
  // class에서 this.state.filePath, this.setState 와 같은 뜻이다.
  const [filePath, setFilePath] = useState({});
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState("");
  const [video_uri, setvideouri] = useState();
  const randomValue = () => {
    for (var i = 0; i < 5; i++) {
      value = Math.random() * 5 + 1;
    }
    return value;
  };

  const chooseFile = () => {
    let options = {
      mediaType: "video",
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);
      setUploadSuccessMessage("");
      if (response.didCancel) {
        alert("User cancelled camera picker");
        return;
      } else if (response.errorCode == "camera_unavailable") {
        alert("Camera not available on device");
        return;
      } else if (response.errorCode == "permission") {
        alert("Permission not satisfied");
        return;
      } else if (response.errorCode == "others") {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response);
    });
  };

  const uploadFile = () => {
    if (Object.keys(filePath).length == 0) {
      alert("Please select video first");
      return;
    }
    RNS3.put(
      {
        // `uri` can also be a file system path (i.e. file://)
        uri: filePath.uri,
        name: randomValue() + ".mp4",
        type: "video/mp4",
      },
      {
        keyPrefix: "myuploads/", // Ex. myuploads/
        bucket: "react-native-s3-bucket", // Ex. aboutreact
        region: "ap-northeast-2", // Ex. ap-south-1
        accessKey: "",
        // Ex. AKIH73GS7S7C53M46OQ
        secretKey: "",
        // Ex. Pt/2hdyro977ejd/h2u8n939nh89nfdnf8hd8f8fd
        successActionStatus: 201,
      }
    )
      .progress((progress) =>
        setUploadSuccessMessage(
          `Uploading: ${progress.loaded / progress.total} (${
            progress.percent
          }%)`
        )
      )
      .then((response) => {
        if (response.status !== 201) alert("Failed to upload video to S3");
        console.log(response.body);
        setFilePath("");
        let { bucket, etag, key, location } = response.body.postResponse;
        setUploadSuccessMessage(
          `Uploaded Successfully: 
          \n1. bucket => ${bucket}
          \n2. etag => ${etag}
          \n3. key => ${key}
          \n4. location => ${location}`
        );
        setvideouri(location);
        /**
         * {
         *   postResponse: {
         *     bucket: "your-bucket",
         *     etag : "9f620878e06d28774406017480a59fd4",
         *     key: "uploads/image.png",
         *     location: "https://bucket.s3.amazonaws.com/**.png"
         *   }
         * }
         */
      });
  };
  const updateServer = () => {
    // console.log(video_uri);
    let show_code = Math.random().toString(36).substr(2, 11);
    fetch("http://3.36.228.255:8088/jpa/S3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: video_uri,
        code: show_code,
      }),
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
        Alert("ERROR! Check your log");
      });

    setvideouri(null);
    setUploadSuccessMessage(
      `The video has been uploaded.
      \n- code => ${show_code}
      \n- url => ${video_uri}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Video 업로드</Text>
      <View style={styles.container}>
        {filePath.uri ? (
          <>
            <Text style={styles.textStyle}>{filePath.uri}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyleGreen}
              onPress={uploadFile}
            >
              <Text style={styles.textStyleWhite}>Upload Video</Text>
            </TouchableOpacity>
          </>
        ) : null}
        {uploadSuccessMessage ? (
          <Text style={styles.textStyleGreen}>{uploadSuccessMessage}</Text>
        ) : null}
        {video_uri ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyleGreen}
            onPress={updateServer}
          >
            <Text style={styles.textStyleWhite}>Update Server</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={chooseFile}
        >
          <Text style={styles.textStyleWhite}>Choose Video</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.black,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
    color: "white",
  },
  textStyle: {
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  textStyleGreen: {
    padding: 10,
    color: "green",
  },
  textStyleWhite: {
    padding: 10,
    color: "white",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "orange",
    marginVertical: 10,
    width: "100%",
  },
  buttonStyleGreen: {
    alignItems: "center",
    backgroundColor: "green",
    marginVertical: 10,
    width: "100%",
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    margin: 5,
  },
});
