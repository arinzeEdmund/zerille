import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import CustomStatusBar from "@src/components/customStatusBar";
import { colors } from "@src/theme";
import { useFonts } from "expo-font";
import Button from "@/src/components/button";
import * as Device from "expo-device";

const GetStartedScreen = ({ navigation }: any) => {

  let [fontsLoaded] = useFonts({
    Katibeh: require("../../../../assets/fonts/Katibeh-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={colors.primary.main} />
      </View>
    );
  } else {
    return (
      <>
        <CustomStatusBar
          backgroundColor={colors.primary[1000]}
          barStyle={"light"}
        />
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../../assets/gifs/hexwave.gif")}
            style={styles.imageBackground}
          >
            <View style={styles.detailsWrapper}>
              <View style={styles.middleSection}>
                <View style={styles.upperSection}>
                  <View style={styles.logoContainer}>
                    <Image
                      source={require("../../../../assets/logo.png")}
                      style={styles.logoStyles}
                    />
                  </View>
                </View>
                <Text style={styles.title}>
                  Experience the future of productivity with our cutting-edge AI
                  task management technology.
                </Text>
                <Text style={styles.description}>
                  Our task management strategies, once reserved for
                  top-performing teams, are now available to you. Streamline
                  your workflow and make smart decisions in seconds, with no
                  need for constant oversight.
                </Text>
              </View>
              <View style={styles.bottomSection}>
                <Button
                  onPress={() => {
                    navigation.replace("BottomTabNavigator");
                  }}
                  backgroundColor={colors.primary.main}
                  width={"100%"}
                  height={60}
                  title={"Get Started"}
                  titleColor={colors.primary[10]}
                  titleFontSize={18}
                />
                <Text style={styles.agreement}>
                  By clicking "Get Started" you are agreeing to the{" "}
                  <Text style={styles.terms}>Terms of Service</Text>{" "}
                  <Text> </Text>
                  <Text style={styles.promotionalTerms}>
                    Promotional Terms and Conditions
                  </Text>{" "}
                  and <Text style={styles.privacyPolicy}>Privacy Policy</Text>
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </>
    );
  }
};

export default GetStartedScreen;
