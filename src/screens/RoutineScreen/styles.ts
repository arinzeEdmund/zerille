import { Platform, StyleSheet } from "react-native";
import { width, height, GeneralPadding } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary[10], 
  },
  container: { flex: 1, backgroundColor: colors.primary[10], paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerTop: { flexDirection: "row", alignItems: "center" },
  dateText: { fontSize: 16, color: "#000", marginRight: 10 },
  headerIcons: { flexDirection: "row" },
  menuIcon: { marginLeft: 15 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 20,
  },
  statusContainer: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statusCard: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    height: 100,
    width: '48%'
  },
  icon: {

    position: 'absolute',
    top: 15,
    left: 150
  },
  statusText: {
    color: colors.primary[10],
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskListHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  taskListTitle: { fontSize: 18, color: "#000", fontWeight: "bold" },
  allTasksButton: { flexDirection: "row", alignItems: "center" },
  allTasksText: { color: "#6A5AE0", marginRight: 5, fontSize: 14 },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
  },
  taskInfo: { flexDirection: "row", alignItems: "center" },
  taskName: { marginLeft: 10, fontSize: 16, color: "#000" },
  taskAssignees: { flexDirection: "row" },
  assigneeImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -10,
    borderWidth: 1,
    borderColor: colors.primary[10],
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
});

export default styles;
