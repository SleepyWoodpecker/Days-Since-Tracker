import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme";
import { View, StyleSheet } from "react-native";

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
  },
});

const IconListItem = ({ iconName }) => {
  return (
    <View style={styles.iconContainer}>
      <AntDesign name={iconName} size={50} color={"black"} />
    </View>
  );
};

export default IconListItem;
