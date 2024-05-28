import { observer } from "mobx-react-lite";
import habitFormStore from "../../stores/NewHabitFormStore";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
} from "react-native";
import theme from "../../theme";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    backgroundColor: theme.colors.accent,
    fontFamily: theme.font.bodyText,
    fontSize: theme.fontSize.h4,
    padding: 15,
    paddingHorizontal: 10,
    width: ((width - 2 * theme.appMargin) * 10) / 12,
    borderRadius: 5,
  },
  formContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,
    marginTop: theme.componentMargin,
  },
});

const HabitForm = observer(() => {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={"Habit to break"}
        value={habitFormStore.habitName}
        onChangeText={(e) => {
          habitFormStore.setHabitName(e);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder={"Goal (Days)"}
        value={habitFormStore.goal}
        onChangeText={(e) => {
          habitFormStore.setGoal(e);
        }}
      />
      <TextInput
        style={[styles.textInput, { height: 100 }]}
        placeholder={"Reason to break habit"}
        value={habitFormStore.reason}
        onChangeText={(e) => {
          habitFormStore.setReason(e);
        }}
        multiline
        numberOfLines={5}
      />
    </View>
  );
});

export default HabitForm;
