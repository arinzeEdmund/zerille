import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { colors } from "@/src/theme";

const RoutineScreen = () => {
  const today = new Date();
const formattedDate = today.toISOString().split("T")[0];
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Ionicons name="calendar-outline" size={20} color="#000" />
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="search-outline" size={24} color="#000" />
          <Ionicons
            name="menu-outline"
            size={24}
            color="#000"
            style={styles.menuIcon}
          />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Project Board</Text>

      {/* Task Status Cards */}
      <View style={styles.statusContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={[styles.statusCard, { backgroundColor: "#6A5AE0" }]}
          >
            <Text style={styles.statusText}>Ongoing</Text>
            <Ionicons
              style={styles.icon}
              name="reload-outline"
              size={24}
              color={colors.primary[10]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusCard, { backgroundColor: "#FBBF24" }]}
          >
            <Text style={styles.statusText}>In Process</Text>
            <Ionicons
              style={styles.icon}
              name="time-outline"
              size={24}
              color={colors.primary[10]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={[styles.statusCard, { backgroundColor: "#35AC7E" }]}
          >
            <Text style={styles.statusText}>Complete</Text>
            <Ionicons
              style={styles.icon}
              name="checkmark-outline"
              size={24}
              color={colors.primary[10]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusCard, { backgroundColor: "#F87171" }]}
          >
            <Text style={styles.statusText}>Cancel</Text>
            <Ionicons
              style={styles.icon}
              name="close-outline"
              size={24}
              color={colors.primary[10]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const taskData = [
  {
    name: "Dashboard Design",
    completed: false,
    assignees: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/1.jpg",
    ],
  },
  {
    name: "Mobile App Design",
    completed: true,
    assignees: [
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
    ],
  },
  {
    name: "Wireframe Design",
    completed: true,
    assignees: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
    ],
  },
];

export default RoutineScreen;
