import {
  Dimensions,
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
} from "react-native";
import theme from "../../theme";
import HabitForm from "./HabitForm";
import habitFormStore from "../../stores/NewHabitFormStore";
import habitList from "../../stores/HabitListStore";
import AddImage from "../../../assets/appIcons/add-image.svg";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    alignItems: "center",
    height: "100%",
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

const NewHabitForm = ({ modalRef }) => {
  const handleSubmitForm = async () => {
    const { formValues } = habitFormStore;
    r = await habitList.addHabit(formValues);
    console.log(r);
  };

  const handleOpenModal = () => modalRef.current?.expand();

  return (
    <View style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
      <View style={styles.pageContainer}>
        <Pressable
          onPress={handleOpenModal}
          style={{ height: 275, width: 275, borderRadius: 200 }}
        >
          <View style={styles.iconCircle}>
            <AddImage height={75} fill={theme.colors.borderColor} />
          </View>
        </Pressable>
        <HabitForm />
        <Pressable
          style={styles.submitButton}
          onPress={handleSubmitForm}
          disabled={habitList.loading}
        >
          <Text
            style={[
              styles.submitButtonText,
              { color: habitList.loading ? theme.colors.borderColor : "black" },
            ]}
          >
            Start Tracking
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewHabitForm;
