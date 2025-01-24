import { PixelRatio, Platform, Dimensions } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
import * as ImagePicker from "expo-image-picker";
import React from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FORTLINK_APP_STATE } from "./constants";
import axios from "axios";
import { cloudinaryUrl, cloudName, uploadPreset } from "../constants";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

export const timeFrame = `${year}-${month}-${day}`;

const currencyFormat = (num: number) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const currencyFormater = (num: number): string => {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
};

const numberWithCommas = (value: any) => {
  try {
    value = Number(value).toFixed(0);
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (error) {
    return value;
  }
};

const separate4digitsWithSpace = (value: any) => {
  try {
    value = Number(value).toFixed(0);
    return value.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
  } catch (error) {
    return value;
  }
};

const formatPhoneNumber = (value: any) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  } else {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }
};

const formatSSN = (value: any) => {
  if (!value) return value;
  const SSN = value.replace(/[^\d]/g, "");
  const SSNLength = SSN.length;
  if (SSNLength < 4) return SSN;
  if (SSNLength < 7) {
    return `${SSN.slice(0, 3)} ${SSN.slice(3)}`;
  } else {
    return `${SSN.slice(0, 4)}-${SSN.slice(4, 6)}-${SSN.slice(6, 10)}`;
  }
};

const normalize = (size: any) => {
  const scale = SCREEN_WIDTH / 320;
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const pickImageFromGallery = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true,
  });

  if (!result.canceled) {
    let newFile = {
      uri: result.assets[0].uri,
      type: `test/${result.assets[0].uri.split(".")[1]}`,
      name: `img/${result.assets[0].uri.split(".")[1]}`,
    };
    const data = new FormData();
    data.append("file", newFile as any);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);

    fetch(cloudinaryUrl, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        return data.secure_url;
      });
  }
};

const takeImageSnapshot = async () => {
  let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    let newFile = {
      uri: result.assets[0].uri,
      type: `test/${result.assets[0].uri.split(".")[1]}`,
      name: `img/${result.assets[0].uri.split(".")[1]}`,
    };
    const data = new FormData();
    data.append("file", newFile as any);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);
    fetch(cloudinaryUrl, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        return data.secure_url;
      });
  }
};

const formatSparkLine = (number: any) => {
  const sevenDaysAgo = moment().subtract(7, "days").unix();
  let formattedSparkLine = number.map((item: string, index: number) => {
    return {
      x: sevenDaysAgo + (index + 1) * 3600,
      y: item,
    };
  });
  return formattedSparkLine;
};

export const formatMarketData = (data: any) => {
  let formattedData: any = [];

  if (data) {
    data.forEach((item: any) => {
      const formattedSparkline = formatSparkLine(item.sparkline_in_7d.price);

      const formattedItems = {
        ...item,
        sparkline_in_7d: {
          price: formattedSparkline,
        },
      };
      formattedData.push(formattedItems);
    });
  }
  return formattedData;
};

export const getAuthToken = async () => {
  return await AsyncStorage.getItem("fortlinkAuthToken:token");
};

export const setAuthToken = (token: string) => {
  return AsyncStorage.setItem("fortlinkAuthToken:token", token);
};

export const getAppState = async () => {
  let appStateResult = JSON.parse(
    (await AsyncStorage.getItem(FORTLINK_APP_STATE)) as string
  );
  return appStateResult?.data;
};

export const clearAsyncStorage = async () => {
  return await AsyncStorage.clear();
};

export const toCamelCase = (str: string) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const spaceTexts = (textGroup: any) => {
  const trimmedTextGroup = textGroup.trim();
  const textsArray = trimmedTextGroup.split(",");
  const trimmedTexts = textsArray.map((text: any) => text.trim());
  return trimmedTexts.join(",  ");
};

export const formatNumber = (number: any) => {
  return Number(number).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export {
  validateEmail,
  currencyFormat,
  currencyFormater,
  numberWithCommas,
  separate4digitsWithSpace,
  formatPhoneNumber,
  formatSSN,
  normalize,
  pickImageFromGallery,
  takeImageSnapshot,
};
