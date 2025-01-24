import { Platform, StyleSheet } from "react-native";
import { width, height, GeneralPadding } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary[10],
  },
  container: { flex: 1, backgroundColor: "#FFF", paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerTop: { flexDirection: "row", alignItems: "center" },
  dateText: { fontSize: 16, color: "#000", marginRight: 10, fontWeight: 'bold' },
  headerIcons: { flexDirection: "row" },
  menuIcon: { marginLeft: 15 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 20,
  },
  addTask: {
    fontSize: 18,
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
    left: 120
  },
  statusText: {
    color: "#FFF",
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
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
  },
  taskInfo: { flexDirection: "row", alignItems: "center" },
  taskName: { marginLeft: 10, fontSize: 16, color: "#000" },
  taskDecp: { marginLeft: 10, fontSize: 8, marginTop:4, color: "#000" },
  taskAssignees: { flexDirection: "row", alignItems: 'center' },
  assigneeImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFF",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 50
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
   height: 60,
    paddingHorizontal: 10,
    backgroundColor: colors.primary[10],
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    paddingHorizontal: 10

  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: colors.primary[10],
    overflow: 'hidden',
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    height: 60,
    backgroundColor: colors.primary[10],
    marginBottom: 15,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: colors.primary[10],
  },
  buttonContainer: { marginTop: 40, width: "100%" },
  addTaskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  statusContainer_: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  innerStatusContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  }

});

export default styles;
