import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";
import { StyleSheet, Pressable } from "react-native";
import habitFormStore from "../../stores/NewHabitFormStore";

const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    padding: 5,
    borderRadius: 5,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginVertical: 5,
    borderRadius: 100,
  },
});

const IconListItem = ({ iconName, modalRef }) => {
  const formStore = habitFormStore;

  const handleIconSelection = (iconName) => {
    formStore.setIconName(iconName);
    modalRef.current?.close();
  };

  return (
    <Pressable
      style={styles.iconContainer}
      onPress={() => handleIconSelection(iconName)}
    >
      <AntDesign name={iconName} size={50} color={"black"} />
    </Pressable>
  );
};

export default IconListItem;
