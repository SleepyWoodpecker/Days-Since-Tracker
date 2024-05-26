import { View, Text, StyleSheet, Dimensions } from "react-native";
import theme from "../../theme";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: width - theme.appMargin * 2,
    gap: 15,
  },
  whiteText: {
    color: theme.colors.textLight,
  },
  bodyText: {
    fontSize: theme.fontSize.h4,
    fontFamily: theme.font.bodyText,
  },
  headerText: {
    fontSize: theme.fontSize.h0,
    fontFamily: theme.font.headerText,
  },
});

const LongestStreakCard = ({ days, habitName }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.whiteText, styles.bodyText]}>Longest Streak</Text>
      <View style={{ justifyContent: "start", alignItems: "center" }}>
        <Text
          style={[styles.whiteText, styles.headerText, { marginVertical: -5 }]}
        >
          {days}
        </Text>
        <Text style={[styles.whiteText, styles.headerText, { marginTop: -5 }]}>
          Days
        </Text>
      </View>
      <Text style={[styles.whiteText, styles.bodyText]}>{habitName}</Text>
    </View>
  );
};

export default LongestStreakCard;
