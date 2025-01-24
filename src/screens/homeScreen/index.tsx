import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "@/src/store/taskSlice";
import { colors } from "@/src/theme";

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const handleDeleteTask = (id: string) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => dispatch(deleteTask(id)),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.dateText}>Welcome to Zerille</Text>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>Today</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddTaskScreen");
            }}
            style={styles.addTaskContainer}
          >
            <Text style={styles.addTask}>Add Task</Text>
            <Ionicons name={"add"} size={30} color={colors.primary.main} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Task Status Cards */}
          <View style={styles.statusContainer}>
            <View style={styles.statusContainer_}>
              <TouchableOpacity
                style={[
                  styles.statusCard,
                  { backgroundColor: colors.primary.main },
                ]}
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
                style={[
                  styles.statusCard,
                  { backgroundColor: colors.primary.main_yellow },
                ]}
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
            <View style={styles.innerStatusContainer}>
              <TouchableOpacity
                style={[
                  styles.statusCard,
                  { backgroundColor: colors.primary.main_green },
                ]}
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
                style={[
                  styles.statusCard,
                  { backgroundColor: colors.primary.main_red },
                ]}
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

          {/* Task List */}
          <View style={styles.taskListHeader}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.taskListTitle}>Tasks</Text>
            </View>
            <TouchableOpacity style={styles.allTasksButton}>
              <Text style={styles.allTasksText}>All Tasks</Text>
              <Ionicons
                name="chevron-down-outline"
                size={18}
                color={colors.primary.main}
              />
            </TouchableOpacity>
          </View>
          {tasks.map((task: any, index: number) => (
            <View key={index} style={styles.taskItem}>
              <View style={styles.taskInfo}>
                <Ionicons
                  name={task.completed ? "checkbox-outline" : "square-outline"}
                  size={24}
                  color={task.completed ? "#35AC7E" : "#C4C4C4"}
                />
                <View>
                  <Text style={styles.taskName}>{task.title}</Text>
                  <Text style={styles.taskDecp}>{task.description}</Text>
                </View>
              </View>
              <View style={styles.taskAssignees}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("EditTask", { data: task });
                  }}
                >
                  <Feather
                    name="edit-2"
                    size={20}
                    color={colors.primary.main}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    handleDeleteTask(task?.id);
                  }}
                >
                  <MaterialIcons
                    name="delete"
                    size={24}
                    color={colors.primary.main}
                    style={{ marginLeft: 8 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
