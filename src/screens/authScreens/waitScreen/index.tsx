import {
  View,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationParams } from "../../../navigation/types";
import { colors } from "@/src/theme";


const WaitScreen = () => {
  const navigation = useNavigation<NavigationParams>();

  useEffect(() => {
    navigation.replace("AuthStack", { screen: "GetStartedScreen" });
  }, []);



  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.primary[1200],
      }}
    >
      <StatusBar
        backgroundColor={colors.primary[1200]}
        barStyle={"dark-content"}
      />
      <>
        <ActivityIndicator size="large" color={colors.primary[10]} />
      </>
    </View>
  );
};

export default WaitScreen;
