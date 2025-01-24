import { colors } from "@/src/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  floatingLabel: {
    height: 20,
    backgroundColor: colors.primary[1000],
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "absolute",
    top: -10,
    left: 20,
  },
  label: { color: colors.gray[200] },
  textInputStyles: {
    height: "100%",
    color: colors.primary[10],
  },
  iconContainer: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
