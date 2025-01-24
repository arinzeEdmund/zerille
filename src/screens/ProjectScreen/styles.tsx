import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { RFValue } from "react-native-responsive-fontsize";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary[10], // Ensure background color matches the container
  },
  container: { flex: 1, backgroundColor: colors.primary[10], paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#000" },
  headerIcons: { flexDirection: "row" },
  menuIcon: { marginLeft: 15 },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 4,
    backgroundColor: "#F6F6F6",
  },
  activeTab: { backgroundColor: "#6A5AE0" },
  tabText: { fontSize: 14, color: "#C4C4C4" },
  activeTabText: { color: colors.primary[10] },
  projectCard: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  projectInfo: { flex: 3 },
  projectTitle: { fontSize: 16, fontWeight: "bold", color: "#000" },
  projectSubtitle: { fontSize: 14, color: "#6A5AE0", marginVertical: 5 },
  projectTeamContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  teamText: { fontSize: 14, color: "#000", marginRight: 10 },
  teamImages: { flexDirection: "row", marginLeft: 7 },
  teamImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -10,
    borderWidth: 1,
    borderColor: colors.primary[10],
  },
  addMemberButton: {
    width: 30,
    height: 30,
    backgroundColor: "#6A5AE0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
  projectDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  projectDetailItem: { flexDirection: "row", alignItems: "center" },
  projectDetailText: { fontSize: 12, color: "#C4C4C4", marginLeft: 5 },
  projectProgress: { flex: 1, alignItems: "center", justifyContent: "center" },
  progressText: { fontSize: 16, fontWeight: "bold", color: "#000" },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  progressBar: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#35AC7E",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: colors.primary[10],
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "#6A5AE0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
});

export default styles;
