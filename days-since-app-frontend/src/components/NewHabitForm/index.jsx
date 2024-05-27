import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import HabitForm from "./HabitForm";

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    alignItems: "center",
  },
  iconCircle: {
    backgroundColor: theme.colors.accent,
    height: 275,
    width: 275,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const NewHabitForm = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.iconCircle}>
        <AntDesign name="picture" size={75} color={theme.colors.borderColor} />
      </View>
      <HabitForm />
    </View>
  );
};

export default NewHabitForm;
