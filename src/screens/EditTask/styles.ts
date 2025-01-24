import { Platform, StyleSheet } from "react-native";
import { width, height, GeneralPadding } from "@src/constants/dimensions";
import { colors } from "@/src/theme";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: { flex: 1, backgroundColor: "#FFF", paddingHorizontal: 20 },
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

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    backgroundColor: "#FFF",
    overflow: "hidden",
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    height: 60,
    backgroundColor: "#FFF",
    marginBottom: 15,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  buttonContainer: { marginTop: 40, width: "100%" },

  submitButton: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  submitButtonTitle: {
    color: colors.primary[10],
    fontSize: 18,
    fontWeight: "bold",
  },

  screenTtile: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 50,
    fontWeight: "bold",
  },
});

export default styles;
