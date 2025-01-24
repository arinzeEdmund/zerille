import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import * as Animatable from "react-native-animatable";
import { colors } from "@/src/theme";
import { addTask, editTask } from "@/src/store/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { allState } from "@/src/mock";

const AddTaskScreen = ({navigation}: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("ongoing");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(allState);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill out all fields");
      return;
    }
    const newTask = {
      id: Math.random(),
      title,
      description,
      completionStatus: status,
    };
    dispatch(addTask(newTask));
    alert("TASK ADDED");
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
        <View style={styles.headerTop}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="chevron-left" size={25} color="#000" />
            </TouchableOpacity>
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

        <Text
          style={styles.submitTask}
        >
          Submit Task
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            value={title}
            onChangeText={(txt) => {
              setTitle(txt);
            }}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter task description"
            value={description}
            onChangeText={(txt) => {
              setDescription(txt);
            }}
            multiline
          />

          <Text style={styles.label}>Completion Status</Text>
          <DropDownPicker
            open={open}
            value={status}
            items={items}
            setOpen={setOpen}
            setValue={setStatus}
            setItems={setItems}
            placeholder="Select a status"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />
        </View>

        <Animatable.View
          animation={"slideInUp"}
          duration={2000}
          style={styles.buttonContainer}
        >
          <TouchableOpacity
            disabled={loading ? true : false}
            onPress={() => {
              handleAddTask();
            }}
            style={{
              ...styles.submitButton,
              backgroundColor: loading
                ? colors.primary[300]
                : colors.primary.main,
            }}
          >
            {loading ? (
              <ActivityIndicator size={"small"} color={colors.primary[10]} />
            ) : (
              <Text
                style={styles.submitButtonTitle}
              >
                Submit Task
              </Text>
            )}
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default AddTaskScreen;
