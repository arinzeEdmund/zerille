import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { colors } from "@/src/theme";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { Pressable } from "react-native";
import { InputBoxProps } from "@/types/inputBoxTypes";

const InputBox = ({
  value,
  boxWidth,
  boxHeight,
  boxBorderColor = colors.gray[400],
  boxBorderWidth = 1,
  displayFloatingLabel,
  placeholder,
  label,
  onBlur,
  onFocus,
  keyboardType,
  textInputWidth,
  secureTextEntry,
  iconName,
  iconSize,
  iconColor,
  displayIcon,
  labelBackgroundColor = colors.primary[1200],
  switchIcon,
  onChangeText,
  editable
}: InputBoxProps) => {
  return (
    <>
    <View
      style={{
        ...styles.container,
        width: boxWidth,
        height: boxHeight,
        borderWidth: boxBorderWidth,
        borderColor: boxBorderColor,
      }}
    >
      <Animatable.View
        animation={"fadeIn"}
        duration={2500}
        style={{
          ...styles.floatingLabel,
          backgroundColor: labelBackgroundColor,
          display: displayFloatingLabel,
        }}
      >
        <Text style={styles.label}>{label}</Text>
      </Animatable.View>
      <TextInput
        editable={editable}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        autoCapitalize="none"
        onChangeText={onChangeText}
        placeholderTextColor={colors.gray[400]}
        style={{ ...styles.textInputStyles, width: textInputWidth }}
      />
      <Pressable
        onPress={switchIcon}
        style={{ ...styles.iconContainer, display: displayIcon }}
      >
        <Feather name={iconName} size={iconSize} color={iconColor} />
      </Pressable>
    </View>
    </>
  );
};

export default InputBox;
