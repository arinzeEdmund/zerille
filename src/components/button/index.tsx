import { View, Text, TouchableOpacity, ActivityIndicatorBase } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/buttonTypes";
import { ActivityIndicator } from "react-native";
import { colors } from "@/src/theme";



const Button = ({
  onPress,
  width,
  height,
  backgroundColor,
  titleColor,
  borderRadius = 10,
  title,
  titleFontSize,
  disabled=false,
  loading=false
}: ButtonProps) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      onPress={onPress}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
      }}
    >
      <Text style={{ color: titleColor, fontSize: titleFontSize }}>
        {title}
      </Text>
      {
        loading ? <ActivityIndicator style={{ marginLeft:5 }} size={'small'} color={colors.primary[10]}/> : null
      }
    </TouchableOpacity>
  );
};

export default Button;
