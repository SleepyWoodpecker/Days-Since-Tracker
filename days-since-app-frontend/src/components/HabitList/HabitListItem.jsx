import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  habitItem: {
    backgroundColor: theme.colors.accent,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    width: "100%",
    height: 70,
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    borderRadius: 15,
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.2,
  },
  listBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: theme.fontSize.h4,
    fontFamily: theme.font.bodyText,
  },
  iconBox: {
    backgroundColor: theme.colors.green,
    padding: 3,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const HabitListItem = ({ habitName, days }) => {
  return (
    <View style={styles.habitItem}>
      <View style={styles.listBox}>
        <View style={styles.iconBox}>
          <AntDesign
            name="picture"
            size={theme.listIconSize}
            color={theme.colors.borderColor}
          />
        </View>
      </View>
      <View style={styles.listBox}>
        <Text style={styles.text}>{habitName}</Text>
      </View>
      <View style={styles.listBox}>
        <Text style={styles.text}>{days}</Text>
      </View>
    </View>
  );
};

export default HabitListItem;
