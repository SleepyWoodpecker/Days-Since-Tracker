import { Dimensions, StyleSheet, View, Pressable, Text } from "react-native";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import HabitForm from "./HabitForm";
import habitFormStore from "../../stores/NewHabitFormStore";
import habitList from "../../stores/HabitListStore";

const { width } = Dimensions.get("screen");

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
  submitButton: {
    marginTop: 40,
    backgroundColor: theme.colors.green,
    padding: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: 20,
    width: ((width - 2 * theme.appMargin) * 8) / 12,
  },
  submitButtonText: {
    fontFamily: theme.font.bodyText,
    fontSize: theme.fontSize.h4,
    textAlign: "center",
  },
});

const NewHabitForm = () => {
  const handleSubmitForm = async () => {
    const { formValues } = habitFormStore;
    r = await habitList.addHabit(formValues);
    console.log(r);
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.iconCircle}>
        <AntDesign name="picture" size={75} color={theme.colors.borderColor} />
      </View>
      <HabitForm />
      <Pressable style={styles.submitButton} onPress={handleSubmitForm}>
        <Text style={styles.submitButtonText}>Start Tracking</Text>
      </Pressable>
    </View>
  );
};

export default NewHabitForm;
