import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
          <Ionicons name="menu" size={24} color="black" style={styles.icon} />
        </View>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.taskInfo}>
          <View style={styles.taskItem}>
            <Text style={styles.taskCount}>135</Text>
            <Text style={styles.taskLabel}>Complete Task</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskCount}>20</Text>
            <Text style={styles.taskLabel}>Ongoing Task</Text>
          </View>
        </View>
        <Text style={styles.name}>Nasir Bin Borhan</Text>
        <Text style={styles.role}>Lead Designer</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Explore Section */}
      <View style={styles.exploreSection}>
        <View style={styles.exploreRow}>
          <ExploreItem title="Members" icon="people" />
          <ExploreItem title="Go Pro" icon="trophy" />
          <ExploreItem title="Report" icon="pie-chart" />
        </View>
        <View style={styles.exploreRow}>
          <ExploreItem title="Settings" icon="settings" />
          <ExploreItem title="Log Out" icon="log-out" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ExploreItem = ({ title, icon }: any) => {
  return (
    <TouchableOpacity style={styles.exploreItem}>
      <Ionicons name={icon} size={28} color="#6A3EA1" />
      <Text style={styles.exploreText}>{title}</Text>
    </TouchableOpacity>
  );
};



export default ProfileScreen;
