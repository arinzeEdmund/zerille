import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";
import { projectsData } from "@/src/mock";

const stages = ["All", "Ongoing", "Completed", "Canceled"];
const today = new Date();
const formattedDate = today.toISOString().split("T")[0];

const ProjectScreen = () => {
  const [active, setActive] = useState("All");
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Projects</Text>
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

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
        {stages.map((item, index) => {
          return (
            <TouchableOpacity
            onPress={() => setActive(item)}
              key={index}
              style={[
                styles.tab,
                { backgroundColor: active === item ? "#6A5AE0" : "#F6F6F6" },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  active === item && styles.activeTabText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
        </ScrollView>
      </View>

      {/* Projects List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {projectsData.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectSubtitle}>{project.subtitle}</Text>

              <View style={styles.projectTeamContainer}>
                <Text style={styles.teamText}>Team</Text>
                <View style={styles.teamImages}>
                  {project.team.map((member, idx) => (
                    <Image
                      key={idx}
                      source={{ uri: member }}
                      style={styles.teamImage}
                    />
                  ))}
                  <TouchableOpacity style={styles.addMemberButton}>
                    <Feather name="edit-2" size={10} color="#FFF" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.projectDetailsRow}>
                <View style={styles.projectDetailItem}>
                  <Ionicons name="calendar-outline" size={16} color="#C4C4C4" />
                  <Text style={styles.projectDetailText}>{formattedDate}</Text>
                </View>
                <View style={styles.projectDetailItem}>
                  <Ionicons name="checkbox-outline" size={16} color="#C4C4C4" />
                  <Text style={styles.projectDetailText}>
                    {project.tasks} Tasks
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.projectProgress}>
              <Text style={styles.progressText}>{project.progress}%</Text>
              <View style={styles.progressCircle}>
                <View
                  style={[
                    styles.progressBar,
                    { transform: [{ rotate: `${project.progress * 3.6}deg` }] },
                  ]}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};



export default ProjectScreen;
