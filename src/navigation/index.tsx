import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../theme";
import GetStartedScreen from "@src/screens/authScreens/getStartedScreen";
import WaitScreen from "../screens/authScreens/waitScreen";
import HomeScreen from "../screens/homeScreen";
import ProjectScreen from "../screens/ProjectScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RoutineScreen from "../screens/RoutineScreen";
import AddTaskScreen from "../screens/AddTask";
import EditTask from "../screens/EditTask";

const AuthStacks = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <AuthStacks.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStacks.Screen
        component={GetStartedScreen}
        name="GetStartedScreen"
        options={{
          headerShown: false,
        }}
      />
    </AuthStacks.Navigator>
  );
};

const HomeStacks = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <HomeStacks.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStacks.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
      />
      <HomeStacks.Screen
        component={EditTask}
        name="EditTask"
        options={{
          headerShown: false,
        }}
      />

<HomeStacks.Screen
        component={AddTaskScreen}
        name="AddTaskScreen"
        options={{
          headerShown: false,
        }}
      />
    </HomeStacks.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gray[1000],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.primary[10],
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "grid-outline" : "grid-outline"}
              size={20}
              color={focused ? colors.primary.main : colors.gray[300]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EditTask"
        component={ProjectScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "folder" : "folder-outline"}
              size={20}
              color={focused ? colors.primary.main : colors.gray[300]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InProcess"
        component={AddTaskScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "add" : "add"}
              size={30}
              color={colors.primary.main}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Complete"
        component={RoutineScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "paper-plane" : "paper-plane-outline"}
              size={20}
              color={focused ? colors.primary.main : colors.gray[300]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={20}
              color={focused ? colors.primary.main : colors.gray[300]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BaseStack = createNativeStackNavigator();
const BaseNavigator = () => {
  return (
    <BaseStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BaseStack.Screen
        component={WaitScreen}
        name="WaitScreen"
        options={{
          headerShown: false,
        }}
      />
      <BaseStack.Screen
        component={EditTask}
        name="EditTask"
        options={{
          headerShown: false,
        }}
      />
      <BaseStack.Screen
        component={BottomTabNavigator}
        name="BottomTabNavigator"
        options={{
          headerShown: false,
        }}
      />
      <BaseStack.Screen
        component={AuthStack}
        name="AuthStack"
        options={{
          headerShown: false,
        }}
      />
    </BaseStack.Navigator>
  );
};

export default BaseNavigator;
