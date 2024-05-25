import { Text, View } from "react-native";
import theme from "../../theme";
import CarousellCircles from "./CarousellCircles";

const styles = {
  displayCardContainer: {
    height: 280,
    width: "100%",
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: {
      height: 7,
    },
    shadowOpacity: 0.25,
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
  whiteText: {
    color: theme.colors.textLight,
  },
  bodyText: {
    fontSize: theme.fontSize.h4,
    fontFamily: theme.font.bodyText,
  },
  headerTextNumber: {
    fontSize: theme.fontSize.h0,
    fontFamily: theme.font.headerText,
  },
  headerTextWord: {
    fontSize: theme.fontSize.h1,
    fontFamily: theme.font.headerText,
  },
};

const DisplayCard = () => {
  return (
    <View style={styles.displayCardContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.whiteText, styles.bodyText]}>Longest Streak</Text>
        <View style={{ justifyContent: "space-evenly", alignItems: "center" }}>
          <Text style={[styles.whiteText, styles.headerTextNumber]}>56</Text>
          {/* To-Do: reduce space here */}
          <Text style={[styles.whiteText, styles.headerTextWord]}>Days</Text>
        </View>
        <Text style={[styles.whiteText, styles.bodyText]}>Habit ABC</Text>
      </View>
      <CarousellCircles numOfCircles={3} />
    </View>
  );
};

export default DisplayCard;
